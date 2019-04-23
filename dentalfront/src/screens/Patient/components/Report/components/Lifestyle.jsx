// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'

import LineRadioGroup from 'ui/LineRadioGroup/LineRadioGroup'

const Lifestyle = ({
  smoker, setSmoker,
  softDrinks, setSoftDrinks,
  alcohol, setAlcohol,
}) => (
    <>
      <Typography variant="h4">
        Your lifestyle
      </Typography>

      <FormControl component="fieldset">
        <FormLabel component="legend">Are you a social or regular smoker?</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="smoker"
          value={smoker}
          onChange={e => setSmoker(e.currentTarget.value)}
        >
          <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
          <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
        </RadioGroup>
      </FormControl>

      <LineRadioGroup
        formLabel="How often do you drink soft drinks?"
        formValue={softDrinks}
        onChange={setSoftDrinks}
        leftValue="less than once a week"
        centerValue="every few days"
        fightValue="daily"
      />

      <LineRadioGroup
        formLabel="How often do you drink alcohol?"
        formValue={alcohol}
        onChange={setAlcohol}
        leftValue="less than once a week"
        centerValue="every few days"
        fightValue="daily"
      />
    </>
  )

Lifestyle.propTypes = {
  alcohol: PropTypes.string.isRequired,
  setAlcohol: PropTypes.func.isRequired,
  smoker: PropTypes.string.isRequired,
  setSmoker: PropTypes.func.isRequired,
  softDrinks: PropTypes.string.isRequired,
  setSoftDrinks: PropTypes.func.isRequired,
}

export default Lifestyle
