import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import SearchBar from 'material-ui-search-bar'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
// import SelectPatientButton from 'ui/SelectPatientButton'
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
    // console.log(patients)
    // ToDo get utile for user name
    const [affiliateName] = useState('affiliateName')
    const [filteredPatients, setFilteredPatients] = useState([])

    useEffect(() => {
        if (patients !== [] && search !== '') {
            const matchedPatients = []
            const searchArray = search.split(' ')
            patients.map((patient) => {
                if (searchArray.some(str => `${patient.firstName} ${patient.familyName}`.includes(str))) {
                    matchedPatients.push(patient)
                }
            })
            setFilteredPatients(matchedPatients)
        } else setFilteredPatients(patients)
    }, [patients, search])
    console.log('filteredPatients', filteredPatients)
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

            <SearchBar
              disabled={organisation === ''}
              onRequestSearch={(e) => {
                    setSearch(e)
                    // @ts-ignore
                    document.activeElement.blur()
                    console.log(e)
                }}
              style={{
                    margin: '0 auto',
                    maxWidth: '90%',
                }}
            />
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
