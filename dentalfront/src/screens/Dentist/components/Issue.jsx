import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'

const Issue = ({ onClose, setImgProps }) => {
    const [validateForm, setValidateForm] = useState(false)
    const [concern, setConcern] = useState('')
    const [treatment, setTreatment] = useState('')
    const [toothNumber, setToothNumber] = useState('')

    const validator = () => concern !== '' && treatment !== '' && toothNumber !== ''

    return (
        <>
            <Typography variant="h4">
                Which concern is this?
            </Typography>

            <TextField
              error={validateForm && concern === ''}
              label="Concern"
              value={concern}
              onChange={e => setConcern(e.currentTarget.value)}
              margin="normal"
              variant="filled"
            />
            {validateForm && concern === '' && <FormHelperText error>Please fill out this field</FormHelperText>}

            <TextField
              error={validateForm && treatment === ''}
              label="Recommended treatment"
              value={treatment}
              onChange={e => setTreatment(e.currentTarget.value)}
              margin="normal"
              variant="filled"
            />
            {validateForm && treatment === '' && <FormHelperText error>Please fill out this field</FormHelperText>}

            <TextField
              error={validateForm && toothNumber === ''}
              label="Tooth number"
              value={toothNumber}
              inputProps={
                    { maxLength: 2 }
                }
              onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setToothNumber(e.currentTarget.value)}
              margin="normal"
              variant="filled"
            />
            {validateForm && toothNumber === '' && <FormHelperText error>Please fill out this field</FormHelperText>}


            <Button
              variant="contained"
              color="primary"
              disabled={!validator() && validateForm}
              onClick={() => {
                    setValidateForm(true)
                    if (validator()) {
                        setImgProps({ concern, treatment, toothNumber })
                        onClose()
                    }
                }
                }
            >
                Save
            </Button>

        </>
    )
}

Issue.propTypes = {
    onClose: PropTypes.func.isRequired,
    setImgProps: PropTypes.func.isRequired,
}

export default Issue
