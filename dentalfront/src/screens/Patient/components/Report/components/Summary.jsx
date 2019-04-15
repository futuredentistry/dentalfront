import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Typography from '@material-ui/core/Typography'

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

    // Lifestyle
    smoker,
    softDrinks,
    alcohol,

    // Dental
    brush,
    floss,
    visitDentist,
    comfortable,
    breath,
    bleedingGum,
    cosmetic,
    teethPain,
    gumPain,
    grinding,
    damagedTeeth,
    sore,
    oldFillings,
    dentures,
    loose,

    // Medical
    bloodDiseases,
    pregnant,
    allergies,
    allergiesList,
    heartConditions,
    breathingProblems,
    bloodDisorders,
    boneDisease,
    cancer,
    diabetes,
    stroke,
    pacemaker,
    otherConditions,
    otherConditionsList,
}) => {
    const conditionsMedical = [
        heartConditions,
        breathingProblems,
        bloodDisorders,
        boneDisease,
        cancer,
        diabetes,
        stroke,
        pacemaker,
        otherConditions,
        otherConditionsList,
    ]
    const conditionsDental = [
        breath,
        bleedingGum,
        cosmetic,
        teethPain,
        gumPain,
        grinding,
        damagedTeeth,
        sore,
        oldFillings,
        dentures,
        loose,
    ]
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
                        <b>
                            {` ${privateInsurance} ${privateInsuranceOther} ${includeDental
                                ? ' with optional extras'
                                : ''}`}

                        </b>
                        <br />
                    </>
                )}

            </Typography>

            <Typography variant="h5">
                Lifestyle
            </Typography>

            <Typography variant="body1">
                {'You'}
                <b>{`${smoker === 'yes' ? ' are social or regular smoker' : ' don\'t smoke'}`}</b>
                <br />

                {'You'}
                <b>{` ${softDrinks} drink soft drinks`}</b>
                <br />

                {'and you'}
                <b>{` ${alcohol} drink alcohol`}</b>
                <br />
            </Typography>

            <Typography variant="h5">
                Dental
            </Typography>

            <Typography variant="body1">

                {'You superstar, you '}
                <b>{`brush your teeth ${brush}`}</b>
                <br />

                {'You also '}
                <b>{`floss ${floss}`}</b>
                <br />

                {'You visit the dentist '}
                <b>{visitDentist}</b>
                <br />

                {'You'}
                <b>{` ${comfortable === 'yes' ? ' are ' : 'are un'}comfortable with dental procedures`}</b>
                <br />

                {`and you ${conditionsDental.some(item => item)
                    ? 'you have concerns about your'
                    : 'not have any concerns'}`}
                <b>
                    {breath && ' bad breath'}
                    {bleedingGum && ', bleeding gum'}
                    {cosmetic && ', cosmetic issues'}
                    {teethPain && ', teeth pain'}
                    {gumPain && ', gum pain'}
                    {grinding && ', grinding'}
                    {damagedTeeth && ', damaged teeth'}
                    {sore && ', ulcers, lumps or sores'}
                    {oldFillings && ', old fillings'}
                    {dentures && ', dentures'}
                    {loose && ', loose tooth'}
                </b>
                .
                <br />
            </Typography>

            <Typography variant="h5">
                Medical
            </Typography>

            <Typography variant="body1">
                {'You'}
                <b>{` ${bloodDiseases === 'yes' ? 'have' : 'have no'} blood diseases`}</b>
                <br />

                {'You'}
                <b>{` ${pregnant === 'yes' ? ' are' : 'aren\'t'} pregnant or breast feeding`}</b>
                <br />

                {'You'}
                <b>
                    {`${allergies === 'yes'
                        ? ` do have a serious allergy to ${allergiesList}`
                        : ' have no blood diseases'}`}

                </b>
                <br />

                {`and you ${conditionsMedical.some(item => item)
                    ? ' do have some existing conditions, including'
                    : ' do not have any existing conditions.'}`}
                <b>
                    {heartConditions && ' heart conditions'}
                    {breathingProblems && ', breathing problems'}
                    {bloodDisorders && ', blood disorders'}
                    {boneDisease && ', bone disease'}
                    {cancer && ', cancer'}
                    {diabetes && ', diabetes'}
                    {stroke && ', stroke'}
                    {pacemaker && ', pacemaker'}
                    {otherConditions && `, ${otherConditionsList}`}
                </b>
                .
                <br />
            </Typography>

        </div>
    )
}

Summary.propTypes = {
    // Personal
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
    // email, ToDo

    // Lifestyle
    smoker: PropTypes.string.isRequired,
    softDrinks: PropTypes.string.isRequired,
    alcohol: PropTypes.string.isRequired,

    // Dental
    brush: PropTypes.string.isRequired,
    floss: PropTypes.string.isRequired,
    visitDentist: PropTypes.string.isRequired,
    comfortable: PropTypes.string.isRequired,
    breath: PropTypes.bool.isRequired,
    bleedingGum: PropTypes.bool.isRequired,
    cosmetic: PropTypes.bool.isRequired,
    teethPain: PropTypes.bool.isRequired,
    gumPain: PropTypes.bool.isRequired,
    grinding: PropTypes.bool.isRequired,
    damagedTeeth: PropTypes.bool.isRequired,
    sore: PropTypes.bool.isRequired,
    oldFillings: PropTypes.bool.isRequired,
    dentures: PropTypes.bool.isRequired,
    loose: PropTypes.bool.isRequired,

    // Medical
    bloodDiseases: PropTypes.string.isRequired,
    pregnant: PropTypes.string.isRequired,
    allergies: PropTypes.string.isRequired,
    allergiesList: PropTypes.string.isRequired,
    heartConditions: PropTypes.bool.isRequired,
    breathingProblems: PropTypes.bool.isRequired,
    bloodDisorders: PropTypes.bool.isRequired,
    boneDisease: PropTypes.bool.isRequired,
    cancer: PropTypes.bool.isRequired,
    diabetes: PropTypes.bool.isRequired,
    stroke: PropTypes.bool.isRequired,
    pacemaker: PropTypes.bool.isRequired,
    otherConditions: PropTypes.bool.isRequired,
    otherConditionsList: PropTypes.string.isRequired,
}

Summary.defaultProps = {
    selectedDate: null,
}

export default Summary
