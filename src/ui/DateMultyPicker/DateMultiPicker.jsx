import React, { useState, useRef } from 'react'
import { DatePicker } from 'material-ui-pickers'

const DateRangePicker = ({
    value,
    onChange,
    labelFunc,
    format,
    emptyLabel,
    onClose,
    utils,
    ...props
}) => {
    const [begin, setBegin] = useState(value[0])
    const [end, setEnd] = useState(value[1])
    const [hover, setHover] = useState(null)
    const picker = useRef()

    const min = Math.min(begin, end || hover)
    const max = Math.max(begin, end || hover)

    const renderDay = (day, selectedDate, dayInCurrentMonth, dayComponent) => {
        const style = {
            margin: 0,
            width: '40px'
        }

        if (day >= min && day <= max) {
            style.backgroundColor = '#233D4D'
            style.color = 'white'
        }

        if (utils.isSameDay(day, min)) style.borderRadius = '50% 0 0 50%'
        else if (utils.isSameDay(day, max)) style.borderRadius = '0 50% 50% 0'
        else style.borderRadius = '0'

        return React.cloneElement(dayComponent, {
            onClick: e => {
                e.stopPropagation()
                if (!begin) setBegin(day)
                else if (!end) {
                    setEnd(day)

                } else {
                    setBegin(day)
                    setEnd(null)
                }
            },
            onMouseEnter: e => setHover(day),
            style
        })
    }

    const formatDate = date => utils.format(date, format || utils.dateFormat)

    const handleDropDates = () => {
        setBegin(null)
        setEnd(null)
        onChange([null, null])
    }

    return (
        <DatePicker
            {...props}
            onDismiss={() => handleDropDates()}
            onAccept={() => (begin && end) ? onChange([begin, end].sort()) : handleDropDates()}
            value={null}
            renderDay={renderDay}
            onClose={() => (!begin || !end) ? handleDropDates() : onChange([begin, end].sort())}
            onChange={() => { }}
            ref={picker}
            labelFunc={(date, invalid) =>
                labelFunc
                    ? labelFunc([begin, end].sort(), invalid)
                    : begin && end
                        ? `${formatDate(begin)} - ${formatDate(end)}`
                        : emptyLabel
            }
        />
    )
}

export default DateRangePicker