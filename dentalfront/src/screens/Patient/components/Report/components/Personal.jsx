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

const Personal = ({
    firstName, setFirstName,
    familyName, setFamilyName,
    selectedDate, handleDateChange,
    postcode, setPostcode,
    gender, setGender,
    otherGender, setOtherGender,
    contactNumber, setContactNumber,
    organisation, setOrganisation,
}) => {
    console.log('')
    return (
        <>
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
}

Personal.defaultProps = {
    selectedDate: null,
}
export default Personal
