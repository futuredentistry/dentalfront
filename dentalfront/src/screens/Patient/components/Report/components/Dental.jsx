// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'

import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

const Dental = ({
    brush, setBrush,
    floss, setFloss,
    visitDentist, setVisitDentist,
    comfortable, setComfortable,
    dentalCornersBreath, setDentalCornersBreath,
    dentalCornersBleedingGum, setDentalCornersBleedingGum,
    dentalCornersCosmetic, setDentalCornersCosmetic,
    dentalCornersTeethPain, setDentalCornersTeethPain,
    dentalCornersGumPain, setDentalCornersGumPain,
    dentalCornersGrinding, setDentalCornersGrinding,
    dentalCornersDamagedTeeth, setDentalCornersDamagedTeeth,
    dentalCornersSore, setDentalCornersSore,
    dentalCornersOldFillings, setDentalCornersOldFillings,
    dentalCornersDentures, setDentalCornersDentures,
    dentalCornersLoose, setDentalCornersLoose,
    painTopRight, setPainTopRight,
    painTopCenter, setPainTopCenter,
    painTopLeft, setPainTopLeft,
    painBottomRight, setPainBottomRight,
    painBottomCenter, setPainBottomCenter,
    painBottomLeft, setPainBottomLeft,
}) => {
    console.log('')
    return (
        <>
            <Typography variant="h4">
                Now some dental questions
            </Typography>

            <FormControl component="fieldset">
                <FormLabel component="legend">How frequently do you brush?</FormLabel>
                <RadioGroup
                  row
                  aria-label="brush"
                  name="brush"
                  value={brush}
                  onChange={e => setBrush(e.currentTarget.value)}
                >
                    <FormControlLabel
                      labelPlacement="top"
                      value="less than once a week"
                      control={<Radio color="primary" />}
                      label="Less than once a week"
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="every few days"
                      control={<Radio color="primary" />}
                      label="Every few days"
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="daily"
                      control={<Radio color="primary" />}
                      label="Daily"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">How frequently do you floss?</FormLabel>
                <RadioGroup
                  row
                  aria-label="floss"
                  name="floss"
                  value={floss}
                  onChange={e => setFloss(e.currentTarget.value)}
                >
                    <FormControlLabel
                      labelPlacement="top"
                      value="less than once a week"
                      control={<Radio color="primary" />}
                      label="Less than once a week"
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="every few days"
                      control={<Radio color="primary" />}
                      label="Every few days"
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="daily"
                      control={<Radio color="primary" />}
                      label="Daily"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">How frequently do you visit the dentist?</FormLabel>
                <RadioGroup
                  row
                  aria-label="visitDentist"
                  name="visitDentist"
                  value={visitDentist}
                  onChange={e => setVisitDentist(e.currentTarget.value)}
                >
                    <FormControlLabel
                      labelPlacement="top"
                      value="less than every 3 years"
                      control={<Radio color="primary" />}
                      label="Less than every 3 years"
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="every 1-3 years"
                      control={<Radio color="primary" />}
                      label="Every 1-3 years"
                    />
                    <FormControlLabel
                      labelPlacement="top"
                      value="at least every year"
                      control={<Radio color="primary" />}
                      label="At least every year"
                    />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">Are you comfortable with dental procedures?</FormLabel>
                <RadioGroup
                  aria-label="comfortable"
                  name="comfortable"
                  value={comfortable}
                  onChange={e => setComfortable(e.currentTarget.value)}
                >
                    <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                </RadioGroup>
            </FormControl>

            <Typography variant="h5">
                What dental concerns do you have?
            </Typography>

            <FormGroup>
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersBreath}
                          onChange={() => setDentalCornersBreath(!dentalCornersBreath)}
                          color="primary"
                        />
                    )}
                  label="Bad breath"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersBleedingGum}
                          onChange={() => setDentalCornersBleedingGum(!dentalCornersBleedingGum)}
                          color="primary"
                        />
                    )}
                  label="Bleeding gums"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersCosmetic}
                          onChange={() => setDentalCornersCosmetic(!dentalCornersCosmetic)}
                          color="primary"
                        />
                    )}
                  label="Cosmetic issues"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersTeethPain}
                          onChange={() => setDentalCornersTeethPain(!dentalCornersTeethPain)}
                          color="primary"
                        />
                    )}
                  label="Teeth pain"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersGumPain}
                          onChange={() => setDentalCornersGumPain(!dentalCornersGumPain)}
                          color="primary"
                        />
                    )}
                  label="Gum pain"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersGrinding}
                          onChange={() => setDentalCornersGrinding(!dentalCornersGrinding)}
                          color="primary"
                        />
                    )}
                  label="Grinding"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersDamagedTeeth}
                          onChange={() => setDentalCornersDamagedTeeth(!dentalCornersDamagedTeeth)}
                          color="primary"
                        />
                    )}
                  label="Damaged teeth"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersSore}
                          onChange={() => setDentalCornersSore(!dentalCornersSore)}
                          color="primary"
                        />
                    )}
                  label="Ulcers, lumps or sores"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersOldFillings}
                          onChange={() => setDentalCornersOldFillings(!dentalCornersOldFillings)}
                          color="primary"
                        />
                    )}
                  label="Old fillings"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersDentures}
                          onChange={() => setDentalCornersDentures(!dentalCornersDentures)}
                          color="primary"
                        />
                    )}
                  label="Dentures"
                />

                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dentalCornersLoose}
                          onChange={() => setDentalCornersLoose(!dentalCornersLoose)}
                          color="primary"
                        />
                    )}
                  label="Loose tooth"
                />
            </FormGroup>

            <Typography variant="h5">
                Where are you experiencing pain?
            </Typography>

            <FormGroup row>
                <Checkbox
                  checked={painTopRight}
                  onChange={() => setPainTopRight(!painTopRight)}
                  color="primary"
                />

                <Checkbox
                  checked={painTopCenter}
                  onChange={() => setPainTopCenter(!painTopCenter)}
                  color="primary"
                />

                <Checkbox
                  checked={painTopLeft}
                  onChange={() => setPainTopLeft(!painTopLeft)}
                  color="primary"
                />
            </FormGroup>

            <FormGroup row>
                <Checkbox
                  checked={painBottomRight}
                  onChange={() => setPainBottomRight(!painBottomRight)}
                  color="primary"
                />

                <Checkbox
                  checked={painBottomCenter}
                  onChange={() => setPainBottomCenter(!painBottomCenter)}
                  color="primary"
                />

                <Checkbox
                  checked={painBottomLeft}
                  onChange={() => setPainBottomLeft(!painBottomLeft)}
                  color="primary"
                />
            </FormGroup>
        </>
    )
}

