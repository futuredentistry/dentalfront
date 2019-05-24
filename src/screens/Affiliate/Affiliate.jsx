import React, { useEffect, useContext, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import FirebaseContext from 'modules/Firebase'
import * as STATUS from 'modules/constants/reportStatus'
import StepperButtons from 'ui/StepperButtons'
import FormGrid from 'ui/FormGrid'
import SelectPatient from './components/SelectPatient'
import Success from './components/Success'
import ImageCapture from './components/ImageCapture'
import Review from './components/Review'

// ToDo make segments const in module
const segments = {
    'Top right': null,
    'Top middle': null,
    'Top left': null,
    'Bottom right': null,
    'Bottom middle': null,
    'Bottom left': null,
}

const Affiliate = () => {
    const maxStep = 2
    const [step, setStep] = useState(0)
    const [patients, setPatients] = useState([])
    const [patient, setPatient] = useState(null)
    // @ts-ignore
    const [reportId, setReportId] = useState(null)
    const [search, setSearch] = useState('')
    const [organisation, setOrganisation] = useState('')

    const handleDropSearch = () => {
        setPatients([])
        setPatient(null)
        setOrganisation('')
        setSearch('')
        setReportId(null)
    }

    const [segmentImg, setSegmentImg] = useState(segments)
    const [additionalImg, setAdditionalImg] = useState({})

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

    const formValidator = (n) => {
        let valid = true
        switch (n) {
            case 2:
                if (Object.values(segmentImg).some(val => val === null)) valid = false
                return valid
            default:
                return valid
        }
    }

    const stepper = (n) => {
        switch (n) {
            case 0:
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
            case 2:
                return (
                    <ImageCapture
                        {...{
                            reportId,
                            segmentImg,
                            setSegmentImg,
                            additionalImg,
                            setAdditionalImg,
                        }}
                    />
                )
            default:
                return (
                    <Success
                        patientFirstName={patient && patient.firstName}
                        selectNext={() => setStep(0)}
                    />
                )
        }
    }

    const removeEmptyValues = (obj) => {
        Object.keys(obj).forEach(key =>
            (!obj[key] && obj[key] == null || obj[key] === '') && delete obj[key]
        )
        return obj
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
                        disabledBackButton: false,
                        showSubmitButton: step === maxStep,
                        showNextButton: step < maxStep,
                        disabledNextButton: false,
                        showButtonsGrid: step <= maxStep && step !== 0,
                        increaseOnClick: () => setStep(step + 1),
                        decreaseOnClick: () => setStep(step - 1),
                        onSubmit: () => {
                            firebase.updatePatientReport(reportId,
                                {
                                    // ToDo check segmentImg reverse order at Dentist/Chart.jsx
                                    segmentImg,
                                    additionalImg: removeEmptyValues(additionalImg),
                                    status: STATUS.REVIEW
                                }
                            ).then(() => {
                                handleDropSearch()
                                setStep(step + 1)
                                setSegmentImg(segments)
                                setAdditionalImg({})
                            })
                        },
                        disabledSubmit: !formValidator(maxStep),
                    }}
                    />
                </>
            </FormGrid>

        </>
    )
}
export default Affiliate
