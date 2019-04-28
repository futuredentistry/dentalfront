import React, { useEffect, useContext, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

import FirebaseContext from 'modules/Firebase'

// import * as ROUTES from 'modules/constants/routes'
import SelectPatient from './components/SelectPatient'
import Success from './components/Success'
import ImageCapture from './components/ImageCapture'

const Affiliate = () => {
    const maxStep = 3
    const [step, setStep] = useState(0)
    const [patients, setPatients] = useState([])
    const [patient, setPatient] = useState(null)
    const [waitingReport, setWaitingReport] = useState(true)
    const [search, setSearch] = useState('')
    const [organisation, setOrganisation] = useState('')
    // const [] = useState()
    const firebase = useContext(FirebaseContext)
    useEffect(() => {
        if (organisation !== '') {
            firebase.getPatientReportsForAffiliate(organisation).then(
                (querySnapshot) => {
                    const newPatients = []
                    setWaitingReport(!querySnapshot.empty)
                    querySnapshot.forEach(doc => newPatients.push(doc.data()))
                    setPatients(newPatients)
                },
            )
        }
    }, [organisation])
    // console.log(patients)
    const stepper = (n) => {
        switch (n) {
            case 0:
                return (
                    <SelectPatient {...{
                        nextStep: () => setStep(1),
                        patients,
                        setPatient,
                        search,
                        setSearch,
                        organisation,
                        setOrganisation,
                        waitingReport,
                    }}
                    />
                )
            // case 1:
            //     return patient && <Patient {...patient} />
            case 2:
                return <ImageCapture />
            // case 3:
            //     return <Report {...{ ...segmentsProps, ...propsSummary, ...methodsSummary }} />
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
            {stepper(step)}
        </>
    )
}
export default Affiliate
