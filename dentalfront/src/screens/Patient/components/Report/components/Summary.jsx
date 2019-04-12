import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

// ToDo move to utils
const capitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1)

const Summary = ({
    firstName,
    familyName,
    selectedDate,
    postcode,
    gender,
    otherGender,
    // email,
    contactNumber,
    medicare,
    privateInsurance,
    privateInsuranceOther,
    includeDental,

    smoker,
    softDrinks,
    alcohol,
}) => {
    console.log('')
    return (
        <div>
            <Typography variant="h4">
                {`Thanks ${capitalizeFirstLetter(firstName)}`}
            </Typography>

            <Typography variant="body2">
                Let's take one last look over your information before we submit it
            </Typography>

            <Typography variant="h5">
                Personal
            </Typography>
            <Typography variant="body1">
                {'Hi'}
                <b>{` ${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(familyName)}`}</b>
                <br />

                {'You\'re born on the'}
                <b>{` ${format(new Date(selectedDate), 'MM/dd/yyyy')}`}</b>
                <br />

                {'Your postcode is'}
                <b>{` ${postcode}`}</b>
                <br />

                {'You identify yourself as a '}
                <b>{` ${otherGender || gender}`}</b>
                <br />

                {/* {'Your email is'}
                <b>{` ${email}`}</b>
                <br /> */}

                {'Your contact number is'}
                <b>{` ${contactNumber}`}</b>
                <br />

                {'Your medicare number is'}
                <b>{` ${medicare}`}</b>
                <br />

                {(privateInsurance || privateInsuranceOther) && (
                    <>
                        {'and you have health insurance with'}
                        <b>{` ${privateInsurance} ${privateInsuranceOther} ${includeDental ? ' with optional extras' : ''}`}</b>
                        <br />
                    </>
                )}

            </Typography>

            <Typography variant="h5">
                Lifestyle
            </Typography>

            {'You'}
            <b>{`${smoker === 'yes' ? ' are social or regular smoker' : ' don\'t smoke'}`}</b>
            <br />

            {'You'}
            <b>{` ${softDrinks} drink soft drinks`}</b>
            <br />

            {'and you'}
            <b>{` ${alcohol} drink alcohol`}</b>
            <br />

            <Typography variant="h5">
                Dental
            </Typography>

            <Typography variant="h5">
                Medical
            </Typography>
        </div>
    )
}

Summary.propTypes = {
    firstName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired,
    selectedDate: PropTypes.string,
    postcode: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    otherGender: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    medicare: PropTypes.string.isRequired,
    privateInsurance: PropTypes.string.isRequired,
    privateInsuranceOther: PropTypes.string.isRequired,
    includeDental: PropTypes.bool.isRequired,
    // email,

    smoker: PropTypes.string.isRequired,
    softDrinks: PropTypes.string.isRequired,
    alcohol: PropTypes.string.isRequired,

}

Summary.defaultProps = {
    selectedDate: null,
}

export default Summary
