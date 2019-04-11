import React from 'react'
import PropTypes from 'prop-types'
import { DatePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'

import TextField from '@material-ui/core/TextField'

const Personal = ({
    firstName, setFirstName,
    familyName, setFamilyName,
    selectedDate, handleDateChange,
    postcode, setPostcode,
    ...rest
}) => {
    console.log(rest)
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
}

Personal.defaultProps = {
    selectedDate: null,
}
export default Personal
