// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'material-ui-pickers'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

// ToDo move to utils and use to validate next button
const validateMedicare = (medicare) => {
  let isValid = false

  if (medicare && medicare.length === 10) {
    const matches = medicare.match(/^(\d{8})(\d)/)

    if (!matches) {
      return { invalid: true }
    }

    const base = matches[1]
    const checkDigit = matches[2]
    const weights = [1, 3, 7, 9, 1, 3, 7, 9]

    let sum = 0
    for (let i = 0; i < weights.length; i++) {
      sum += parseInt(base[i], 10) * weights[i]
    }

    isValid = sum % 10 === parseInt(checkDigit, 10)
  }

  return isValid
}

const Personal = ({
  firstName, setFirstName,
  familyName, setFamilyName,
  selectedDate, handleDateChange,
  postcode, setPostcode,
  gender, setGender,
  otherGender, setOtherGender,
  contactNumber, setContactNumber,
  organisation, setOrganisation,
  medicare, setMedicare,
  individualNumber, setIndividualNumber,
}) => {
  console.log('')
  return (
    <>
      <Typography variant="h4">
        Getting to know you
      </Typography>

      <TextField
        label="First name"
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
        autoFocus
        margin="normal"
        variant="filled"
      />

      <TextField
        label="Family name"
        value={familyName}
        onChange={e => setFamilyName(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />


      <div className="picker">
        <DatePicker
          keyboard
          label="Date of birth"
          format="MM/dd/yyyy"
          mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])
          }
          value={selectedDate}
          onChange={handleDateChange}
          disableOpenOnEnter
          animateYearScrolling={false}
        />
      </div>

      <TextField
        label="Postcode"
        value={postcode}
        inputProps={
          { maxLength: 4 }
        }
        onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setPostcode(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />

      <FormControl component="fieldset">
        <FormLabel component="legend">Which gender do you most identify with?</FormLabel>
        <RadioGroup
          aria-label="Gender"
          name="gender"
          value={gender}
          onChange={e => setGender(e.currentTarget.value)}
        >
          <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
          <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
          <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
        </RadioGroup>
      </FormControl>

      {
        gender === 'other' && (
          <TextField
            label="Other gender"
            value={otherGender}
            onChange={e => setOtherGender(e.currentTarget.value)}
            margin="normal"
            variant="filled"
          />
        )
      }

      <TextField
        label="Contact number"
        value={contactNumber}
        inputProps={
          { maxLength: 10 }
        }
        onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setContactNumber(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />

      <TextField
        label="Which organisation are you part of?"
        value={organisation}
        onChange={e => setOrganisation(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />

      <Typography variant="h4">
        Do you have health care?
      </Typography>

      <TextField
        label="Medicare"
        value={medicare}
        error={!validateMedicare(medicare) && medicare !== ''}
        inputProps={
          { maxLength: 10 }
        }
        onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setMedicare(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />

      <TextField
        label="Individual number"
        value={individualNumber}
        inputProps={
          { maxLength: 10 }
        }
        onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setIndividualNumber(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />


    </>
  )
}

Personal.propTypes = {
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  familyName: PropTypes.string.isRequired,
  setFamilyName: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date),
  handleDateChange: PropTypes.func.isRequired,
  postcode: PropTypes.string.isRequired,
  setPostcode: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  setGender: PropTypes.func.isRequired,
  otherGender: PropTypes.string.isRequired,
  setOtherGender: PropTypes.func.isRequired,
  contactNumber: PropTypes.string.isRequired,
  setContactNumber: PropTypes.func.isRequired,
  organisation: PropTypes.string.isRequired,
  setOrganisation: PropTypes.func.isRequired,
  //
  medicare: PropTypes.string.isRequired,
  setMedicare: PropTypes.func.isRequired,
  individualNumber: PropTypes.string.isRequired,
  setIndividualNumber: PropTypes.func.isRequired,

}

Personal.defaultProps = {
  selectedDate: null,
}
export default Personal
