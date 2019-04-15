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
  breath, setbreath,
  bleedingGum, setbleedingGum,
  cosmetic, setcosmetic,
  teethPain, setteethPain,
  gumPain, setgumPain,
  grinding, setgrinding,
  damagedTeeth, setdamagedTeeth,
  sore, setsore,
  oldFillings, setoldFillings,
  dentures, setdentures,
  loose, setloose,
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
          style={{ flexWrap: 'inherit' }}
          aria-label="brush"
          name="brush"
          value={brush}
          onChange={e => setBrush(e.currentTarget.value)}
        >
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
            labelPlacement="top"
            value="less than once a week"
            control={<Radio color="primary" />}
            label="Less than once a week"
          />
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
            labelPlacement="top"
            value="every few days"
            control={<Radio color="primary" />}
            label="Every few days"
          />
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
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
          style={{ flexWrap: 'inherit' }}
          aria-label="floss"
          name="floss"
          value={floss}
          onChange={e => setFloss(e.currentTarget.value)}
        >
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
            labelPlacement="top"
            value="less than once a week"
            control={<Radio color="primary" />}
            label="Less than once a week"
          />
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
            labelPlacement="top"
            value="every few days"
            control={<Radio color="primary" />}
            label="Every few days"
          />
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
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
          style={{
            flexWrap: 'inherit',
          }}
          aria-label="visitDentist"
          name="visitDentist"
          value={visitDentist}
          onChange={e => setVisitDentist(e.currentTarget.value)}

        >
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
            labelPlacement="top"
            value="less than every 3 years"
            control={<Radio color="primary" />}
            label="Less than every 3 years"
          />
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
            labelPlacement="top"
            value="every 1-3 years"
            control={<Radio color="primary" />}
            label="Every 1-3 years"
          />
          <FormControlLabel
            style={{
              flexBasis: '33%',
              flexGrow: 0,
            }}
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
              checked={breath}
              onChange={() => setbreath(!breath)}
              color="primary"
            />
          )}
          label="Bad breath"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={bleedingGum}
              onChange={() => setbleedingGum(!bleedingGum)}
              color="primary"
            />
          )}
          label="Bleeding gums"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={cosmetic}
              onChange={() => setcosmetic(!cosmetic)}
              color="primary"
            />
          )}
          label="Cosmetic issues"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={teethPain}
              onChange={() => setteethPain(!teethPain)}
              color="primary"
            />
          )}
          label="Teeth pain"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={gumPain}
              onChange={() => setgumPain(!gumPain)}
              color="primary"
            />
          )}
          label="Gum pain"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={grinding}
              onChange={() => setgrinding(!grinding)}
              color="primary"
            />
          )}
          label="Grinding"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={damagedTeeth}
              onChange={() => setdamagedTeeth(!damagedTeeth)}
              color="primary"
            />
          )}
          label="Damaged teeth"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={sore}
              onChange={() => setsore(!sore)}
              color="primary"
            />
          )}
          label="Ulcers, lumps or sores"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={oldFillings}
              onChange={() => setoldFillings(!oldFillings)}
              color="primary"
            />
          )}
          label="Old fillings"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={dentures}
              onChange={() => setdentures(!dentures)}
              color="primary"
            />
          )}
          label="Dentures"
        />

        <FormControlLabel
          control={(
            <Checkbox
              checked={loose}
              onChange={() => setloose(!loose)}
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

  breath: PropTypes.bool.isRequired,
  setbreath: PropTypes.func.isRequired,
  bleedingGum: PropTypes.bool.isRequired,
  setbleedingGum: PropTypes.func.isRequired,
  cosmetic: PropTypes.bool.isRequired,
  setcosmetic: PropTypes.func.isRequired,
  teethPain: PropTypes.bool.isRequired,
  setteethPain: PropTypes.func.isRequired,
  gumPain: PropTypes.bool.isRequired,
  setgumPain: PropTypes.func.isRequired,
  grinding: PropTypes.bool.isRequired,
  setgrinding: PropTypes.func.isRequired,
  damagedTeeth: PropTypes.bool.isRequired,
  setdamagedTeeth: PropTypes.func.isRequired,
  sore: PropTypes.bool.isRequired,
  setsore: PropTypes.func.isRequired,
  oldFillings: PropTypes.bool.isRequired,
  setoldFillings: PropTypes.func.isRequired,
  dentures: PropTypes.bool.isRequired,
  setdentures: PropTypes.func.isRequired,
  loose: PropTypes.bool.isRequired,
  setloose: PropTypes.func.isRequired,

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
