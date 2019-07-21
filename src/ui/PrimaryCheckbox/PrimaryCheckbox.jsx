
import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const useStyles = makeStyles(() => ({
  justifyLabel: {
    textAlign: 'justify',
  },
}))


const PrimaryCheckbox = ({ formLabel, formValue, onChange }) => {
  const classes = useStyles()
  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={formValue}
          onChange={() => onChange(!formValue)}
          color="primary"
        />
      )}
      label={
        <Typography variant="body2" className={classes.justifyLabel}>
          {capitalizeFirstLetter(formLabel)}
        </Typography>
      }
    />
  )
}

PrimaryCheckbox.propTypes = {
  formLabel: PropTypes.string.isRequired,
  formValue: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default PrimaryCheckbox
