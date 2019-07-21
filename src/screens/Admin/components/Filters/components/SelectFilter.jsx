import React from 'react'
import PropTypes from 'prop-types'

import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import { makeStyles } from '@material-ui/styles'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const useStyles = makeStyles(() => ({
    allMenu: {
        marginBottom: '6px',
        backgroundColor: '#FE7F2D',
    }
}))

const SelectFilter = ({ label, onChange, search, defaultSearch }) => {
    const classes = useStyles()
    return (
        <FormControl >
            <InputLabel>{capitalizeFirstLetter(label)}</InputLabel>
            <Select
                variant="filled"
                multiple
                displayEmpty
                value={search}
                onChange={e => onChange(e, label, defaultSearch)}
                autoWidth
                // @ts-ignore
                renderValue={selected => selected.map(x => x).join(', ')}
            >
                <MenuItem value='all' className={classes.allMenu}>Select all</MenuItem>
                {
                    defaultSearch.map(value =>
                        <MenuItem key={value} value={value}>{capitalizeFirstLetter(value)}</MenuItem>
                    )
                }
            </Select>
        </FormControl>
    )
}

SelectFilter.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    search: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultSearch: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default SelectFilter
