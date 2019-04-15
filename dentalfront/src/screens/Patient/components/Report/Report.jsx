import React, { useState, useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'

import FirebaseContext from 'modules/Firebase'
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Success from './components/Success'
import Medical from './components/Medical'
import Personal from './components/Personal'
import Lifestyle from './components/Lifestyle'
import Dental from './components/Dental'
import Summary from './components/Summary'

const logonUser = () => JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE))

const Report = (props) => {
    // ToDo move to utils
    const email = useCallback(() => (logonUser() ? logonUser().email : false), [])

    const firebase = useContext(FirebaseContext)

    const maxStep = 4
    const [step, setStep] = useState(0)

    // Personal
    const [firstName, setFirstName] = useState('')
    const [familyName, setFamilyName] = useState('')
    const [selectedDate, handleDateChange] = useState(null)
    const [postcode, setPostcode] = useState('')
    const [gender, setGender] = useState('male')
    const [otherGender, setOtherGender] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [organisation, setOrganisation] = useState('')
    //
    const [medicare, setMedicare] = useState('')
    const [individualNumber, setIndividualNumber] = useState('')
    const [expiredDate, handleExpiredChange] = useState(null)
    const [privateInsurance, setPrivateInsurance] = useState('')
    const [privateInsuranceOther, setPrivateInsuranceOther] = useState('')
    const [includeDental, setInscludeDental] = useState(false)

    // Lifestyle
    const [smoker, setSmoker] = useState('yes')
    const [softDrinks, setSoftDrinks] = useState('every few days')
    const [alcohol, setAlcohol] = useState('every few days')

    // Dental
    const [brush, setBrush] = useState('every few days')
    const [floss, setFloss] = useState('every few days')
    const [visitDentist, setVisitDentist] = useState('every 1-3 years')
    const [comfortable, setComfortable] = useState('yes')
    const [breath, setbreath] = useState(false)
    const [bleedingGum, setbleedingGum] = useState(false)
    const [cosmetic, setcosmetic] = useState(false)
    const [teethPain, setteethPain] = useState(false)
    const [gumPain, setgumPain] = useState(false)
    const [grinding, setgrinding] = useState(false)
    const [damagedTeeth, setdamagedTeeth] = useState(false)
    const [sore, setsore] = useState(false)
    const [oldFillings, setoldFillings] = useState(false)
    const [dentures, setdentures] = useState(false)
    const [loose, setloose] = useState(false)
    const [painTopRight, setPainTopRight] = useState(false)
    const [painTopCenter, setPainTopCenter] = useState(false)
    const [painTopLeft, setPainTopLeft] = useState(false)
    const [painBottomRight, setPainBottomRight] = useState(false)
    const [painBottomCenter, setPainBottomCenter] = useState(false)
    const [painBottomLeft, setPainBottomLeft] = useState(false)

    // Medical
    const [bloodDiseases, setBloodDiseases] = useState('no')
    const [pregnant, setPregnant] = useState('no')
    const [allergies, setAllergies] = useState('no')
    const [allergiesList, setAllergiesList] = useState('')
    const [heartConditions, setHeartConditions] = useState(false)
    const [breathingProblems, setBreathingProblems] = useState(false)
    const [bloodDisorders, setBloodDisorders] = useState(false)
    const [boneDisease, setBoneDisease] = useState(false)
    const [cancer, setCancer] = useState(false)
    const [diabetes, setDiabetes] = useState(false)
    const [stroke, setStroke] = useState(false)
    const [pacemaker, setPacemaker] = useState(false)
    const [otherConditions, setOtherConditions] = useState(false)
    const [otherConditionsList, setOtherConditionsList] = useState('')

    // Summary
    const [research, setResearch] = useState(false)
    const [policy, setPolicy] = useState(false)

    const steper = (n) => {
        switch (n) {
            case 0:
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Personal {...{
                            firstName,
                            setFirstName,
                            familyName,
                            setFamilyName,
                            selectedDate,
                            handleDateChange,
                            postcode,
                            setPostcode,
                            gender,
                            setGender,
                            otherGender,
                            setOtherGender,
                            contactNumber,
                            setContactNumber,
                            organisation,
                            setOrganisation,
                            //
                            medicare,
                            setMedicare,
                            individualNumber,
                            setIndividualNumber,
                            expiredDate,
                            handleExpiredChange,
                            privateInsurance,
                            setPrivateInsurance,
                            privateInsuranceOther,
                            setPrivateInsuranceOther,
                            includeDental,
                            setInscludeDental,
                        }}
                        />
                    </MuiPickersUtilsProvider>
                )
            case 1:
                return (
                    <Lifestyle {...{
                        smoker,
                        setSmoker,
                        softDrinks,
                        setSoftDrinks,
                        alcohol,
                        setAlcohol,
                    }}
                    />
                )
            case 2:
                return (
                    <Dental {...{
                        brush,
                        setBrush,
                        floss,
                        setFloss,
                        visitDentist,
                        setVisitDentist,
                        comfortable,
                        setComfortable,
                        breath,
                        setbreath,
                        bleedingGum,
                        setbleedingGum,
                        cosmetic,
                        setcosmetic,
                        teethPain,
                        setteethPain,
                        gumPain,
                        setgumPain,
                        grinding,
                        setgrinding,
                        damagedTeeth,
                        setdamagedTeeth,
                        sore,
                        setsore,
                        oldFillings,
                        setoldFillings,
                        dentures,
                        setdentures,
                        loose,
                        setloose,
                        painTopRight,
                        setPainTopRight,
                        painTopCenter,
                        setPainTopCenter,
                        painTopLeft,
                        setPainTopLeft,
                        painBottomRight,
                        setPainBottomRight,
                        painBottomCenter,
                        setPainBottomCenter,
                        painBottomLeft,
                        setPainBottomLeft,

                    }}
                    />
                )
            case 3:
                return (
                    <Medical {...{
                        bloodDiseases,
                        setBloodDiseases,
                        pregnant,
                        setPregnant,
                        allergies,
                        setAllergies,
                        allergiesList,
                        setAllergiesList,
                        heartConditions,
                        setHeartConditions,
                        breathingProblems,
                        setBreathingProblems,
                        bloodDisorders,
                        setBloodDisorders,
                        boneDisease,
                        setBoneDisease,
                        cancer,
                        setCancer,
                        diabetes,
                        setDiabetes,
                        stroke,
                        setStroke,
                        pacemaker,
                        setPacemaker,
                        otherConditions,
                        setOtherConditions,
                        otherConditionsList,
                        setOtherConditionsList,
                    }}
                    />
                )
            case 4:
                return (
                    <Summary {...{
                        // Personal
                        firstName,
                        familyName,
                        selectedDate,
                        postcode,
                        gender,
                        otherGender,
                        contactNumber,
                        medicare,
                        privateInsurance,
                        privateInsuranceOther,
                        includeDental,

                        // Lifestyle
                        smoker,
                        softDrinks,
                        alcohol,

                        // Dental
                        brush,
                        floss,
                        visitDentist,
                        comfortable,
                        breath,
                        bleedingGum,
                        cosmetic,
                        teethPain,
                        gumPain,
                        grinding,
                        damagedTeeth,
                        sore,
                        oldFillings,
                        dentures,
                        loose,

                        // Medical
                        bloodDiseases,
                        pregnant,
                        allergies,
                        allergiesList,
                        heartConditions,
                        breathingProblems,
                        bloodDisorders,
                        boneDisease,
                        cancer,
                        diabetes,
                        stroke,
                        pacemaker,
                        otherConditions,
                        otherConditionsList,

                        // Summary
                        research,
                        setResearch,
                        policy,
                        setPolicy,
                    }}
                    />
                )
            default:
                return <Success />
        }
    }

    return (
        <>
            {
                step <= maxStep && <LinearProgress color="primary" variant="determinate" value={step * 100 / 4} />
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
                    step < maxStep && (
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
                                  onClick={() => setStep(step + 1)}
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
                              onClick={() => {
                                    setStep(step + 1)
                                    firebase.patientCollection(email(), {
                                        // Personal
                                        firstName,
                                        familyName,
                                        selectedDate,
                                        postcode,
                                        gender,
                                        otherGender,
                                        contactNumber,
                                        organisation,
                                        //
                                        medicare,
                                        individualNumber,
                                        expiredDate,
                                        privateInsurance,
                                        privateInsuranceOther,
                                        includeDental,
                                        // Lifestyle
                                        smoker,
                                        softDrinks,
                                        alcohol,
                                        // Dental
                                        brush,
                                        floss,
                                        visitDentist,
                                        comfortable,
                                        breath,
                                        bleedingGum,
                                        cosmetic,
                                        teethPain,
                                        gumPain,
                                        grinding,
                                        damagedTeeth,
                                        sore,
                                        oldFillings,
                                        dentures,
                                        loose,
                                        painTopRight,
                                        painTopCenter,
                                        painTopLeft,
                                        painBottomRight,
                                        painBottomCenter,
                                        painBottomLeft,
                                        // Medical
                                        bloodDiseases,
                                        pregnant,
                                        allergies,
                                        allergiesList,
                                        heartConditions,
                                        breathingProblems,
                                        bloodDisorders,
                                        boneDisease,
                                        cancer,
                                        diabetes,
                                        stroke,
                                        pacemaker,
                                        otherConditions,
                                        otherConditionsList,
                                        // Summary
                                        research,
                                        policy,

                                    })
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

Report.propTypes = {

}

export default Report
