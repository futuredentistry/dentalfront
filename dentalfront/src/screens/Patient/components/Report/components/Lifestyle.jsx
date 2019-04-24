// @ts-nocheck
import React from 'react'
import Typography from '@material-ui/core/Typography'

import LineRadioGroup from 'ui/LineRadioGroup'
import RadioGroupYesNo from 'ui/RadioGroupYesNo'
import { propsLifestyle, methodsLifestyle } from 'modules/Patient/props'

const Lifestyle = ({
  smoker, setSmoker,
  softDrinks, setSoftDrinks,
  alcohol, setAlcohol,
}) => (
    <>
      <Typography variant="h4">
        Your lifestyle
      </Typography>

      <RadioGroupYesNo
        formLabel="Are you a social or regular smoker?"
        formValue={smoker}
        onChange={setSmoker}
      />

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
  ...propsLifestyle,
  ...methodsLifestyle,
}

export default Lifestyle
