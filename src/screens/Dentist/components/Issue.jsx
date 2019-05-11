import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'

import { segment } from 'modules/Dentist/props'

const Issue = ({ onClose, segmentProps, setSegment }) => {
    const [validateForm, setValidateForm] = useState(false)

    const validator = () => segmentProps.concern !== '' && segmentProps.treatment !== ''

    const [starterProps, setStarterProps] = useState(null)
    useEffect(() => !starterProps && setStarterProps(segmentProps), [])

    return (
        <>
            <Typography variant="h4">
                Which concern is this?
            </Typography>

            <TextField
                error={validateForm && segmentProps.concern === ''}
                label="Concern"
                value={segmentProps.concern}
                onChange={e => setSegment({ ...segmentProps, ...{ concern: e.currentTarget.value } })}
                margin="normal"
                variant="filled"
            />
            {
                validateForm
                && segmentProps.concern === ''
                && <FormHelperText error>Please fill out this field</FormHelperText>}

            <TextField
                error={validateForm && segmentProps.treatment === ''}
                label="Recommended treatment"
                value={segmentProps.treatment}
                onChange={e => setSegment({ ...segmentProps, ...{ treatment: e.currentTarget.value } })}
                margin="normal"
                variant="filled"
            />
            {
                validateForm
                && segmentProps.treatment === ''
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
        </>
    )
}

Issue.propTypes = {
    onClose: PropTypes.func.isRequired,
    segmentProps: segment.isRequired,
    setSegment: PropTypes.func.isRequired,
}

export default Issue
