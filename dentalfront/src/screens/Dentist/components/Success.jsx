import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import SelectPatientButton from 'ui/SelectPatientButton'

const Success = ({ waitingReport, patientFirstName, nextStep }) => (
    <>
        <Typography variant="h4">
            Thank you!
        </Typography>

        <Typography variant="body2">
            Your report has been successfully submitted. Do you have time for another report?
        </Typography>

        <SelectPatientButton
          waitingReport={waitingReport}
          patientName={capitalizeFirstLetter(patientFirstName)}
          message="We have new reports waiting to be completed. Let\'s get started!"
          onClick={() => nextStep()}
        />
    </>
)

Success.propTypes = {
    waitingReport: PropTypes.bool.isRequired,
    patientFirstName: PropTypes.string,
    nextStep: PropTypes.func.isRequired,
}

Success.defaultProps = {
    patientFirstName: null,
}

export default Success
