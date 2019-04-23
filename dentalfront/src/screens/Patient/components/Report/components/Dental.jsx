// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

import LineRadioGroup from 'ui/LineRadioGroup'
import RadioGroupYesNo from 'ui/RadioGroupYesNo'
import PrimaryCheckbox from 'ui/PrimaryCheckbox'

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

      <Typography variant="h5">
        Where are you experiencing pain?
      </Typography>

      <FormGroup row>
        <Checkbox
          checked={painTopRight}
          onChange={() => setPainTopRight(!painTopRight)}
          color="primary"
        />

        <Checkbox
          checked={painTopCenter}
          onChange={() => setPainTopCenter(!painTopCenter)}
          color="primary"
        />

        <Checkbox
          checked={painTopLeft}
          onChange={() => setPainTopLeft(!painTopLeft)}
          color="primary"
        />
      </FormGroup>

      <FormGroup row>
        <Checkbox
          checked={painBottomRight}
          onChange={() => setPainBottomRight(!painBottomRight)}
          color="primary"
        />

        <Checkbox
          checked={painBottomCenter}
          onChange={() => setPainBottomCenter(!painBottomCenter)}
          color="primary"
        />

        <Checkbox
          checked={painBottomLeft}
          onChange={() => setPainBottomLeft(!painBottomLeft)}
          color="primary"
        />
      </FormGroup>
    </>
  )

Dental.propTypes = {
  brush: PropTypes.string.isRequired,
  setBrush: PropTypes.func.isRequired,
  floss: PropTypes.string.isRequired,
  setFloss: PropTypes.func.isRequired,
  visitDentist: PropTypes.string.isRequired,
  setVisitDentist: PropTypes.func.isRequired,
  comfortable: PropTypes.string.isRequired,
  setComfortable: PropTypes.func.isRequired,

  breath: PropTypes.bool.isRequired,
  setBreath: PropTypes.func.isRequired,
  bleedingGum: PropTypes.bool.isRequired,
  setBleedingGum: PropTypes.func.isRequired,
  cosmetic: PropTypes.bool.isRequired,
  setCosmetic: PropTypes.func.isRequired,
  teethPain: PropTypes.bool.isRequired,
  setTeethPain: PropTypes.func.isRequired,
  gumPain: PropTypes.bool.isRequired,
  setGumPain: PropTypes.func.isRequired,
  grinding: PropTypes.bool.isRequired,
  setGrinding: PropTypes.func.isRequired,
  damagedTeeth: PropTypes.bool.isRequired,
  setDamagedTeeth: PropTypes.func.isRequired,
  sore: PropTypes.bool.isRequired,
  setSore: PropTypes.func.isRequired,
  oldFillings: PropTypes.bool.isRequired,
  setOldFillings: PropTypes.func.isRequired,
  dentures: PropTypes.bool.isRequired,
  setDentures: PropTypes.func.isRequired,
  loose: PropTypes.bool.isRequired,
  setLoose: PropTypes.func.isRequired,

  painTopRight: PropTypes.bool.isRequired,
  setPainTopRight: PropTypes.func.isRequired,
  painTopCenter: PropTypes.bool.isRequired,
  setPainTopCenter: PropTypes.func.isRequired,
  painTopLeft: PropTypes.bool.isRequired,
  setPainTopLeft: PropTypes.func.isRequired,
  painBottomRight: PropTypes.bool.isRequired,
  setPainBottomRight: PropTypes.func.isRequired,
  painBottomCenter: PropTypes.bool.isRequired,
  setPainBottomCenter: PropTypes.func.isRequired,
  painBottomLeft: PropTypes.bool.isRequired,
  setPainBottomLeft: PropTypes.func.isRequired,
}

export default Dental
