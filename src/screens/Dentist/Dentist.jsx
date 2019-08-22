import React, { useEffect, useContext, useState } from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'

import FirebaseContext from 'modules/Firebase'
import * as STATUS from 'modules/constants/reportStatus'
import { defaultPropsSegments } from 'modules/Dentist/props'
import StepperButtons from 'ui/StepperButtons'
import FormGrid from 'ui/FormGrid'
import { UserFirstName } from 'utils/logonUser'
import SelectPatient from './components/SelectPatient'
import Patient from './components/Patient'
import Chart from './components/Chart'
import Report from './components/Report'
import Success from './components/Success'

const Dentist = ({ history }) => {
    const [patient, setPatient] = useState(null)

    const [reportId, setReportId] = useState(null)
    const [waitingReport, setWaitingReport] = useState(true)

    // Summary
    const [overallHealth, setOverallHealth] = useState('outstanding')
    const [summaryReview, setSummaryReview] = useState('')
    const [risk, setRisk] = useState('no')
    const propsSummary = { summaryReview, overallHealth, risk }
    const methodsSummary = { setSummaryReview, setOverallHealth, setRisk }

    const [segmentProps, setSegmentProps] = useState(defaultPropsSegments)

    const handleSetSegmentProps = (newSegmentProps) => setSegmentProps({ ...segmentProps, ...newSegmentProps })

    const setReportDefaultProps = () => {
        setSegmentProps(defaultPropsSegments)
        setOverallHealth('outstanding')
        setSummaryReview('')
        setRisk('no')
    }

    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        firebase.getPatientReportsForDentist().then(
            querySnapshot => {
                setPatient(null)
                setWaitingReport(!querySnapshot.empty)
                querySnapshot.forEach(doc => {
                    setPatient(doc.data())
                    setReportId(doc.id)
                })
            },
        ).then(() => setReportDefaultProps())
    }, [reportId])

    const [treatmentSelect, setTreatmentSelect] = useState([])
    const [concernSelect, setConcernSelect] = useState([])
    useEffect(() => {
        firebase.getConcernCollection().then(
            (doc) => {
                if (doc.exists) {
                    // @ts-ignore
                    const concern = Object.values(doc.data()).map(val => ({ value: val, label: val }))
                    setConcernSelect(concern)
                }
            },
        )

        const treatments = []
        firebase.getTreatmentCollection().then(
            querySnapshot => querySnapshot.forEach((doc) => treatments.push({ value: doc.id, label: `${doc.id} $${doc.data().minprice}-$${doc.data().maxprice}` })),
        ).then(() => setTreatmentSelect(treatments))

    }, [])

    const maxStep = 3
    const [step, setStep] = useState(0)

    const stepper = (n) => {
        switch (n) {
            case 0:
                return (
                    <SelectPatient {...{
                        waitingReport,
                        patientFirstName: patient && patient.firstName,
                        nextStep: () => setStep(1),
                        history,
                    }}
                    />
                )
            case 1:
                return patient && <Patient {...patient} />
            case 2:
                return <Chart {...{ segmentProps, handleSetSegmentProps, treatmentSelect, concernSelect, ...patient }} />
            case 3:
                return <Report {...{ ...propsSummary, ...methodsSummary }} />
            default:
                return (
                    <Success {...{
                        waitingReport,
                        patientFirstName: patient && patient.firstName,
                        nextStep: () => setStep(1),
                    }}
                    />
                )
        }
    }

    const insertSqlReport = () => {
        const mapSegment = obj => Object.keys(obj).map(key => [...obj[key].treatment.treatment, ...obj[key].treatment.concern])

        const uniqueFlatArr = arr => [...new Set([].concat(...arr))]

        const reportValues = uniqueFlatArr(mapSegment(segmentProps))

        const addReportSQL = firebase.addReportSQL()

        return addReportSQL({
            id: reportId,
            name: `${patient.firstName} ${patient.familyName}`,
            organisation: patient.organisation,
            email: patient.email,
            risk,
            caries: reportValues.includes('Caries') ? 1 : 0,
            gum_disease: reportValues.includes('Gum Disease') ? 1 : 0,
            wear: reportValues.includes('Wear') ? 1 : 0,
            trauma: reportValues.includes('Trauma') ? 1 : 0,
            cancer: reportValues.includes('Oral Cancer') ? 1 : 0,
            infection: reportValues.includes('Infection') ? 1 : 0,
            other: reportValues.includes('Other') ? 1 : 0,
            capping: reportValues.includes('Capping') ? 1 : 0,
            crown: reportValues.includes('Crown') ? 1 : 0,
            filling: reportValues.includes('Filling') ? 1 : 0,
            root_canal: reportValues.includes('Root Canal') ? 1 : 0,
            tooth_extraction: reportValues.includes('Tooth Extraction') ? 1 : 0,
        })
    }

    return (
        <>
            {
                step <= maxStep
                && step !== 0
                && <LinearProgress color="primary" variant="determinate" value={step * 100 / maxStep} />
            }
            <FormGrid>
                <>
                    {stepper(step)}

                    <StepperButtons {...{
                        maxStep,
                        step,
                        setStep,
                        disabledBackButton: step < 2,
                        showSubmitButton: step === maxStep,
                        showNextButton: step !== maxStep,
                        disabledNextButton: false,
                        showButtonsGrid: step !== (1 + maxStep) && step !== 0,
                        increaseOnClick: () => setStep(step + 1),
                        decreaseOnClick: () => setStep(step - 1),
                        onSubmit: () => {
                            firebase.setPatientReportForPatient(reportId,
                                {
                                    doctor: UserFirstName(),
                                    overallHealth: propsSummary.overallHealth,
                                    risk: propsSummary.risk,
                                    summary: summaryReview,
                                    treatment: [].concat(...Object.keys(segmentProps).map(key => [...segmentProps[key].treatment.treatment])),
                                }
                            )

                            firebase.updatePatientReport(reportId,
                                {
                                    waitingReport: false,
                                    summary: propsSummary,
                                    report: segmentProps,
                                    status: STATUS.COMPLETED,
                                }
                            ).then(() => {
                                insertSqlReport()
                                setReportId(null) // set report id to null to fire useEffect
                                setStep(step + 1)
                            })
                        },
                        disabledSubmit: summaryReview === '',
                    }}
                    />
                </>
            </FormGrid>
        </>
    )
}

Dentist.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
}

export default Dentist
