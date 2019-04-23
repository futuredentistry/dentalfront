// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'

import RadioGroupYesNo from 'ui/RadioGroupYesNo'
import PrimaryCheckbox from 'ui/PrimaryCheckbox'

const Medical = ({
  validFormStep,

  bloodDiseases, setBloodDiseases,
  pregnant, setPregnant,
  allergies, setAllergies,
  allergiesList, setAllergiesList,
  heartConditions, setHeartConditions,
  breathingProblems, setBreathingProblems,
  bloodDisorders, setBloodDisorders,
  boneDisease, setBoneDisease,
  cancer, setCancer,
  diabetes, setDiabetes,
  stroke, setStroke,
  pacemaker, setPacemaker,
  otherConditions, setOtherConditions,
  otherConditionsList, setOtherConditionsList,
}) => (
    <>
      <Typography variant="h4">
        Finally, your medical history
      </Typography>

      <RadioGroupYesNo
        formLabel="Do you have any blood diseases?"
        formValue={bloodDiseases}
        onChange={setBloodDiseases}
      />

      <RadioGroupYesNo
        formLabel="Are you currently pregnant or breastfeeding?"
        formValue={pregnant}
        onChange={setPregnant}
      />

      <RadioGroupYesNo
        formLabel="Do you have any serious allergies?"
        formValue={allergies}
        onChange={setAllergies}
      />

      {
        allergies === 'yes' && (
          <>
            <TextField
              label="Please list any serious allergies"
              error={validFormStep && allergiesList === ''}
              value={allergiesList}
              onChange={e => setAllergiesList(e.currentTarget.value)}
              margin="normal"
              variant="filled"
            />
            {validFormStep && allergiesList === '' && <FormHelperText error>Please fill out this field</FormHelperText>}
          </>
        )
      }

      <Typography variant="h5">
        Please select all medical conditions that apply to you?
      </Typography>

      <FormGroup>
        <PrimaryCheckbox formLabel="Heart conditions" formValue={heartConditions} onChange={setHeartConditions} />
        <PrimaryCheckbox formLabel="Breathing problems" formValue={breathingProblems} onChange={setBreathingProblems} />
        <PrimaryCheckbox formLabel="Blood disorders" formValue={bloodDisorders} onChange={setBloodDisorders} />
        <PrimaryCheckbox formLabel="Bone disease" formValue={boneDisease} onChange={setBoneDisease} />
        <PrimaryCheckbox formLabel="Cancer" formValue={cancer} onChange={setCancer} />
        <PrimaryCheckbox formLabel="Diabetes" formValue={diabetes} onChange={setDiabetes} />
        <PrimaryCheckbox formLabel="Stroke" formValue={stroke} onChange={setStroke} />
        <PrimaryCheckbox formLabel="Pacemaker" formValue={pacemaker} onChange={setPacemaker} />
        <PrimaryCheckbox formLabel="Any other conditions?" formValue={otherConditions} onChange={setOtherConditions} />
      </FormGroup>


      {
        otherConditions && (
          <>
            <TextField
              error={validFormStep && otherConditions && otherConditionsList === ''}
              label="Please list any serious allergies"
              value={otherConditionsList}
              onChange={e => setOtherConditionsList(e.currentTarget.value)}
              margin="normal"
              variant="filled"
            />
            {validFormStep
              && otherConditions
              && otherConditionsList === ''
              && <FormHelperText error>Please fill out this field</FormHelperText>}
          </>
        )
      }
    </>
  )

Medical.propTypes = {
  validFormStep: PropTypes.bool.isRequired,

  bloodDiseases: PropTypes.string.isRequired,
  setBloodDiseases: PropTypes.func.isRequired,
  pregnant: PropTypes.string.isRequired,
  setPregnant: PropTypes.func.isRequired,
  allergies: PropTypes.string.isRequired,
  setAllergies: PropTypes.func.isRequired,
  allergiesList: PropTypes.string.isRequired,
  setAllergiesList: PropTypes.func.isRequired,

  heartConditions: PropTypes.bool.isRequired,
  setHeartConditions: PropTypes.func.isRequired,
  breathingProblems: PropTypes.bool.isRequired,
  setBreathingProblems: PropTypes.func.isRequired,
  bloodDisorders: PropTypes.bool.isRequired,
  setBloodDisorders: PropTypes.func.isRequired,
  boneDisease: PropTypes.bool.isRequired,
  setBoneDisease: PropTypes.func.isRequired,
  cancer: PropTypes.bool.isRequired,
  setCancer: PropTypes.func.isRequired,
  diabetes: PropTypes.bool.isRequired,
  setDiabetes: PropTypes.func.isRequired,
  stroke: PropTypes.bool.isRequired,
  setStroke: PropTypes.func.isRequired,
  pacemaker: PropTypes.bool.isRequired,
  setPacemaker: PropTypes.func.isRequired,
  otherConditions: PropTypes.bool.isRequired,
  setOtherConditions: PropTypes.func.isRequired,
  otherConditionsList: PropTypes.string.isRequired,
  setOtherConditionsList: PropTypes.func.isRequired,
}

export default Medical
