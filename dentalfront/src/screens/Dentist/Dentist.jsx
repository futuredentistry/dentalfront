import React, { useEffect, useContext, useState } from 'react'

// import * as STATUS from 'modules/constants/reportStatus'
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
    const [reportId, setReportId] = useState(null)
    console.log(reportId)
    const [waitingReport, setWaitingReport] = useState(true)
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
            case 9:
                return (
                    <SelectPatient {...{
                        waitingReport,
                        patientFirstName: patient && patient.firstName,
                        nextStep: () => setStep(1),
                    }}
                    />
                )
            case 1:
                return (patient && (
                    <Patient {...{
                        // About
                        firstName: patient.firstName,
                        birthDate: patient.birthDate,
                        gender: patient.gender,
                        medicare: patient.medicare,
                        privateInsurance: patient.privateInsurance,
                        privateInsuranceOther: patient.privateInsuranceOther,
                        smoker: patient.smoker,
                        softDrinks: patient.softDrinks,
                        alcohol: patient.alcohol,
                        // Dental
                        brush: patient.brush,
                        floss: patient.floss,
                        visitDentist: patient.visitDentist,
                        bloodDiseases: patient.bloodDiseases,
                        allergies: patient.allergies,
                        allergiesList: patient.allergiesList,
                        heartConditions: patient.heartConditions,
                        breathingProblems: patient.breathingProblems,
                        bloodDisorders: patient.bloodDisorders,
                        boneDisease: patient.boneDisease,
                        cancer: patient.cancer,
                        diabetes: patient.diabetes,
                        stroke: patient.stroke,
                        pacemaker: patient.pacemaker,
                        otherConditions: patient.otherConditions,
                        otherConditionsList: patient.otherConditionsList,
                        breath: patient.breath,
                        bleedingGum: patient.bleedingGum,
                        cosmetic: patient.cosmetic,
                        teethPain: patient.teethPain,
                        gumPain: patient.gumPain,
                        grinding: patient.grinding,
                        damagedTeeth: patient.damagedTeeth,
                        sore: patient.sore,
                        oldFillings: patient.oldFillings,
                        dentures: patient.dentures,
                        loose: patient.loose,
                    }}
                    />
                )
                )
            case 0:
                return (
                    <Chart {...{
                        reportId,
                    }}

                    />
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
