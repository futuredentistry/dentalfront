import React, { useContext, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import SelectPatientButton from 'ui/SelectPatientButton'
import { UserFirstName } from 'utils/logonUser'

const Success = ({ waitingReport, patientFirstName, nextStep }) => {
    const { setDark, setShow } = useContext(HeaderFooterContext)
    useEffect(() => {
        setDark(true)
        setShow(true)
    }, [])
    return (
        <>
            <Typography variant="h4">
                Thank you
            {' '}
                {capitalizeFirstLetter(UserFirstName())}
                !
            </Typography>

            <Typography variant="body2">
                Your report has been successfully submitted.
            {' '}
                {waitingReport && 'Do you have time for another report?'}
            </Typography>

            {waitingReport && (
                <SelectPatientButton
                  patientName={capitalizeFirstLetter(patientFirstName)}
                  message="We have new reports waiting to be completed. Let\'s get started!"
                  onClick={() => nextStep()}
                />
            )}
        </>
    )
}

Success.propTypes = {
    waitingReport: PropTypes.bool.isRequired,
    patientFirstName: PropTypes.string,
    nextStep: PropTypes.func.isRequired,
}

Success.defaultProps = {
    patientFirstName: null,
}

export default Success
