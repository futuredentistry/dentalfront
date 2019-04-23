// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

import LineRadioGroup from 'ui/LineRadioGroup'
import RadioGroupYesNo from 'ui/RadioGroupYesNo'

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
        <FormControlLabel
          control={(
            <Checkbox
              checked={breath}
              onChange={() => setBreath(!breath)}
              color="primary"
            />
          )}
          label="Bad breath"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={bleedingGum}
              onChange={() => setBleedingGum(!bleedingGum)}
              color="primary"
            />
          )}
          label="Bleeding gums"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={cosmetic}
              onChange={() => setCosmetic(!cosmetic)}
              color="primary"
            />
          )}
          label="Cosmetic issues"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={teethPain}
              onChange={() => setTeethPain(!teethPain)}
              color="primary"
            />
          )}
          label="Teeth pain"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={gumPain}
              onChange={() => setGumPain(!gumPain)}
              color="primary"
            />
          )}
          label="Gum pain"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={grinding}
              onChange={() => setGrinding(!grinding)}
              color="primary"
            />
          )}
          label="Grinding"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={damagedTeeth}
              onChange={() => setDamagedTeeth(!damagedTeeth)}
              color="primary"
            />
          )}
          label="Damaged teeth"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={sore}
              onChange={() => setSore(!sore)}
              color="primary"
            />
          )}
          label="Ulcers, lumps or sores"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={oldFillings}
              onChange={() => setOldFillings(!oldFillings)}
              color="primary"
            />
          )}
          label="Old fillings"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={dentures}
              onChange={() => setDentures(!dentures)}
              color="primary"
            />
          )}
          label="Dentures"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={loose}
              onChange={() => setLoose(!loose)}
              color="primary"
            />
          )}
          label="Loose tooth"
        />
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
