// @ts-nocheck
import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NoSsr from '@material-ui/core/NoSsr'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'

import FirebaseContext from 'modules/Firebase';
import DateMultiPicker from 'ui/DateMultyPicker/DateMultiPicker';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

const useStyles = makeStyles(() => ({
    formGrid: {
        paddingLeft: '0.5%',
        paddingRight: '0.5%',
    },
    //
    paper: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        width: '100%',
    },
    hideCheck: {
        display: 'none',
    },
    button: {
        padding: 0,
        margin: 0,
        width: '100%'
    }
}))

const searchDefault = {
    treatment: [],
    concern: [],
    organisation: [],
    risk: [],
}

const Filters = () => {
    const classes = useStyles()

    const [date, setDate] = useState([null, null])

    const [search, setSearch] = useState(searchDefault)

    const firebase = useContext(FirebaseContext)

    const [concern, setConcern] = useState([])
    useEffect(() => {
        firebase.getConcernCollection().then(
            (doc) => {
                if (doc.exists) {
                    // @ts-ignore
                    const concern = Object.values(doc.data()).map(val => ({ value: val, label: val }))
                    setConcern(concern)
                }
            },
        )
    }, [])

    const [treatment, setTreatment] = useState([])
    useEffect(() => {
        const treatments = []
        firebase.getTreatmentCollection().then(
            (querySnapshot) => querySnapshot.forEach((doc) => treatments.push({ value: doc.id, label: doc.id })),
        ).then(() => setTreatment(treatments))
    }, [])


    const [organisation, setOrganisation] = useState([])
    useEffect(() => {
        firebase.getOrganisationsCollection().then(
            (doc) => {
                if (doc.exists) {
                    // @ts-ignore
                    const organisations = Object.values(doc.data()).map(val => ({ value: val, label: val }))
                    setOrganisation(organisations)
                }
            },
        )
    }, [])


    const [risk] = useState(['outstanding', 'good', 'average', 'poor'])


    // const [record, setRecord] = useState([])
    // useEffect(() => {
    //     const records = []
    //     firebase.getTreatmentCollection().then(
    //         (querySnapshot) => querySnapshot.forEach((doc) => {
    //             const data = doc.data()
    //             const fullName = `${capitalizeFirstLetter(data.firstName)} ${capitalizeFirstLetter(data.familyName)}`
    //             records.push({ id: doc.id, fullName, email: data.email, organisation: data.organisation, date:  })
    //         }),
    //     ).then(() => setTreatment(records))
    // }, [])

    return (
        <NoSsr>
            <Typography variant='h4'>
                Filters
            </Typography>

            <Button onClick={() => {
                const test = firebase.addReportSQL('Data')

                test()
                    .catch(error => console.log(error))
                    .then(result => console.log(result))

            }
            }
            >
                Click
            </Button>

            <Grid container spacing={0} direction="row" >
                <Grid item xs={1} />

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl >
                        <InputLabel>Organisation</InputLabel>
                        <Select
                            variant="filled"
                            multiple
                            displayEmpty
                            value={search.organisation}
                            onChange={e => setSearch({ ...search, ...{ organisation: e.target.value } })}
                            autoWidth
                        >
                            {
                                organisation.map(({ value, label }) =>
                                    <MenuItem key={value} value={value}>{label}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl>
                        <InputLabel>Concern</InputLabel>
                        <Select
                            variant="filled"
                            multiple
                            displayEmpty
                            value={search.concern}
                            onChange={e => setSearch({ ...search, ...{ concern: e.target.value } })}
                            autoWidth
                        >
                            {
                                concern.map(({ value, label }) =>
                                    <MenuItem key={value} value={value}>{label}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl>
                        <InputLabel>Treatment</InputLabel>
                        <Select
                            variant="filled"
                            multiple
                            displayEmpty
                            value={search.treatment}
                            onChange={e => setSearch({ ...search, ...{ treatment: e.target.value } })}
                            autoWidth
                        >
                            {
                                treatment.map(({ value, label }) =>
                                    <MenuItem key={value} value={value}>{label}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl>
                        <InputLabel>Risk</InputLabel>
                        <Select
                            variant="filled"
                            multiple
                            displayEmpty
                            value={search.risk}
                            onChange={e => setSearch({ ...search, ...{ risk: e.target.value } })}
                            autoWidth
                        >
                            {
                                risk.map(value =>
                                    <MenuItem key={value} value={value}>{capitalizeFirstLetter(value)}</MenuItem>
                                )
                            }
                            <MenuItem key={0} value={null}>None</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateMultiPicker
                            utils={new DateFnsUtils()}
                            keyboard={false}
                            label="Date range"
                            format="dd/MM/yyyy"
                            mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                            value={date}
                            onChange={setDate}
                            disableOpenOnEnter
                            animateYearScrolling={false}
                            maxDate={new Date()}
                            emptyLabel={''}
                            labelFunc={null}
                        />
                    </MuiPickersUtilsProvider>
                </Grid>

                <Grid item xs={1} />
            </Grid>
            <br />


            <Grid container spacing={0} direction="row" >
                <Grid item xs={1} />

                <Grid item xs={10} className={classes.formGrid}>

                    <Paper className={classes.paper} elevation={2}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            //   checked={}
                                            onChange={e => { }} />
                                    </TableCell>

                                    <TableCell align="center">id</TableCell>
                                    <TableCell align="center">patient name</TableCell>
                                    <TableCell align="center">email</TableCell>
                                    <TableCell align="center">organisation</TableCell>
                                    <TableCell align="center">date added</TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow hover>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            //   checked={}
                                            onChange={e => { }} />
                                    </TableCell>

                                    <TableCell align="center">{2}</TableCell>
                                    <TableCell align="center">{3}</TableCell>
                                    <TableCell align="center">{4}</TableCell>
                                    <TableCell align="center">{5}</TableCell>
                                    <TableCell align="center">{6}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            className={classes.button}
                                            color="primary"
                                            variant='text'
                                            onClick={() => { }}
                                        >
                                            see report
                                    </Button>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button
                                            className={classes.button}
                                            color="primary"
                                            variant='text'
                                            onClick={() => { }}
                                        >
                                            send report</Button>
                                    </TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </Paper>

                </Grid>
                <Grid item xs={1} />
            </Grid>
        </NoSsr >



    )
}

export default Filters
