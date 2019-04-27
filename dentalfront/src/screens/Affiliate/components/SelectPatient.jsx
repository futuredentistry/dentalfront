import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import SelectPatientButton from 'ui/SelectPatientButton'
import SelectOrganisation from 'ui/SelectOrganisation'

const SelectPatient = ({
    nextStep,
    patients,
    setPatient,
    search,
    setSearch,
    waitingReport,
    organisation,
    setOrganisation,
}) => {
    console.log(patients)
    // ToDo get utile for user name
    const [affiliateName] = useState('affiliateName')

    return (
        <>
            <Typography variant="h4">
                Welcome
                {' '}
                {capitalizeFirstLetter(affiliateName)}
            </Typography>

            <Typography variant="body2">
                Where are you screening patients from today?
            </Typography>

            <SelectOrganisation {...{ organisation, setOrganisation, validFormStep: false }} />

        </>
    )
}

SelectPatient.propTypes = {
    waitingReport: PropTypes.bool.isRequired,
    nextStep: PropTypes.func.isRequired,
}

SelectPatient.defaultProps = {
    patientFirstName: null,
}

export default SelectPatient
