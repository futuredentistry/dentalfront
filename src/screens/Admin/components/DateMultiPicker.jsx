import React, { useState, useRef } from 'react'
import { DatePicker } from 'material-ui-pickers'


export default function DateRangePicker({
    value,
    onChange,
    labelFunc,
    format,
    emptyLabel,
    autoOk,
    onClose,
    utils,
    ...props
}) {
    const [begin, setBegin] = useState(value[0])
    const [end, setEnd] = useState(value[1])
    const [hover, setHover] = useState(null)
    const picker = useRef()

    const min = Math.min(begin, end || hover)
    const max = Math.max(begin, end || hover)

    function renderDay(day, selectedDate, dayInCurrentMonth, dayComponent) {
        const style = {
            margin: 0,
            width: '40px'
        }

        if (day >= min && day <= max) {
            style.backgroundColor = '#3f51b5'
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
                    if (autoOk) {
                        onChange([begin, end].sort())
                        picker.current.close()
                    }
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

    return (
        <DatePicker
            {...props}
            value={begin}
            renderDay={renderDay}
            onClose={() => {
                onChange([begin, end].sort())
                // onClose()
            }}
            onChange={() => onChange([begin, end])}
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