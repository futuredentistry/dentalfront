// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const PrimaryCheckbox = ({ formLabel, formValue, onChange }) => (
  <FormControlLabel
    control={(
      <Checkbox
        checked={formValue}
        onChange={() => onChange(!formValue)}
        color="primary"
      />
    )}
    label={capitalizeFirstLetter(formLabel)}
  />
)

PrimaryCheckbox.propTypes = {
  formLabel: PropTypes.string.isRequired,
  formValue: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default PrimaryCheckbox
