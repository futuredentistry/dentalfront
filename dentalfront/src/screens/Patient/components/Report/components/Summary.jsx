import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Typography from '@material-ui/core/Typography'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'

import PrimaryListItem from 'ui/PrimaryListItem/PrimaryListItem'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const Summary = ({
    firstName,
    familyName,
    birthDate,
    postcode,
    gender,
    email,
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
    // Summary
    research,
    setResearch,
    policy,
    setPolicy,
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
        <>
            <Typography variant="h4">
                {`Thanks ${capitalizeFirstLetter(firstName)}`}
            </Typography>

            <Typography variant="body2">
                {'Let\'s take one last look over your information before we submit it'}
            </Typography>

            <Typography variant="h4">
                Personal
            </Typography>
            <Typography variant="body1">
                {'Hi'}
                <b>{` ${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(familyName)}`}</b>
                <br />

                {'You\'re born on the'}
                {<b>{` ${format(new Date(birthDate), 'MM/dd/yyyy')}`}</b>}
                <br />

                {'Your postcode is'}
                <b>{` ${postcode}`}</b>
                <br />

                {'You identify yourself as '}
                <b>{` ${gender === 'other' ? 'an ' : 'a '}${gender}`}</b>
                <br />

                {'Your email is'}
                <b>{` ${email}`}</b>
                <br />

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

            <Typography variant="h4">
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

            <Typography variant="h4">
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
            </Typography>
            {conditionsDental.some(item => item)
                && (
                    <List>
                        <>
                            {breath && <PrimaryListItem primary={<b>bad breath</b>} />}
                            {bleedingGum && <PrimaryListItem primary={<b>bleeding gum</b>} />}
                            {cosmetic && <PrimaryListItem primary={<b>cosmetic issues</b>} />}
                            {teethPain && <PrimaryListItem primary={<b>teeth pain</b>} />}
                            {gumPain && <PrimaryListItem primary={<b>gum pain</b>} />}
                            {grinding && <PrimaryListItem primary={<b>grinding</b>} />}
                            {damagedTeeth && <PrimaryListItem primary={<b>damaged teeth</b>} />}
                            {sore && <PrimaryListItem primary={<b>ulcers, lumps or sores</b>} />}
                            {oldFillings && <PrimaryListItem primary={<b>old fillings</b>} />}
                            {dentures && <PrimaryListItem primary={<b>dentures</b>} />}
                            {loose && <PrimaryListItem primary={<b>loose tooth</b>} />}
                        </>
                    </List>
                )
            }
            <br />

            <Typography variant="h4">
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
                    {`${allergies === 'yes' ? ` do have a serious allergy to ${allergiesList}` : ' have no allergies'}`}
                </b>
                <br />

                {`and you ${conditionsMedical.some(item => item)
                    ? ' do have some existing conditions, including'
                    : ' do not have any existing conditions.'}`}
            </Typography>

            {conditionsMedical.some(item => item)
                && (
                    <List>
                        <>
                            {heartConditions && <PrimaryListItem primary={<b>heart conditions</b>} />}
                            {breathingProblems && <PrimaryListItem primary={<b>breathing problems</b>} />}
                            {bloodDisorders && <PrimaryListItem primary={<b>blood disorders</b>} />}
                            {boneDisease && <PrimaryListItem primary={<b>bone disease</b>} />}
                            {cancer && <PrimaryListItem primary={<b>cancer</b>} />}
                            {diabetes && <PrimaryListItem primary={<b>diabetes</b>} />}
                            {stroke && <PrimaryListItem primary={<b>stroke</b>} />}
                            {pacemaker && <PrimaryListItem primary={<b>pacemaker</b>} />}
                            {otherConditions && <PrimaryListItem primary={<b>{otherConditionsList}</b>} />}
                        </>
                    </List>
                )
            }

            <br />

            <FormControlLabel
              control={(
                    <Checkbox
                      checked={research}
                      onChange={() => setResearch(!research)}
                      color="primary"
                    />
                )}
              label="I am happy for images of my teeth to be separated from my personal information for use in research"
            />

            <FormControlLabel
              control={(
                    <Checkbox
                      checked={policy}
                      onChange={() => setPolicy(!policy)}
                      color="primary"
                    />
                )}
              label="By submitting this form you agree to our terms and conditions and privacy policy"
            />


        </>
    )
}

Summary.propTypes = {
    // Personal
    firstName: PropTypes.string.isRequired,
    familyName: PropTypes.string.isRequired,
    birthDate: PropTypes.instanceOf(Date),
    postcode: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    contactNumber: PropTypes.string.isRequired,
    medicare: PropTypes.string.isRequired,
    privateInsurance: PropTypes.string.isRequired,
    privateInsuranceOther: PropTypes.string.isRequired,
    includeDental: PropTypes.bool.isRequired,
    email: PropTypes.string.isRequired,

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

    // Summary
    research: PropTypes.bool.isRequired,
    setResearch: PropTypes.func.isRequired,
    policy: PropTypes.bool.isRequired,
    setPolicy: PropTypes.func.isRequired,
}

Summary.defaultProps = {
    birthDate: null,
}

export default Summary
