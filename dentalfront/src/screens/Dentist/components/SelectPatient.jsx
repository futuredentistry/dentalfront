import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const SelectPatient = ({ waitingReport, patientFirstName, nextStep }) => {
    const [dentistName] = useState('dentistName')
    return (
        <>
            <Typography variant="h4">
                Welcome back
                        {' '}
                {capitalizeFirstLetter(dentistName)}
            </Typography>

            {waitingReport && (
                <>
                    <Typography variant="body2">
                        We have new reports waiting to be completed. Let's get started!
                    </Typography>

                    <Typography variant="h4">
                        {capitalizeFirstLetter(patientFirstName)}
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => nextStep()

                        }
                    >
                        Start Report
                    </Button>
                </>
            )}

            {!waitingReport && 'No reports'}

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
