import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const SelectPatient = ({ waitingReport, patientFirstName }) => {
    const [dentistName] = useState('dentistName')
    return (
        <>
            <Typography variant="h4">
                Welcome back
                        {' '}
                {dentistName}
            </Typography>

            {waitingReport && (
                <>
                    <Typography variant="body2">
                        We have new reports waiting to be completed. Let's get started!
                    </Typography>

                    <Typography variant="h4">
                        {capitalizeFirstLetter(patientFirstName)}
                    </Typography>

                </>
            )}

            {!waitingReport && 'No reports'}

        </>
    )
}

SelectPatient.propTypes = {
    waitingReport: PropTypes.bool.isRequired,
    patientFirstName: PropTypes.string,
}

SelectPatient.defaultProps = {
    firstName: null,
}

export default SelectPatient
