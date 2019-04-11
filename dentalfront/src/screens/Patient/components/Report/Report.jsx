import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Personal from './components/Personal'
import Lifestyle from './components/Lifestyle'

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

    // Lifestyle
    const [smoker, setSmoker] = useState('yes')
    const [softDrinks, setSoftDrinks] = useState('every few days')
    const [alcohol, setAlcohol] = useState('every few days')

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
                return '2'
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
