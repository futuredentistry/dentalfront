import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Personal from './components/Personal'
import Lifestyle from './components/Lifestyle'
import Dental from './components/Dental'

const Report = (props) => {
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
    const [inscludeDental, setInscludeDental] = useState(false)

    // Lifestyle
    const [smoker, setSmoker] = useState('yes')
    const [softDrinks, setSoftDrinks] = useState('every few days')
    const [alcohol, setAlcohol] = useState('every few days')

    // Dental
    const [brush, setBrush] = useState('every few days')
    const [floss, setFloss] = useState('every few days')
    const [visitDentist, setVisitDentist] = useState('every 1-3 years')
    const [comfortable, setComfortable] = useState('yes')
    const [dentalCornersBreath, setDentalCornersBreath] = useState(false)
    const [dentalCornersBleedingGum, setDentalCornersBleedingGum] = useState(false)
    const [dentalCornersCosmetic, setDentalCornersCosmetic] = useState(false)
    const [dentalCornersTeethPain, setDentalCornersTeethPain] = useState(false)
    const [dentalCornersGumPain, setDentalCornersGumPain] = useState(false)
    const [dentalCornersGrinding, setDentalCornersGrinding] = useState(false)
    const [dentalCornersDamagedTeeth, setDentalCornersDamagedTeeth] = useState(false)
    const [dentalCornersSore, setDentalCornersSore] = useState(false)
    const [dentalCornersOldFillings, setDentalCornersOldFillings] = useState(false)
    const [dentalCornersDentures, setDentalCornersDentures] = useState(false)
    const [dentalCornersLoose, setDentalCornersLoose] = useState(false)
    const [painTopRight, setPainTopRight] = useState(false)
    const [painTopCenter, setPainTopCenter] = useState(false)
    const [painTopLeft, setPainTopLeft] = useState(false)
    const [painBottomRight, setPainBottomRight] = useState(false)
    const [painBottomCenter, setPainBottomCenter] = useState(false)
    const [painBottomLeft, setPainBottomLeft] = useState(false)

    const steper = (n) => {
        switch (n) {
            case 2:
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
                            inscludeDental,
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
            case 0:
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
                        dentalCornersBreath,
                        setDentalCornersBreath,
                        dentalCornersBleedingGum,
                        setDentalCornersBleedingGum,
                        dentalCornersCosmetic,
                        setDentalCornersCosmetic,
                        dentalCornersTeethPain,
                        setDentalCornersTeethPain,
                        dentalCornersGumPain,
                        setDentalCornersGumPain,
                        dentalCornersGrinding,
                        setDentalCornersGrinding,
                        dentalCornersDamagedTeeth,
                        setDentalCornersDamagedTeeth,
                        dentalCornersSore,
                        setDentalCornersSore,
                        dentalCornersOldFillings,
                        setDentalCornersOldFillings,
                        dentalCornersDentures,
                        setDentalCornersDentures,
                        dentalCornersLoose,
                        setDentalCornersLoose,
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
                return '3'
            case 4:
                return '4'
            default:
                return null
        }
    }

    return (
        <div>
            <LinearProgress color="primary" variant="determinate" value={step * 100 / 4} />
            Report

            {steper(step)}

            <Grid
                container
                spacing={8}
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
                                onClick={() => setStep(step + 1)}
                            >
                                Submit
                            </Button>
                        </Grid>
                    )
                }
            </Grid>

        </div>
    )
}

Report.propTypes = {

}

export default Report
