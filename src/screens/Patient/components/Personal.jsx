// @ts-nocheck
import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'material-ui-pickers'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import FormHelperText from '@material-ui/core/FormHelperText'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'
import { propsPersonal, methodsPersonal } from 'modules/Patient/props'
import SelectOrganisation from 'ui/SelectOrganisation'
import PrimaryCheckbox from 'ui/PrimaryCheckbox'

import 'modules/styles/datePicker.scss'

const Personal = ({
  validFormStep,

  firstName, setFirstName,
  familyName, setFamilyName,
  birthDate, handleDateBirthChange,
  postcode, setPostcode,
  gender, setGender,
  contactNumber, setContactNumber,
  organisation, setOrganisation,
  //
  medicare, setMedicare,
  individualNumber, setIndividualNumber,
  expiredDate, handleExpiredChange,
  privateInsurance, setPrivateInsurance,
  privateInsuranceOther, setPrivateInsuranceOther,
  includeDental, setIncludeDental,
}) => {
  const { setDark, setShow } = useContext(HeaderFooterContext)
  useEffect(() => {
    setDark(false)
    setShow(false)
  }, [])

  const display = medicare !== '' ? [...medicare].map((char, i) => {
    if (i === 4) return ` ${char}`
    if (i === 9) return ` ${char}`
    if (i === 10) return `-${char}`
    return char
  }).join('') : ''

  return (
    <>
      <Typography variant="h4">
        Getting to know you
      </Typography>

      <TextField
        error={validFormStep && firstName === ''}
        label="First name"
        value={firstName}
        onChange={e => setFirstName(e.currentTarget.value)}
        autoFocus
        margin="normal"
        variant="filled"
      />
      {validFormStep && firstName === '' && <FormHelperText error>Please fill out this field</FormHelperText>}

      <TextField
        error={validFormStep && familyName === ''}
        label="Family name"
        value={familyName}
        onChange={e => setFamilyName(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />
      {validFormStep && familyName === '' && <FormHelperText error>Please fill out this field</FormHelperText>}


      <div className="picker">
        <DatePicker
          error={validFormStep && birthDate === null}
          variant="filled"
          keyboard
          label="Date of birth"
          format="dd/MM/yyyy"
          mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])
          }
          value={birthDate}
          onChange={handleDateBirthChange}
          disableOpenOnEnter
          animateYearScrolling={false}
          maxDate={new Date()}
        />
      </div>
      {validFormStep && birthDate === null && <FormHelperText error>Please fill out this field</FormHelperText>}

      <TextField
        error={validFormStep && postcode === ''}
        label="Postcode"
        value={postcode}
        inputProps={
          { maxLength: 4 }
        }
        onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setPostcode(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />
      {validFormStep && postcode === '' && <FormHelperText error>Please fill out this field</FormHelperText>}

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

      <TextField
        error={validFormStep && contactNumber === ''}
        label="Contact number"
        value={contactNumber}
        inputProps={
          { maxLength: 10 }
        }
        onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setContactNumber(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />
      {validFormStep && contactNumber === '' && <FormHelperText error>Please fill out this field</FormHelperText>}

      <SelectOrganisation {...{ organisation, setOrganisation, validFormStep }} />

      <Typography variant="h4">
        Do you have health care?
      </Typography>

      <TextField
        label="Medicare"
        value={display}
        error={
          (!/^[2-6]\d{3}[ ]?\d{5}[ ]?\d{1}[- ]?\d?$/.test(display) && medicare !== '')
          || (validFormStep && medicare === '')
        }
        inputProps={
          { maxLength: 14 }
        }
        onKeyDown={(e) => {
          const key = e.keyCode || e.charCode
          if (key === 8 || key === 46) return setMedicare('')
          return null
        }}
        // eslint-disable-next-line max-len
        onChange={e => /^(\d)$/.test(e.currentTarget.value.slice(-1)) && setMedicare(medicare + e.currentTarget.value.slice(-1))
        }
        margin="normal"
        variant="filled"
      />
      {validFormStep && medicare === '' && <FormHelperText error>Please fill out this field</FormHelperText>}

      <TextField
        error={validFormStep && individualNumber === ''}
        label="Individual number"
        value={individualNumber}
        inputProps={
          { maxLength: 1 }
        }
        onChange={e => /^(\s*|\d+)$/.test(e.currentTarget.value) && setIndividualNumber(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />
      {validFormStep && individualNumber === '' && <FormHelperText error>Please fill out this field</FormHelperText>}

      <div className="picker">
        <DatePicker
          error={validFormStep && expiredDate === null}
          variant="filled"
          keyboard
          label="Expire date"
          format="dd/MM/yyyy"
          mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
          value={expiredDate}
          onChange={handleExpiredChange}
          disableOpenOnEnter
          animateYearScrolling={false}
          minDate={new Date()}
        />
      </div>
      {validFormStep && expiredDate === null && <FormHelperText error>Please fill out this field</FormHelperText>}

      <TextField
        label="Private health insurance or other"
        value={privateInsurance}
        onChange={e => setPrivateInsurance(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />

      <TextField
        label="Other"
        value={privateInsuranceOther}
        onChange={e => setPrivateInsuranceOther(e.currentTarget.value)}
        margin="normal"
        variant="filled"
      />

      <FormGroup>
        <PrimaryCheckbox
          formLabel="My private health insurance includes dental"
          formValue={includeDental}
          onChange={setIncludeDental}
        />
      </FormGroup>
    </>
  )
}

Personal.propTypes = {
  validFormStep: PropTypes.bool.isRequired,
  ...propsPersonal,
  ...methodsPersonal,
}

export default Personal
