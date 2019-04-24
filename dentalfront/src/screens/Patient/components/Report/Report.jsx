import React, { useState, useContext, useCallback } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'

import * as STATUS from 'modules/constants/reportStatus'
import FirebaseContext from 'modules/Firebase'
import LinearProgress from '@material-ui/core/LinearProgress'
import StepperButtons from 'ui/StepperButtons'
import Success from './components/Success'
import Medical from './components/Medical'
import Personal from './components/Personal'
import Lifestyle from './components/Lifestyle'
import Dental from './components/Dental'
import Summary from './components/Summary'

const logonUser = () => JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE))

const Report = () => {
    const [validFormStep, setValidFormStep] = useState(false)

    // ToDo move to utils
    const email = useCallback(() => (logonUser() ? logonUser().email : false), [])

    const firebase = useContext(FirebaseContext)

    const maxStep = 4
    const [step, setStep] = useState(0)

    // Personal
    const [firstName, setFirstName] = useState('')
    const [familyName, setFamilyName] = useState('')
    const [birthDate, handleDateBirthChange] = useState(null)
    const [postcode, setPostcode] = useState('')
    const [gender, setGender] = useState('male')
    const [contactNumber, setContactNumber] = useState('')
    const [organisation, setOrganisation] = useState('')
    //
    const [medicare, setMedicare] = useState('')
    const [individualNumber, setIndividualNumber] = useState('')
    const [expiredDate, handleExpiredChange] = useState(null)
    const [privateInsurance, setPrivateInsurance] = useState('')
    const [privateInsuranceOther, setPrivateInsuranceOther] = useState('')
    const [includeDental, setIncludeDental] = useState(false)
    const propsPersonal = {
        firstName,
        familyName,
        birthDate,
        postcode,
        gender,
        contactNumber,
        organisation,
        medicare,
        individualNumber,
        expiredDate,
        privateInsurance,
        privateInsuranceOther,
        includeDental,
    }
    const methodsPersonal = {
        setFirstName,
        setFamilyName,
        handleDateBirthChange,
        setPostcode,
        setGender,
        setContactNumber,
        setOrganisation,
        setMedicare,
        setIndividualNumber,
        handleExpiredChange,
        setPrivateInsurance,
        setPrivateInsuranceOther,
        setIncludeDental,
    }

    // Lifestyle
    const [smoker, setSmoker] = useState('yes')
    const [softDrinks, setSoftDrinks] = useState('every few days')
    const [alcohol, setAlcohol] = useState('every few days')
    const propsLifestyle = {
        smoker,
        softDrinks,
        alcohol,
    }
    const methodsLifestyle = {
        setSmoker,
        setSoftDrinks,
        setAlcohol,
    }

    // Dental
    const [brush, setBrush] = useState('every few days')
    const [floss, setFloss] = useState('every few days')
    const [visitDentist, setVisitDentist] = useState('every 1-3 years')
    const [comfortable, setComfortable] = useState('yes')
    const [breath, setBreath] = useState(false)
    const [bleedingGum, setBleedingGum] = useState(false)
    const [cosmetic, setCosmetic] = useState(false)
    const [teethPain, setTeethPain] = useState(false)
    const [gumPain, setGumPain] = useState(false)
    const [grinding, setGrinding] = useState(false)
    const [damagedTeeth, setDamagedTeeth] = useState(false)
    const [sore, setSore] = useState(false)
    const [oldFillings, setOldFillings] = useState(false)
    const [dentures, setDentures] = useState(false)
    const [loose, setLoose] = useState(false)
    const propsDental = {
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
    }
    const methodsDental = {
        setBrush,
        setFloss,
        setVisitDentist,
        setComfortable,
        setBreath,
        setBleedingGum,
        setCosmetic,
        setTeethPain,
        setGumPain,
        setGrinding,
        setDamagedTeeth,
        setSore,
        setOldFillings,
        setDentures,
        setLoose,
    }

    // Pain map
    const [painTopRight, setPainTopRight] = useState(false)
    const [painTopCenter, setPainTopCenter] = useState(false)
    const [painTopLeft, setPainTopLeft] = useState(false)
    const [painBottomRight, setPainBottomRight] = useState(false)
    const [painBottomCenter, setPainBottomCenter] = useState(false)
    const [painBottomLeft, setPainBottomLeft] = useState(false)
    const propsPainMap = {
        painTopRight,
        painTopCenter,
        painTopLeft,
        painBottomRight,
        painBottomCenter,
        painBottomLeft,
    }
    const methodsPainMap = {
        setPainTopRight,
        setPainTopCenter,
        setPainTopLeft,
        setPainBottomRight,
        setPainBottomCenter,
        setPainBottomLeft,
    }

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
    const propsMedical = {
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
    }
    const methodsMedical = {
        setBloodDiseases,
        setPregnant,
        setAllergies,
        setAllergiesList,
        setHeartConditions,
        setBreathingProblems,
        setBloodDisorders,
        setBoneDisease,
        setCancer,
        setDiabetes,
        setStroke,
        setPacemaker,
        setOtherConditions,
        setOtherConditionsList,
    }

    // Summary
    const [research, setResearch] = useState(false)
    const [policy, setPolicy] = useState(false)
    const propsSummary = {
        research,
        policy,
    }
    const methodsSummary = {
        setResearch,
        setPolicy,
    }

    const formValidator = (n) => {
        let valid = true
        switch (n) {
            case 0:
                if (firstName === '') valid = false
                if (familyName === '') valid = false
                if (birthDate === null) valid = false
                if (postcode === '') valid = false
                if (contactNumber === '') valid = false
                if (organisation === '') valid = false
                if (medicare === '') valid = false
                if (individualNumber === '') valid = false
                if (expiredDate === null) valid = false
                return valid
            case 3:
                if (allergies === 'yes' && allergiesList === '') valid = false
                if (otherConditions && otherConditionsList === '') valid = false
                return valid
            default:
                return valid
        }
    }

    const stepper = (n) => {
        switch (n) {
            case 0:
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Personal {...{ validFormStep, ...propsPersonal, ...methodsPersonal }} />
                    </MuiPickersUtilsProvider>
                )
            case 1:
                return (
                    <Lifestyle {...{ ...propsLifestyle, ...methodsLifestyle }} />
                )
            case 2:
                return (
                    <Dental {...{
                        ...propsDental,
                        ...methodsDental,
                        ...propsPainMap,
                        ...methodsPainMap,
                    }}
                    />
                )
            case 3:
                return (
                    <Medical {...{ validFormStep, ...propsMedical, ...methodsMedical }} />
                )
            case 4:
                return (
                    <Summary {...{
                        email: `${email()}`,
                        ...propsPersonal,
                        ...propsLifestyle,
                        ...propsDental,
                        ...propsMedical,
                        ...propsSummary,
                        ...methodsSummary,
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
                step <= maxStep && <LinearProgress color="primary" variant="determinate" value={step * 100 / maxStep} />
            }

            {stepper(step)}

            <StepperButtons {...{
                maxStep,
                step,
                setStep,
                disabledBackButton: step < 1,
                showSubmitButton: step === maxStep,
                showNextButton: step !== maxStep,
                disabledNextButton: !formValidator(step) && validFormStep,
                showButtonsGrid: step <= maxStep,
                increaseOnClick: () => {
                    setValidFormStep(true)
                    if (formValidator(step)) {
                        setStep(step + 1)
                        setValidFormStep(false)
                    }
                },
                decreaseOnClick: () => setStep(step - 1),
                onSubmit: () => {
                    setStep(step + 1)
                    firebase.setPatientReport({
                        email: email(),
                        ...propsPersonal,
                        ...propsLifestyle,
                        ...propsDental,
                        ...propsMedical,
                        ...propsSummary,
                        // Initial report status
                        status: STATUS.IN_PROGRESS,
                    })
                },
                disabledSubmit: !policy,
            }}
            />
        </>
    )
}

export default Report
