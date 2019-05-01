/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types, react/jsx-handler-names */

import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { makeStyles, useTheme } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import NoSsr from '@material-ui/core/NoSsr'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import FormHelperText from '@material-ui/core/FormHelperText'
import MenuItem from '@material-ui/core/MenuItem'

import FirebaseContext from 'modules/Firebase'

import './styles.scss'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    input: {
        display: 'flex',
        paddingTop: '11px',
        fontSize: 'inherit',
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
        overflow: 'hidden',
    },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        paddingTop: '10px',
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 99,
        marginTop: 0,
        left: 0,
        right: 0,
        padding: '2px',
    },
}))

function NoOptionsMessage(props) {
    return (
        <Typography
          color="textSecondary"
          className={props.selectProps.classes.noOptionsMessage}
          {...props.innerProps}
        >
            {props.children}
        </Typography>
    )
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />
}

function Control(props) {
    const value = props.getValue()[0]
    const error = props.selectProps.fieldError
    return (
        <TextField
          error={error}
          label="Which organisation are you part of?"
          value={value ? value.label : ''}
          margin="normal"
          variant="filled"
          InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
          {...props.selectProps.textFieldProps}
        />
    )
}

function Option(props) {
    return (
        <MenuItem
          buttonRef={props.innerRef}
          selected={props.isFocused}
          component="div"
          style={{
                fontWeight: props.isSelected ? 500 : 400,
                fontSize: 18,
                padding: 3,
                margin: '1%',
            }}
          {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    )
}

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    )
}

const components = {
    Control,
    Menu,
    NoOptionsMessage,
    Option,
}

const SelectOrganisation = ({ organisation, setOrganisation, validFormStep }) => {
    const firebase = useContext(FirebaseContext)
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        firebase.getOrganisationsCollection().then(
            (doc) => {
                if (doc.exists) {
                    // @ts-ignore
                    const organisations = Object.values(doc.data()).map(val => ({ value: val, label: val }))
                    setSuggestions(organisations)
                }
            },
        )
    }, [])

    const classes = useStyles()
    const theme = useTheme()
    const selectStyles = {
        input: base => ({
            ...base,
            color: theme.palette.text.primary,
            '& input': {
                font: 'inherit',
            },
        }),
    }


    return (
        <div className={classes.root}>
            <NoSsr>
                <Select
                  classes={classes}
                  styles={selectStyles}
                  options={suggestions}
                  components={components}
                  fieldError={validFormStep && organisation === ''}
                  value={
                        organisation !== '' && {
                            value: organisation,
                            label: organisation,
                        }
                    }
                  onChange={e => setOrganisation(e.value)}
                  placeholder=""
                />
            </NoSsr>
            {validFormStep && organisation === '' && <FormHelperText error>Please fill out this field</FormHelperText>}
        </div>
    )
}

export default SelectOrganisation
