import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NoSsr from '@material-ui/core/NoSsr'

import { propsTreatment } from 'modules/Dentist/props'

const Issue = ({ onClose, segmentProps, setSegment, treatmentSelect, concernSelect }) => {

    const [validateForm, setValidateForm] = useState(false)

    const validator = () => segmentProps.concern.length > 0 && segmentProps.treatment.length > 0

    const [starterProps, setStarterProps] = useState(null)

    useEffect(() => !starterProps && setStarterProps(segmentProps), [])

    return (
        <NoSsr>
            <Typography variant="h4">
                Which concern is this?
            </Typography>

            <FormControl>
                <InputLabel>Concern</InputLabel>
                <Select
                    variant="filled"
                    multiple
                    displayEmpty
                    value={segmentProps.concern}
                    onChange={e => setSegment({ ...segmentProps, ...{ concern: e.target.value } })}
                    autoWidth
                >
                    {
                        concernSelect.map(({ value, label }) =>
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            {validateForm
                && segmentProps.concern.length === 0
                && <FormHelperText error>Please fill out this field</FormHelperText>}

            <FormControl>
                <InputLabel>Recommended treatment</InputLabel>
                <Select
                    variant="filled"
                    multiple
                    displayEmpty
                    value={segmentProps.treatment}
                    onChange={e => setSegment({ ...segmentProps, ...{ treatment: e.target.value } })}
                    // onChange={e => setSearch({ ...search, ...{ treatment: e.target.value } })}
                    autoWidth
                >
                    {
                        treatmentSelect.map(({ value, label }) =>
                            <MenuItem key={value} value={value}>{label}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            {validateForm
                && segmentProps.treatment.length === 0
                && <FormHelperText error>Please fill out this field</FormHelperText>}

            <TextField
                label="Tooth number"
                value={segmentProps.toothNumber}
                inputProps={
                    { maxLength: 2 }
                }
                onChange={
                    e => /^(\s*|\d+)$/.test(e.currentTarget.value)
                        && setSegment({ ...segmentProps, ...{ toothNumber: e.currentTarget.value } })
                }
                margin="normal"
                variant="filled"
            />

            <Button
                variant="contained"
                color="primary"
                disabled={!validator() && validateForm}
                onClick={() => {
                    setValidateForm(true)
                    if (validator()) onClose()
                }
                }
            >
                Save
            </Button>

            <Button
                variant="text"
                color="primary"
                onClick={() => {
                    onClose()
                    setSegment(starterProps)
                }}
            >
                close without saving
            </Button>
        </NoSsr>
    )
}

Issue.propTypes = {
    onClose: PropTypes.func.isRequired,
    segmentProps: propsTreatment.isRequired,
    setSegment: PropTypes.func.isRequired,
    treatmentSelect: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
    concernSelect: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, label: PropTypes.string })),
}

Issue.defaultProps = {
    treatmentSelect: [],
    concernSelect: [],
}

export default Issue
