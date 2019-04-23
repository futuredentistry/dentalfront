import React, { useEffect, useContext, useState } from 'react'

// import * as STATUS from 'modules/constants/reportStatus'
import FirebaseContext from 'modules/Firebase'
import LinearProgress from '@material-ui/core/LinearProgress'
import { segmentDefaultProps } from 'modules/Dentist/props'
import StepperButtons from 'ui/StepperButtons'
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
        )
    }, [])

    const maxStep = 3
    const [step, setStep] = useState(0)

    // Patient

    // Summary
    const [summaryReview, setSummaryReview] = useState('')

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
                return <Report {...segmentsProps} />
            default:
                return <Success />
        }
    }


    return (
        <>
            {
                step <= maxStep
                && step !== 0
                && <LinearProgress color="primary" variant="determinate" value={step * 100 / maxStep} />
            }

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
                onSubmit: () => firebase.updatePatientReport({}),
                disabledSubmit: false,
            }}
            />

        </>
    )
}

export default Dentist
