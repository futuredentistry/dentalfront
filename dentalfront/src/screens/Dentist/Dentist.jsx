import React, { useEffect, useContext, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import FirebaseContext from 'modules/Firebase'
import { segmentDefaultProps } from 'modules/Dentist/props'
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

    // Chart
    const [topRight, setTopRight] = useState({ ...segmentDefaultProps })
    const [topMiddle, setTopMiddle] = useState({ ...segmentDefaultProps })
    const [topLeft, setTopLeft] = useState({ ...segmentDefaultProps })
    const [bottomRight, setBottomRight] = useState({ ...segmentDefaultProps })
    const [bottomMiddle, setBottomMiddle] = useState({ ...segmentDefaultProps })
    const [bottomLeft, setBottomLeft] = useState({ ...segmentDefaultProps })


    // Summary
    const [overallHealth, setOverallHealth] = useState('outstanding')
    const [summaryReview, setSummaryReview] = useState('')
    const [risk, setRisk] = useState('no')
    const propsSummary = { summaryReview, overallHealth, risk }
    const methodsSummary = { setSummaryReview, setOverallHealth, setRisk }

    const setReportDefaultProps = () => {
        setTopRight({ ...segmentDefaultProps })
        setTopMiddle({ ...segmentDefaultProps })
        setTopLeft({ ...segmentDefaultProps })
        setBottomRight({ ...segmentDefaultProps })
        setBottomMiddle({ ...segmentDefaultProps })
        setBottomLeft({ ...segmentDefaultProps })
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
        const segmentsProps = {
            topRight,
            setTopRight,
            topMiddle,
            setTopMiddle,
            topLeft,
            setTopLeft,
            bottomRight,
            setBottomRight,
            bottomMiddle,
            setBottomMiddle,
            bottomLeft,
            setBottomLeft,
        }
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
                return <Chart {...segmentsProps} />
            case 3:
                return <Report {...{ ...segmentsProps, ...propsSummary, ...methodsSummary }} />
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
                        onSubmit: () => setReportId(''),
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
