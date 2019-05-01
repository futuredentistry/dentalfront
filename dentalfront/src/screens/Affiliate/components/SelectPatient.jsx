import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import SearchBar from 'material-ui-search-bar'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import SelectOrganisation from 'ui/SelectOrganisation'
import SelectPatientButton from 'ui/SelectPatientButton'
import Button from '@material-ui/core/Button'
import { UserFirstName } from 'utils/logonUser'

const SelectPatient = ({
    setStep,
    patients,
    setPatient,
    setReportId,
    search,
    setSearch,
    organisation,
    setOrganisation,
}) => {
    const [filteredPatients, setFilteredPatients] = useState([])
    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        setSearch('')
        setShowAll(false)
    }, [organisation])

    useEffect(() => {
        if (patients !== [] && search !== '') {
            const matchedPatients = []
            const searchArray = search.split(' ')
            patients.map((patient) => {
                if (searchArray.some(str => `${patient.firstName} ${patient.familyName}`.includes(str))) {
                    matchedPatients.push(patient)
                }
                return null
            })
            setFilteredPatients(matchedPatients)
        } else setFilteredPatients(patients)
    }, [patients, search])

    const { setDark, setShow } = useContext(HeaderFooterContext)
    useEffect(() => {
        setDark(true)
        setShow(true)
    }, [])

    return (
        <>
            <Typography variant="h4">
                Welcome
                {' '}
                {capitalizeFirstLetter(UserFirstName())}
            </Typography>

            <Typography variant="body2">
                Where are you screening patients from today?
            </Typography>

            <SelectOrganisation {...{ organisation, setOrganisation, validFormStep: false }} />

            <SearchBar
              value={search}
              disabled={organisation === ''}
              onRequestSearch={(e) => {
                    setSearch(e)
                    // @ts-ignore
                    document.activeElement.blur()
                }}
              style={{
                    margin: '0 auto',
                    maxWidth: '100%',
                }}
            />

            {filteredPatients.length === 0 && <Typography variant="body2">No reports available</Typography>}

            {filteredPatients.length > 0 && filteredPatients.map((patient, i) => {
                // eslint-disable-next-line max-len
                const fullName = `${capitalizeFirstLetter(patient.firstName)} ${capitalizeFirstLetter(patient.familyName)}`
                const selectPatientCard = (
                    <div key={patient.id}>
                        <SelectPatientButton
                          patientName={fullName}
                          message=""
                          onClick={() => {
                                setStep(1)
                                setPatient(patient)
                                setReportId(patient.id)
                            }
                            }
                        />
                    </div>
                )

                if (showAll) return selectPatientCard
                if (!showAll && i < 2) return selectPatientCard

                return null
            })
            }

            {filteredPatients.length > 2 && !showAll && (
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => setShowAll(true)}
                >
                    Show all
                    {' '}
                    {filteredPatients.length}
                    {' '}
                    results
                </Button>
            )}
        </>
    )
}

SelectPatient.propTypes = {
    setStep: PropTypes.func.isRequired,
    patients: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        familyName: PropTypes.string.isRequired,
    })),
    setPatient: PropTypes.func.isRequired,
    setReportId: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    organisation: PropTypes.string.isRequired,
    setOrganisation: PropTypes.func.isRequired,
}

SelectPatient.defaultProps = {
    patients: [],
}

export default SelectPatient
