// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

const Medical = ({
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
}) => {
    console.log('')
    return (
        <div>
            <Typography variant="h4">
                Finally, your medical history
            </Typography>

            <FormControl component="fieldset">
                <FormLabel component="legend">Do you have any blood diseases?</FormLabel>
                <RadioGroup
                  aria-label="bloodDiseases"
                  name="bloodDiseases"
                  value={bloodDiseases}
                  onChange={e => setBloodDiseases(e.currentTarget.value)}
                >
                    <FormControlLabel
                      value="no"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">Are you currently pregnant or breastfeeding?</FormLabel>
                <RadioGroup
                  aria-label="pregnant"
                  name="pregnant"
                  value={pregnant}
                  onChange={e => setPregnant(e.currentTarget.value)}
                >
                    <FormControlLabel
                      value="no"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">Do you have any serious allergies?</FormLabel>
                <RadioGroup
                  aria-label="allergies"
                  name="allergies"
                  value={allergies}
                  onChange={e => setAllergies(e.currentTarget.value)}
                >
                    <FormControlLabel
                      value="no"
                      control={<Radio color="primary" />}
                      label="No"
                    />
                    <FormControlLabel
                      value="yes"
                      control={<Radio color="primary" />}
                      label="Yes"
                    />
                </RadioGroup>
            </FormControl>

            {
                allergies === 'yes' && (
                    <TextField
                      label="Please list any serious allergies"
                      value={allergiesList}
                      onChange={e => setAllergiesList(e.currentTarget.value)}
                      margin="normal"
                      variant="filled"
                    />
                )
            }

            <Typography variant="h5">
                Please select all medical conditions that apply to you?
            </Typography>

            <FormGroup>
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={heartConditions}
                          onChange={() => setHeartConditions(!heartConditions)}
                          color="primary"
                        />
                    )}
                  label="Heart conditions"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={breathingProblems}
                          onChange={() => setBreathingProblems(!breathingProblems)}
                          color="primary"
                        />
                    )}
                  label="Breathing problems"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={bloodDisorders}
                          onChange={() => setBloodDisorders(!bloodDisorders)}
                          color="primary"
                        />
                    )}
                  label="Blood disorders"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={boneDisease}
                          onChange={() => setBoneDisease(!boneDisease)}
                          color="primary"
                        />
                    )}
                  label="Bone disease"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={cancer}
                          onChange={() => setCancer(!cancer)}
                          color="primary"
                        />
                    )}
                  label="Cancer"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={diabetes}
                          onChange={() => setDiabetes(!diabetes)}
                          color="primary"
                        />
                    )}
                  label="Diabetes"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={stroke}
                          onChange={() => setStroke(!stroke)}
                          color="primary"
                        />
                    )}
                  label="Stroke"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={pacemaker}
                          onChange={() => setPacemaker(!pacemaker)}
                          color="primary"
                        />
                    )}
                  label="Pacemaker"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={otherConditions}
                          onChange={() => setOtherConditions(!otherConditions)}
                          color="primary"
                        />
                    )}
                  label="Any other conditions?"
                />
            </FormGroup>


            {
                otherConditions && (
                    <TextField
                      label="Please list any serious allergies"
                      value={otherConditionsList}
                      onChange={e => setOtherConditionsList(e.currentTarget.value)}
                      margin="normal"
                      variant="filled"
                    />
                )
            }
        </div>
    )
}

Medical.propTypes = {
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
