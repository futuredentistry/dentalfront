import React, { useEffect, useContext, useState } from 'react'
// import PropTypes from 'prop-types'

import * as STATUS from 'modules/constants/reportStatus'
import FirebaseContext from 'modules/Firebase'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import SelectPatient from './components/SelectPatient'
import Patient from './components/Patient'
import Chart from './components/Chart'
import Report from './components/Report'
import Success from './components/Success'
// import * as ROUTES from 'modules/constants/routes'

const Dentist = () => {
    const [patient, setPatient] = useState(null)
    const [waitingReport, setWaitingReport] = useState(true)
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        firebase.getPatientReportsForDentist().then(
            (querySnapshot) => {
                setWaitingReport(!querySnapshot.empty)
                querySnapshot.forEach((doc) => {
                    setPatient(doc.data())
                    // console.log(doc.data())
                })
            },
        )
    }, [])

    const [validFormStep, setValidFormStep] = useState(false)

    const maxStep = 3
    const [step, setStep] = useState(0)

    // Patient

    // Summary
    const [summaryReview, setSummaryReview] = useState('')

    const formValidator = (n) => {
        const valid = true
        switch (n) {
            case 3:
                return valid
            default:
                return valid
        }
    }

    const steper = (n) => {
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
                return (patient && <Patient />)
            case 2:
                return (
                    <Chart />
                )
            case 3:
                return (
                    <Report />
                )
            default:
                return <Success />
        }
    }

    return (
        <>
            {
                step <= maxStep && step !== 0 && <LinearProgress color="primary" variant="determinate" value={step * 100 / 4} />
            }

            {steper(step)}

            <Grid
              container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="center"
            >

                {
                    step < maxStep && step !== 0 && (
                        <>
                            <Grid item xs={6}>
                                <Button
                                  variant="text"
                                  color="primary"
                                  disabled={step < 1}
                                  onClick={() => setStep(step - 1)}
                                >
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  disabled={!formValidator(step) && validFormStep}
                                  onClick={() => {
                                        setValidFormStep(true)
                                        if (formValidator(step)) {
                                            setStep(step + 1)
                                            setValidFormStep(false)
                                        }
                                    }
                                    }
                                >
                                    Next
                                </Button>
                            </Grid>
                        </>

                    )
                }

                {
                    step === maxStep && (
                        <Grid item xs={12}>
                            <Button
                              variant="contained"
                              color="primary"
                              disabled={!summaryReview}
                              onClick={() => {
                                    setStep(step + 1)
                                    firebase.updatePatientReport({})
                                }
                                }
                            >
                                Submit
                            </Button>
                        </Grid>
                    )
                }
            </Grid>

        </>
    )
}

export default Dentist
