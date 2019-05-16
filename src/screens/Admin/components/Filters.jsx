// @ts-nocheck
import React, { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import FirebaseContext from 'modules/Firebase';
import DateMultiPicker from 'ui/DateMultyPicker/DateMultiPicker';
import Eclipse from 'ui/MenuItemEclipse';

const useStyles = makeStyles(() => ({
    formGrid: {
        paddingLeft: '0.5%',
        paddingRight: '0.5%',
    },
}))

const Filters = () => {
    const [date, setDate] = useState([null, null])
    const classes = useStyles();
    const firebase = useContext(FirebaseContext)
    return (
        <>
            <Typography variant='h4'>
                Filters
            </Typography>

            <Grid container spacing={0} direction="row" >
                <Grid item xs={1} />

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl >
                        <InputLabel>Organisation</InputLabel>
                        <Select
                            variant="filled"
                            multiple
                            value={[]}
                            onChange={e => { }}
                            input={<Input />}
                            autoWidth
                        >
                            <MenuItem value="outstanding"><Eclipse text="m" /></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl>
                        <InputLabel>Concern</InputLabel>
                        <Select
                            variant="filled"
                            multiple
                            value={[]}
                            onChange={e => { }}
                            input={<Input />}
                            autoWidth
                        >
                            <MenuItem value="outstanding"><Eclipse text="m" /></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl>
                        <InputLabel>Treatment</InputLabel>
                        <Select
                            variant="filled"
                            multiple
                            value={[]}
                            onChange={e => { }}
                            input={<Input />}
                            autoWidth
                        >
                            <MenuItem value="outstanding"><Eclipse text="m" /></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <FormControl>
                        <InputLabel>Risk</InputLabel>
                        <Select
                            multiple
                            value={[]}
                            onChange={e => { }}
                            input={<Input />}
                            autoWidth
                        >
                            <MenuItem value="outstanding"><Eclipse text="m" /></MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={2} className={classes.formGrid}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateMultiPicker
                            utils={new DateFnsUtils()}
                            keyboard={false}
                            label="Date range"
                            format="MM/dd/yyyy"
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

        </>



    )
}

export default Filters
