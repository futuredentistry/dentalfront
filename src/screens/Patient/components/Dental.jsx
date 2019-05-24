// @ts-nocheck
import React from 'react'

import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'

import LineRadioGroup from 'ui/LineRadioGroup'
import RadioGroupYesNo from 'ui/RadioGroupYesNo'
import PrimaryCheckbox from 'ui/PrimaryCheckbox'
import {
  propsDental, methodsDental, propsPainMap, methodsPainMap,
} from 'modules/Patient/props'

import PainMap from './PainMap'

const Dental = ({
  brush, setBrush,
  floss, setFloss,
  visitDentist, setVisitDentist,
  comfortable, setComfortable,
  breath, setBreath,
  bleedingGum, setBleedingGum,
  cosmetic, setCosmetic,
  teethPain, setTeethPain,
  gumPain, setGumPain,
  grinding, setGrinding,
  damagedTeeth, setDamagedTeeth,
  sore, setSore,
  oldFillings, setOldFillings,
  dentures, setDentures,
  loose, setLoose,
  // Pain map
  painTopRight, setPainTopRight,
  painTopCenter, setPainTopCenter,
  painTopLeft, setPainTopLeft,
  painBottomRight, setPainBottomRight,
  painBottomCenter, setPainBottomCenter,
  painBottomLeft, setPainBottomLeft,
}) => (
    <>
      <Typography variant="h4">
        Now some dental questions
      </Typography>

      <LineRadioGroup
        formLabel="How frequently do you brush?"
        formValue={brush}
        onChange={setBrush}
        leftValue="less than once a week"
        centerValue="every few days"
        fightValue="daily"
      />

      <LineRadioGroup
        formLabel="How frequently do you floss?"
        formValue={floss}
        onChange={setFloss}
        leftValue="less than once a week"
        centerValue="every few days"
        fightValue="daily"
      />

      <LineRadioGroup
        formLabel="How frequently do you visit the dentist?"
        formValue={visitDentist}
        onChange={setVisitDentist}
        leftValue="less than every 3 years"
        centerValue="every 1-3 years"
        fightValue="at least every year"
      />

      <RadioGroupYesNo
        formLabel="Are you comfortable with dental procedures?"
        formValue={comfortable}
        onChange={setComfortable}
      />

      <Typography variant="h5">
        What dental concerns do you have?
      </Typography>

      <FormGroup>
        <PrimaryCheckbox formLabel="Bad breath" formValue={breath} onChange={setBreath} />
        <PrimaryCheckbox formLabel="Bleeding gums" formValue={bleedingGum} onChange={setBleedingGum} />
        <PrimaryCheckbox formLabel="Cosmetic issues" formValue={cosmetic} onChange={setCosmetic} />
        <PrimaryCheckbox formLabel="Teeth pain" formValue={teethPain} onChange={setTeethPain} />
        <PrimaryCheckbox formLabel="Gum pain" formValue={gumPain} onChange={setGumPain} />
        <PrimaryCheckbox formLabel="Grinding" formValue={grinding} onChange={setGrinding} />
        <PrimaryCheckbox formLabel="Damaged teeth" formValue={damagedTeeth} onChange={setDamagedTeeth} />
        <PrimaryCheckbox formLabel="Ulcers, lumps or sores" formValue={sore} onChange={setSore} />
        <PrimaryCheckbox formLabel="Old fillings" formValue={oldFillings} onChange={setOldFillings} />
        <PrimaryCheckbox formLabel="Dentures" formValue={dentures} onChange={setDentures} />
        <PrimaryCheckbox formLabel="Loose tooth" formValue={loose} onChange={setLoose} />
      </FormGroup>

      <PainMap {...{
          painTopRight, setPainTopRight,
          painTopCenter, setPainTopCenter,
          painTopLeft, setPainTopLeft,
          painBottomRight, setPainBottomRight,
          painBottomCenter, setPainBottomCenter,
          painBottomLeft, setPainBottomLeft,
        }} 
      />

    </>
  )

Dental.propTypes = {
  ...propsDental,
  ...methodsDental,
  ...propsPainMap,
  ...methodsPainMap,
}

export default Dental
