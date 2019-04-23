// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const LineRadioGroup = ({
    formLabel, formValue, onChange, leftValue, centerValue, fightValue,
}) => {
    const labelStyle = { flexBasis: '33%', flexGrow: 0 }
    const buttons = [leftValue, centerValue, fightValue]
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">{formLabel}</FormLabel>
            <RadioGroup
              row
              style={{ flexWrap: 'inherit' }}
              aria-label="Soft drinks"
              value={formValue}
              onChange={e => onChange(e.target.value)}
            >
                {
                    buttons.map(val => (
                        <FormControlLabel
                          key={val}
                          style={labelStyle}
                          labelPlacement="top"
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

LineRadioGroup.propTypes = {
    formLabel: PropTypes.string.isRequired,
    formValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    leftValue: PropTypes.string.isRequired,
    centerValue: PropTypes.string.isRequired,
    fightValue: PropTypes.string.isRequired,
}

export default LineRadioGroup