Dental.propTypes = {
    brush: PropTypes.string.isRequired,
    setBrush: PropTypes.func.isRequired,
    floss: PropTypes.string.isRequired,
    setFloss: PropTypes.func.isRequired,
    visitDentist: PropTypes.string.isRequired,
    setVisitDentist: PropTypes.func.isRequired,
    comfortable: PropTypes.string.isRequired,
    setComfortable: PropTypes.func.isRequired,

    dentalCornersBreath: PropTypes.bool.isRequired,
    setDentalCornersBreath: PropTypes.func.isRequired,
    dentalCornersBleedingGum: PropTypes.bool.isRequired,
    setDentalCornersBleedingGum: PropTypes.func.isRequired,
    dentalCornersCosmetic: PropTypes.bool.isRequired,
    setDentalCornersCosmetic: PropTypes.func.isRequired,
    dentalCornersTeethPain: PropTypes.bool.isRequired,
    setDentalCornersTeethPain: PropTypes.func.isRequired,
    dentalCornersGumPain: PropTypes.bool.isRequired,
    setDentalCornersGumPain: PropTypes.func.isRequired,
    dentalCornersGrinding: PropTypes.bool.isRequired,
    setDentalCornersGrinding: PropTypes.func.isRequired,
    dentalCornersDamagedTeeth: PropTypes.bool.isRequired,
    setDentalCornersDamagedTeeth: PropTypes.func.isRequired,
    dentalCornersSore: PropTypes.bool.isRequired,
    setDentalCornersSore: PropTypes.func.isRequired,
    dentalCornersOldFillings: PropTypes.bool.isRequired,
    setDentalCornersOldFillings: PropTypes.func.isRequired,
    dentalCornersDentures: PropTypes.bool.isRequired,
    setDentalCornersDentures: PropTypes.func.isRequired,
    dentalCornersLoose: PropTypes.bool.isRequired,
    setDentalCornersLoose: PropTypes.func.isRequired,

    painTopRight: PropTypes.bool.isRequired,
    setPainTopRight: PropTypes.func.isRequired,
    painTopCenter: PropTypes.bool.isRequired,
    setPainTopCenter: PropTypes.func.isRequired,
    painTopLeft: PropTypes.bool.isRequired,
    setPainTopLeft: PropTypes.func.isRequired,
    painBottomRight: PropTypes.bool.isRequired,
    setPainBottomRight: PropTypes.func.isRequired,
    painBottomCenter: PropTypes.bool.isRequired,
    setPainBottomCenter: PropTypes.func.isRequired,
    painBottomLeft: PropTypes.bool.isRequired,
    setPainBottomLeft: PropTypes.func.isRequired,
}

export default Dental
