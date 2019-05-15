import React, { useContext, useState } from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from 'material-ui-pickers'
import { DatePicker } from 'material-ui-pickers'
import Typography from '@material-ui/core/Typography';

import FirebaseContext from 'modules/Firebase';
import DateMultiPicker from './DateMultiPicker';

import 'modules/styles/datePicker.scss'

const Filters = () => {
    const [startDate, setStartDate] = useState(null)
    const [date, setDate] = useState([new Date(), new Date()])
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
                    label="Start date"
                    format="MM/dd/yyyy"
                    mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
                    value={date}
                    onChange={setDate}
                    disableOpenOnEnter
                    animateYearScrolling={false}
                    maxDate={new Date()}
                    emptyLabel={'Set date range'}
                // labelFunc={() => 'fdfdfdfdf'}
                />
            </div>

        </MuiPickersUtilsProvider>

    )
}

export default Filters
