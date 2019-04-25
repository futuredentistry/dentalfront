import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import SelectPatientButton from 'ui/SelectPatientButton'

const SelectPatient = ({ waitingReport, patientFirstName, nextStep }) => {
    // ToDo get utile for user name
    const [dentistName] = useState('dentistName')
    return (
        <>
            <Typography variant="h4">
                Welcome back
                        {' '}
                {capitalizeFirstLetter(dentistName)}
            </Typography>

            <SelectPatientButton
              waitingReport={waitingReport}
              patientName={capitalizeFirstLetter(patientFirstName)}
              message="We have new reports waiting to be completed. Let\'s get started!"
              onClick={() => nextStep()}
            />
        </>
    )
}

SelectPatient.propTypes = {
    waitingReport: PropTypes.bool.isRequired,
    patientFirstName: PropTypes.string,
    nextStep: PropTypes.func.isRequired,
}

SelectPatient.defaultProps = {
    patientFirstName: null,
}

export default SelectPatient
