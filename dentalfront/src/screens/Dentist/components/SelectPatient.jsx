import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import SelectPatientButton from 'ui/SelectPatientButton'
import { UserFirstName } from 'utils/logonUser'

const SelectPatient = ({ waitingReport, patientFirstName, nextStep }) => (
    <>
        <Typography variant="h4">
            Welcome back
                        {' '}
            {capitalizeFirstLetter(UserFirstName())}
        </Typography>

        {!waitingReport && <Typography variant="body2">No reports for today</Typography>}

        {waitingReport && (
            <SelectPatientButton
              patientName={capitalizeFirstLetter(patientFirstName)}
              message="We have new reports waiting to be completed. Let's get started!"
              onClick={() => nextStep()}
            />
        )}
    </>
)

SelectPatient.propTypes = {
    waitingReport: PropTypes.bool.isRequired,
    patientFirstName: PropTypes.string,
    nextStep: PropTypes.func.isRequired,
}

SelectPatient.defaultProps = {
    patientFirstName: null,
}

export default SelectPatient
