// @ts-nocheck
import React from 'react'
import PropTypes from 'prop-types'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

const Lifestyle = ({
    smoker, setSmoker,
    softDrinks, setSoftDrinks,
    alcohol, setAlcohol,
}) => {
    console.log('')
    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Are you a social or regular smoker?</FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  name="smoker"
                  value={smoker}
                  onChange={e => setSmoker(e.currentTarget.value)}
                >
                    <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">How often do you drink soft drinks?</FormLabel>
                <RadioGroup
                  row
                  aria-label="Soft drinks"
                  name="soft drinks"
                  value={softDrinks}
                  onChange={e => setSoftDrinks(e.currentTarget.value)}
                >
                    <FormControlLabel labelPlacement="top" value="less than once a week" control={<Radio color="primary" />} label="Less than once a week" />
                    <FormControlLabel labelPlacement="top" value="every few days" control={<Radio color="primary" />} label="Every few days" />
                    <FormControlLabel labelPlacement="top" value="daily" control={<Radio color="primary" />} label="Daily" />
                </RadioGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormLabel component="legend">How often do you drink alcohol?</FormLabel>
                <RadioGroup
                  row
                  aria-label="Alcohol"
                  name="alcohol"
                  value={alcohol}
                  onChange={e => setAlcohol(e.currentTarget.value)}
                >
                    <FormControlLabel labelPlacement="top" value="less than once a week" control={<Radio color="primary" />} label="Less than once a week" />
                    <FormControlLabel labelPlacement="top" value="every few days" control={<Radio color="primary" />} label="Every few days" />
                    <FormControlLabel labelPlacement="top" value="daily" control={<Radio color="primary" />} label="Daily" />
                </RadioGroup>
            </FormControl>

        </>
    )
}

Lifestyle.propTypes = {
    alcohol: PropTypes.string.isRequired,
    setAlcohol: PropTypes.func.isRequired,
    smoker: PropTypes.string.isRequired,
    setSmoker: PropTypes.func.isRequired,
    softDrinks: PropTypes.string.isRequired,
    setSoftDrinks: PropTypes.func.isRequired,
}

export default Lifestyle
