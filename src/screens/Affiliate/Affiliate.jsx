import React, { useEffect, useContext, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import FirebaseContext from 'modules/Firebase'

import StepperButtons from 'ui/StepperButtons'
import FormGrid from 'ui/FormGrid'
import SelectPatient from './components/SelectPatient'
import Success from './components/Success'
import ImageCapture from './components/ImageCapture'
import Review from './components/Review'

const Affiliate = () => {
    const maxStep = 3
    const [step, setStep] = useState(0)
    const [patients, setPatients] = useState([])
    const [patient, setPatient] = useState(null)
    // @ts-ignore
    const [, setReportId] = useState(null)
    const [search, setSearch] = useState('')
    const [organisation, setOrganisation] = useState('')

    const firebase = useContext(FirebaseContext)
    useEffect(() => {
        if (organisation !== '') {
            firebase.getPatientReportsForAffiliate(organisation).then(
                (querySnapshot) => {
                    const newPatients = []
                    querySnapshot.forEach(doc => newPatients.push({ ...doc.data(), id: doc.id }))
                    setPatients(newPatients)
                },
            )
        }
    }, [organisation])

    const stepper = (n) => {
        switch (n) {
            case 2:
                return (
                    <SelectPatient {...{
                        setStep,
                        patients,
                        setPatient,
                        search,
                        setSearch,
                        setReportId,
                        organisation,
                        setOrganisation,
                    }}
                    />
                )
            case 1:
                return patient && <Review {...patient} />
            case 0:
                return <ImageCapture />
            default:
                return (
                    <Success
                      patientFirstName={patient && patient.firstName}
                      selectNext={() => setStep(0)}
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
                        showSubmitButton: false,
                        showNextButton: step !== maxStep,
                        disabledNextButton: false,
                        showButtonsGrid: step !== maxStep && step !== 0,
                        increaseOnClick: () => setStep(step + 1),
                        decreaseOnClick: () => setStep(step - 1),
                        onSubmit: () => setReportId(''),
                        // firebase.updatePatientReport({}), // ToDo drop to reload .then(()=>setReportId(''))
                        disabledSubmit: false,
                    }}
                    />
                </>
            </FormGrid>

        </>
    )
}
export default Affiliate