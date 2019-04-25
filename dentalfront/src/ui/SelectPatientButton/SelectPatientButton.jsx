import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const SelectPatientButton = ({
    waitingReport, patientName, message, onClick,
}) => (
        <>
            {waitingReport && (
                <>
                    <Typography variant="body2">
                        {message}
                    </Typography>

                    <Typography variant="h4">
                        {patientName}
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      onClick={onClick}
                    >
                        Start Report
                    </Button>
                </>
            )}

            {!waitingReport && 'No reports for today'}
        </>
    )

SelectPatientButton.propTypes = {
    waitingReport: PropTypes.bool.isRequired,
    patientName: PropTypes.string,
    message: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

SelectPatientButton.defaultProps = {
    patientName: null,
    message: null,
}

export default SelectPatientButton
