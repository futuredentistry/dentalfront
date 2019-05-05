/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types'

export const propsDental = {
    brush: PropTypes.string.isRequired,
    floss: PropTypes.string.isRequired,
    visitDentist: PropTypes.string.isRequired,
    comfortable: PropTypes.string.isRequired,

    breath: PropTypes.bool.isRequired,
    bleedingGum: PropTypes.bool.isRequired,
    cosmetic: PropTypes.bool.isRequired,
    teethPain: PropTypes.bool.isRequired,
    gumPain: PropTypes.bool.isRequired,
    grinding: PropTypes.bool.isRequired,
    damagedTeeth: PropTypes.bool.isRequired,
    sore: PropTypes.bool.isRequired,
    oldFillings: PropTypes.bool.isRequired,
    dentures: PropTypes.bool.isRequired,
    loose: PropTypes.bool.isRequired,
}
export const methodsDental = {
    setBrush: PropTypes.func.isRequired,
    setFloss: PropTypes.func.isRequired,
    setVisitDentist: PropTypes.func.isRequired,
    setComfortable: PropTypes.func.isRequired,

    setBreath: PropTypes.func.isRequired,
    setBleedingGum: PropTypes.func.isRequired,
    setCosmetic: PropTypes.func.isRequired,
    setTeethPain: PropTypes.func.isRequired,
    setGumPain: PropTypes.func.isRequired,
    setGrinding: PropTypes.func.isRequired,
    setDamagedTeeth: PropTypes.func.isRequired,
    setSore: PropTypes.func.isRequired,
    setOldFillings: PropTypes.func.isRequired,
    setDentures: PropTypes.func.isRequired,
    setLoose: PropTypes.func.isRequired,
}

export const propsPainMap = {
    painTopRight: PropTypes.bool.isRequired,
    painTopCenter: PropTypes.bool.isRequired,
    painTopLeft: PropTypes.bool.isRequired,
    painBottomRight: PropTypes.bool.isRequired,
    painBottomCenter: PropTypes.bool.isRequired,
    painBottomLeft: PropTypes.bool.isRequired,
}
export const methodsPainMap = {
    setPainTopRight: PropTypes.func.isRequired,
    setPainTopCenter: PropTypes.func.isRequired,
    setPainTopLeft: PropTypes.func.isRequired,
    setPainBottomRight: PropTypes.func.isRequired,
    setPainBottomCenter: PropTypes.func.isRequired,
    setPainBottomLeft: PropTypes.func.isRequired,
}

export const propsPersonal = {
    firstName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired,
    birthDate: PropTypes.instanceOf(Date),
    postcode: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    organisation: PropTypes.string.isRequired,
    medicare: PropTypes.string.isRequired,
    individualNumber: PropTypes.string.isRequired,
    expiredDate: PropTypes.instanceOf(Date),
    privateInsurance: PropTypes.string.isRequired,
    privateInsuranceOther: PropTypes.string.isRequired,
    includeDental: PropTypes.bool.isRequired,
}
export const methodsPersonal = {
    setFirstName: PropTypes.func.isRequired,
    setFamilyName: PropTypes.func.isRequired,
    handleDateBirthChange: PropTypes.func.isRequired,
    setPostcode: PropTypes.func.isRequired,
    setGender: PropTypes.func.isRequired,
    setContactNumber: PropTypes.func.isRequired,
    setOrganisation: PropTypes.func.isRequired,
    setMedicare: PropTypes.func.isRequired,
    setIndividualNumber: PropTypes.func.isRequired,
    handleExpiredChange: PropTypes.func.isRequired,
    setPrivateInsurance: PropTypes.func.isRequired,
    setPrivateInsuranceOther: PropTypes.func.isRequired,
    setIncludeDental: PropTypes.func.isRequired,
}

export const propsLifestyle = {
    alcohol: PropTypes.string.isRequired,
    smoker: PropTypes.string.isRequired,
    softDrinks: PropTypes.string.isRequired,
}
export const methodsLifestyle = {
    setAlcohol: PropTypes.func.isRequired,
    setSmoker: PropTypes.func.isRequired,
    setSoftDrinks: PropTypes.func.isRequired,
}

export const propsMedical = {
    bloodDiseases: PropTypes.string.isRequired,
    pregnant: PropTypes.string.isRequired,
    allergies: PropTypes.string.isRequired,
    allergiesList: PropTypes.string.isRequired,
    heartConditions: PropTypes.bool.isRequired,
    breathingProblems: PropTypes.bool.isRequired,
    bloodDisorders: PropTypes.bool.isRequired,
    boneDisease: PropTypes.bool.isRequired,
    cancer: PropTypes.bool.isRequired,
    diabetes: PropTypes.bool.isRequired,
    stroke: PropTypes.bool.isRequired,
    pacemaker: PropTypes.bool.isRequired,
    otherConditions: PropTypes.bool.isRequired,
    otherConditionsList: PropTypes.string.isRequired,
}
export const methodsMedical = {
    setBloodDiseases: PropTypes.func.isRequired,
    setPregnant: PropTypes.func.isRequired,
    setAllergies: PropTypes.func.isRequired,
    setAllergiesList: PropTypes.func.isRequired,
    setHeartConditions: PropTypes.func.isRequired,
    setBreathingProblems: PropTypes.func.isRequired,
    setBloodDisorders: PropTypes.func.isRequired,
    setBoneDisease: PropTypes.func.isRequired,
    setCancer: PropTypes.func.isRequired,
    setDiabetes: PropTypes.func.isRequired,
    setStroke: PropTypes.func.isRequired,
    setPacemaker: PropTypes.func.isRequired,
    setOtherConditions: PropTypes.func.isRequired,
    setOtherConditionsList: PropTypes.func.isRequired,
}
