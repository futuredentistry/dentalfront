// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const RadioGroupYesNo = ({ formLabel, formValue, onChange }) => {
    const buttons = ['yes', 'no']
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{formLabel}</FormLabel>
            <RadioGroup
              value={formValue}
              onChange={e => onChange(e.target.value)}
            >
                {
                    buttons.map(val => (
                        <FormControlLabel
                          key={val}
                          value={val.toLowerCase()}
                          control={<Radio color="primary" />}
                          label={capitalizeFirstLetter(val)}
                        />
                    ))
                }
            </RadioGroup>
        </FormControl>
    )
}

RadioGroupYesNo.propTypes = {
    formLabel: PropTypes.string.isRequired,
    formValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default RadioGroupYesNo
