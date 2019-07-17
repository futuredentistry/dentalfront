// @ts-nocheck
import React, { useContext, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns'
import { format } from 'date-fns'
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
import Divider from '@material-ui/core/Divider'

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


    const [risk] = useState(['no', 'low', 'medium', 'high'])

    const sqlSearchData = () => {
        const searchReportSQL = firebase.searchReportSQL()
        const sortedDate = date.sort((a, b) => a - b)

        return searchReportSQL({
            organisation: search.organisation,
            risk: search.risk,
            caries: search.concern.includes('Caries') ? 1 : 0,
            gum_disease: search.concern.includes('Gum Disease') ? 1 : 0,
            wear: search.concern.includes('Wear') ? 1 : 0,
            trauma: search.concern.includes('Trauma') ? 1 : 0,
            cancer: search.concern.includes('Oral Cancer') ? 1 : 0,
            infection: search.concern.includes('Infection') ? 1 : 0,
            other: search.concern.includes('Other') ? 1 : 0,
            capping: search.treatment.includes('Capping') ? 1 : 0,
            crown: search.treatment.includes('Crown') ? 1 : 0,
            filling: search.treatment.includes('Filling') ? 1 : 0,
            root_canal: search.treatment.includes('Root Canal') ? 1 : 0,
            tooth_extraction: search.treatment.includes('Tooth Extraction') ? 1 : 0,
            date_start: format(new Date(sortedDate[0]), 'Y-MM-d'),
            date_finish: format(new Date(sortedDate[1]), 'Y-MM-d'),
        })
    }

    return (
        <NoSsr>
            <Typography variant='h4'>
                Filters
            </Typography>

            <Button onClick={() => {

                sqlSearchData()
                    .then(r => console.log(r))
                    .catch(e => console.log(e))

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
                            <MenuItem value={null}>All</MenuItem>
                            <Divider />
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
                            <MenuItem value={null}>All</MenuItem>
                            <Divider />
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
                            <MenuItem value={null}>All</MenuItem>
                            <Divider />
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
                            <MenuItem value={null}>All</MenuItem>
                            <Divider />
                            {
                                risk.map(value =>
                                    <MenuItem key={value} value={value}>{capitalizeFirstLetter(value)}</MenuItem>
                                )
                            }
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
