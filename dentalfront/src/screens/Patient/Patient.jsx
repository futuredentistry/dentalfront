import React, { useState, useContext } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import LinearProgress from '@material-ui/core/LinearProgress'

import * as STATUS from 'modules/constants/reportStatus'
import FirebaseContext from 'modules/Firebase'
import StepperButtons from 'ui/StepperButtons'
import { UserEmail, UserUid } from 'utils/logonUser'
import FormGrid from 'ui/FormGrid'
import Success from './components/Success'
import Start from './components/Start'
import Medical from './components/Medical'
import Personal from './components/Personal'
import Lifestyle from './components/Lifestyle'
import Dental from './components/Dental'
import Summary from './components/Summary'

const Patient = () => {
    const [validFormStep, setValidFormStep] = useState(false)

    const firebase = useContext(FirebaseContext)

    const maxStep = 5
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
            case 1:
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
            case 4:
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
                return <Start startNewReport={() => setStep(1)} />
            case 1:
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Personal {...{ validFormStep, ...propsPersonal, ...methodsPersonal }} />
                    </MuiPickersUtilsProvider>
                )
            case 2:
                return (
                    <Lifestyle {...{ ...propsLifestyle, ...methodsLifestyle }} />
                )
            case 3:
                return (
                    <Dental {...{
                        ...propsDental,
                        ...methodsDental,
                        ...propsPainMap,
                        ...methodsPainMap,
                    }}
                    />
                )
            case 4:
                return (
                    <Medical {...{ validFormStep, ...propsMedical, ...methodsMedical }} />
                )
            case 5:
                return (
                    <Summary {...{
                        email: UserEmail(),
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
                        disabledBackButton: step < 1,
                        showSubmitButton: step === maxStep,
                        showNextButton: step !== maxStep,
                        disabledNextButton: !formValidator(step) && validFormStep,
                        showButtonsGrid: step !== (1 + maxStep) && step !== 0,
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
                                email: UserEmail(),
                                ...propsPersonal,
                                ...propsLifestyle,
                                ...propsDental,
                                ...propsMedical,
                                ...propsSummary,
                                // Initial report status
                                status: STATUS.IN_PROGRESS,
                            })
                            // Add fields to real time db
                            firebase
                                .user(UserUid())
                                .update({
                                    firstName,
                                    familyName,
                                })
                        },
                        disabledSubmit: !policy,
                    }}
                    />
                </>
            </FormGrid>
        </>
    )
}

export default Patient
