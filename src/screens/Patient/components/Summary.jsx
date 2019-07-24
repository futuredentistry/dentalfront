import React from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Typography from '@material-ui/core/Typography'
import FormGroup from '@material-ui/core/FormGroup'
import List from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import Edit from '@material-ui/icons/BorderColorRounded'

import PrimaryListItem from 'ui/PrimaryListItem/PrimaryListItem'
import PrimaryCheckbox from 'ui/PrimaryCheckbox'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import {
    propsDental, propsPersonal, propsLifestyle, propsMedical,
} from 'modules/Patient/props'

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

    setStep
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
                <IconButton aria-label="Close" onClick={() => setStep(1)}>
                    <Edit />
                </IconButton>
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

                {privateInsurance && (
                    <>
                        {'and you have health insurance with'}
                        <b>
                            {` ${privateInsurance} ${includeDental
                                ? ' with optional extras'
                                : ''}`}
                        </b>
                        <br />
                    </>
                )}

            </Typography>

            <Typography variant="h4">
                Lifestyle
                <IconButton aria-label="Close" onClick={() => setStep(2)}>
                    <Edit />
                </IconButton>
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
                <IconButton aria-label="Close" onClick={() => setStep(3)}>
                    <Edit />
                </IconButton>
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
                <IconButton aria-label="Close" onClick={() => setStep(4)}>
                    <Edit />
                </IconButton>
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
            <FormGroup>
                <PrimaryCheckbox
                    formLabel="I am happy for images of my teeth to be separated from my personal information for use in research"
                    formValue={research}
                    onChange={setResearch}
                />
                <br />
                <PrimaryCheckbox
                    formLabel="By submitting this form you agree to our terms and conditions and privacy policy"
                    formValue={policy}
                    onChange={setPolicy}
                />
            </FormGroup>
        </>
    )
}

Summary.propTypes = {
    email: PropTypes.string.isRequired,
    ...propsPersonal,
    ...propsLifestyle,
    ...propsDental,
    ...propsMedical,
    research: PropTypes.bool.isRequired,
    setResearch: PropTypes.func.isRequired,
    policy: PropTypes.bool.isRequired,
    setPolicy: PropTypes.func.isRequired,
    setStep: PropTypes.func.isRequired,
}

export default Summary
