import React, { useEffect, useContext, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import FirebaseContext from 'modules/Firebase'
import * as STATUS from 'modules/constants/reportStatus'
import { defaultPropsSegments } from 'modules/Dentist/props'
import StepperButtons from 'ui/StepperButtons'
import FormGrid from 'ui/FormGrid'
import SelectPatient from './components/SelectPatient'
import Patient from './components/Patient'
import Chart from './components/Chart'
import Report from './components/Report'
import Success from './components/Success'
// import * as ROUTES from 'modules/constants/routes'

const Dentist = () => {
    const [patient, setPatient] = useState(null)
    const [reportId, setReportId] = useState(null)
    const [waitingReport, setWaitingReport] = useState(true)

    // Summary
    const [overallHealth, setOverallHealth] = useState('outstanding')
    const [summaryReview, setSummaryReview] = useState('')
    const [risk, setRisk] = useState('no')
    const propsSummary = { summaryReview, overallHealth, risk }
    const methodsSummary = { setSummaryReview, setOverallHealth, setRisk }

    const [segmentProps, setSegmentProps] = useState()

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
            (querySnapshot) => {
                setWaitingReport(!querySnapshot.empty)
                querySnapshot.forEach((doc) => {
                    setPatient(doc.data())
                    setReportId(doc.id)
                })
            },
        ).then(() => patient != null && setReportDefaultProps())
    }, [reportId])

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
                    }}
                    />
                )
            case 1:
                return patient && <Patient {...patient} />
            case 2:
                return <Chart {...{ segmentProps, handleSetSegmentProps, ...patient }} />
            case 3:
                return <Report {...{ segmentProps, handleSetSegmentProps, ...propsSummary, ...methodsSummary }} />
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
                            firebase.updatePatientReport(reportId,
                                {

                                    waitingReport: false,
                                    summary: propsSummary,
                                    report: segmentProps,
                                    status: STATUS.COMPLEATED,
                                }
                            ).then(() => {
                                setStep(step + 1)
                                setReportId('')
                            })
                        },
                        // firebase.updatePatientReport({}), // ToDo drop to reload .then(()=>setReportId(''))
                        disabledSubmit: summaryReview === '',
                    }}
                    />
                </>
            </FormGrid>
        </>
    )
}

export default Dentist
