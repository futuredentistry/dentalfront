import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import differenceInYears from 'date-fns/difference_in_years'

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
                <ListItem>
                    <ListItemText
                      primary={<b>Age</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={
                            differenceInYears(
                                new Date(),
                                new Date(birthDate.seconds.toString().substring(0, 10) * 1000),
                            )}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Gender</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(gender)}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Medicare</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={medicare ? 'Yes' : 'No'}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Health insurance provider</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={`${privateInsurance} ${privateInsuranceOther}`}
                    />
                </ListItem>


                <ListItem>
                    <ListItemText
                      primary={<b>Smoker</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(smoker)}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Soft drinks</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(softDrinks)}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Alcohol</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(alcohol)}
                    />
                </ListItem>
            </List>

            <Typography variant="h4">
                Dental & Medical
            </Typography>

            <List>
                <ListItem>
                    <ListItemText
                      primary={<b>Brushes</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(brush)}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Floses</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(floss)}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Visits to the dentist</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(visitDentist)}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Issues</b>}
                    />
                </ListItem>
                {conditionsDental.some(item => item)
                    && (
                        <>
                            {breath && (
                                <ListItem>
                                    <ListItemText
                                      primary="bad breath"
                                    />
                                </ListItem>
                            )}
                            {bleedingGum && (
                                <ListItem>
                                    <ListItemText
                                      primary="bleeding gum"
                                    />
                                </ListItem>
                            )}
                            {cosmetic && (
                                <ListItem>
                                    <ListItemText
                                      primary="cosmetic issues"
                                    />
                                </ListItem>
                            )}
                            {teethPain && (
                                <ListItem>
                                    <ListItemText
                                      primary="teeth pain"
                                    />
                                </ListItem>
                            )}
                            {gumPain && (
                                <ListItem>
                                    <ListItemText
                                      primary="gum pain"
                                    />
                                </ListItem>
                            )}
                            {grinding && (
                                <ListItem>
                                    <ListItemText
                                      primary="grinding"
                                    />
                                </ListItem>
                            )}
                            {damagedTeeth && (
                                <ListItem>
                                    <ListItemText
                                      primary="damaged teeth"
                                    />
                                </ListItem>
                            )}
                            {sore && (
                                <ListItem>
                                    <ListItemText
                                      primary="ulcers, lumps or sores"
                                    />
                                </ListItem>
                            )}
                            {oldFillings && (
                                <ListItem>
                                    <ListItemText
                                      primary="old fillings"
                                    />
                                </ListItem>
                            )}
                            {dentures && (
                                <ListItem>
                                    <ListItemText
                                      primary="dentures"
                                    />
                                </ListItem>
                            )}
                            {loose && (
                                <ListItem>
                                    <ListItemText
                                      primary="loose tooth"
                                    />
                                </ListItem>
                            )}
                        </>
                    )
                }

                <ListItem>
                    <ListItemText
                      primary={<b>Blood diseases</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={capitalizeFirstLetter(bloodDiseases)}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Allergies</b>}
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                      primary={`${allergies === 'yes'
                            ? ` Yes - ${allergiesList}`
                            : ' No'}`
                        }

                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                      primary={<b>Medical conditions</b>}
                    />
                </ListItem>

                {conditionsMedical.some(item => item)
                    && (
                        <>
                            {heartConditions && (
                                <ListItem>
                                    <ListItemText
                                      primary="heart conditions"
                                    />
                                </ListItem>
                            )}
                            {breathingProblems && (
                                <ListItem>
                                    <ListItemText
                                      primary="breathing problems"
                                    />
                                </ListItem>
                            )}
                            {bloodDisorders && (
                                <ListItem>
                                    <ListItemText
                                      primary="blood disorders"
                                    />
                                </ListItem>
                            )}
                            {boneDisease && (
                                <ListItem>
                                    <ListItemText
                                      primary="bone disease"
                                    />
                                </ListItem>
                            )}
                            {cancer && (
                                <ListItem>
                                    <ListItemText
                                      primary="cancer"
                                    />
                                </ListItem>
                            )}
                            {diabetes && (
                                <ListItem>
                                    <ListItemText
                                      primary="diabetes"
                                    />
                                </ListItem>
                            )}
                            {stroke && (
                                <ListItem>
                                    <ListItemText
                                      primary="stroke"
                                    />
                                </ListItem>
                            )}
                            {pacemaker && (
                                <ListItem>
                                    <ListItemText
                                      primary="pacemaker"
                                    />
                                </ListItem>
                            )}
                            {otherConditions && (
                                <ListItem>
                                    <ListItemText
                                      primary={otherConditionsList}
                                    />
                                </ListItem>
                            )}

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
