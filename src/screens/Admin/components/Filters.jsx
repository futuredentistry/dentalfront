// @ts-nocheck
import React, { useContext, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import Typography from '@material-ui/core/Typography';

import FirebaseContext from 'modules/Firebase';
import DateMultiPicker from 'ui/DateMultyPicker/DateMultiPicker';

import 'modules/styles/datePicker.scss'

const Filters = () => {
    const [date, setDate] = useState([null, null])
    const firebase = useContext(FirebaseContext)
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Typography variant='h4'>
                Filters
            </Typography>



            <div className="picker">
                <DateMultiPicker
                    utils={new DateFnsUtils()}
                    variant="filled"
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
            </div>

        </MuiPickersUtilsProvider>

    )
}

export default Filters
