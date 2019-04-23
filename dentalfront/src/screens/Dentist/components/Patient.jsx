import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import { differenceInYears } from 'date-fns'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import PrimaryListItem from 'ui/PrimaryListItem/PrimaryListItem'

const Patient = ({
  firstName,
  birthDate,
  gender,
  medicare,
  privateInsurance,
  privateInsuranceOther,
  smoker,
  softDrinks,
  alcohol,
  //
  brush,
  floss,
  visitDentist,
  bloodDiseases,
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
        A bit about
                {' '}
        {capitalizeFirstLetter(firstName)}
      </Typography>

      <List>
        <PrimaryListItem primary={<b>Age</b>} />
        <PrimaryListItem
          primary={
            differenceInYears(
              new Date(),
              new Date(birthDate.seconds.toString().substring(0, 10) * 1000),
            )}
        />

        <PrimaryListItem primary={<b>Gender</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(gender)} />

        <PrimaryListItem primary={<b>Medicare</b>} />
        <PrimaryListItem primary={medicare ? 'Yes' : 'No'} />

        <PrimaryListItem primary={<b>Health insurance provider</b>} />
        <PrimaryListItem primary={`${privateInsurance} ${privateInsuranceOther}`} />

        <PrimaryListItem primary={<b>Smoker</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(smoker)} />

        <PrimaryListItem primary={<b>Soft drinks</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(softDrinks)} />

        <PrimaryListItem primary={<b>Alcohol</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(alcohol)} />
      </List>

      <Typography variant="h4">
        Dental & Medical
      </Typography>

      <List>
        <PrimaryListItem primary={<b>Brushes</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(brush)} />

        <PrimaryListItem primary={<b>Floses</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(floss)} />

        <PrimaryListItem primary={<b>Visits to the dentist</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(visitDentist)} />

        <PrimaryListItem primary={<b>Issues</b>} />

        {conditionsDental.some(item => item)
          && (
            <>
              {breath && <PrimaryListItem primary="bad breath" />}
              {bleedingGum && <PrimaryListItem primary="bleeding gum" />}
              {cosmetic && <PrimaryListItem primary="cosmetic issues" />}
              {teethPain && <PrimaryListItem primary="teeth pain" />}
              {gumPain && <PrimaryListItem primary="gum pain" />}
              {grinding && <PrimaryListItem primary="grinding" />}
              {damagedTeeth && <PrimaryListItem primary="damaged teeth" />}
              {sore && <PrimaryListItem primary="ulcers, lumps or sores" />}
              {oldFillings && <PrimaryListItem primary="old fillings" />}
              {dentures && <PrimaryListItem primary="dentures" />}
              {loose && <PrimaryListItem primary="loose tooth" />}
            </>
          )
        }


        <PrimaryListItem primary={<b>Blood diseases</b>} />
        <PrimaryListItem primary={capitalizeFirstLetter(bloodDiseases)} />

        <PrimaryListItem primary={<b>Allergies</b>} />
        <PrimaryListItem primary={`${allergies === 'yes' ? ` Yes - ${allergiesList}` : ' No'}`} />

        <PrimaryListItem primary={<b>Medical conditions</b>} />
        {conditionsMedical.some(item => item)
          && (
            <>
              {heartConditions && <PrimaryListItem primary="heart conditions" />}
              {breathingProblems && <PrimaryListItem primary="breathing problems" />}
              {bloodDisorders && <PrimaryListItem primary="blood disorders" />}
              {boneDisease && <PrimaryListItem primary="bone disease" />}
              {cancer && <PrimaryListItem primary="cancer" />}
              {diabetes && <PrimaryListItem primary="diabetes" />}
              {stroke && <PrimaryListItem primary="stroke" />}
              {pacemaker && <PrimaryListItem primary="pacemaker" />}
              {otherConditions && <PrimaryListItem primary={otherConditionsList} />}
            </>
          )
        }
      </List>
    </>
  )
}

Patient.propTypes = {
  firstName: PropTypes.string.isRequired,
  birthDate: PropTypes.shape({
    seconds: PropTypes.number.isRequired,
    nanoseconds: PropTypes.number.isRequired,
  }).isRequired,
  gender: PropTypes.string.isRequired,
  medicare: PropTypes.string.isRequired,
  privateInsurance: PropTypes.string.isRequired,
  privateInsuranceOther: PropTypes.string.isRequired,
  smoker: PropTypes.string.isRequired,
  softDrinks: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired,
  //
  brush: PropTypes.string.isRequired,
  floss: PropTypes.string.isRequired,
  visitDentist: PropTypes.string.isRequired,
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
  bloodDiseases: PropTypes.string.isRequired,
  allergies: PropTypes.string.isRequired,
  allergiesList: PropTypes.string.isRequired,
  bloodDisorders: PropTypes.bool.isRequired,
  heartConditions: PropTypes.bool.isRequired,
  breathingProblems: PropTypes.bool.isRequired,
  boneDisease: PropTypes.bool.isRequired,
  cancer: PropTypes.bool.isRequired,
  diabetes: PropTypes.bool.isRequired,
  stroke: PropTypes.bool.isRequired,
  pacemaker: PropTypes.bool.isRequired,
  otherConditions: PropTypes.bool.isRequired,
  otherConditionsList: PropTypes.string.isRequired,
}

export default Patient
