import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

import { segment } from 'modules/Dentist/props'
import ReportTreatment from './ReportTreatment'

const Report = ({
    topRight, setTopRight,
    topMiddle, setTopMiddle,
    topLeft, setTopLeft,
    bottomRight, setBottomRight,
    bottomMiddle, setBottomMiddle,
    bottomLeft, setBottomLeft,
    summaryReview, setSummaryReview,
    overallHealth, setOverallHealth,
    risk, setRisk,
}) => {
    console.log('risk', risk)
    const treatmentSegments = [
        { segmentProps: topRight, setMethod: setTopRight },
        { segmentProps: topMiddle, setMethod: setTopMiddle },
        { segmentProps: topLeft, setMethod: setTopLeft },
        { segmentProps: bottomRight, setMethod: setBottomRight },
        { segmentProps: bottomMiddle, setMethod: setBottomMiddle },
        { segmentProps: bottomLeft, setMethod: setBottomLeft },
    ]
    return (
        <>
            {
                treatmentSegments.map(treatment => treatment.segmentProps
                    && treatment.segmentProps.concern !== ''
                    && (
                        <div key={treatment.concern}>
                            <ReportTreatment {...treatment} />
                        </div>
                    ))
            }

            <FormControl>
                <InputLabel>Overall, what is the state of their oral health</InputLabel>
                <Select
                  value={risk}
                  onChange={e => setRisk(e.target.value)}
                  input={<Input />}
                  autoWidth
                >
                    <MenuItem value="outstanding">Outstanding - Nothing wrong, come back in 3 months</MenuItem>
                    <MenuItem value="good">Good - Nothing major but a few suggestions</MenuItem>
                    <MenuItem value="average">Average - Treatments required</MenuItem>
                    <MenuItem value="poor">Poor - Major treatments required</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

Report.propTypes = {
    topRight: segment.isRequired,
    setTopRight: PropTypes.func.isRequired,
    topMiddle: segment.isRequired,
    setTopMiddle: PropTypes.func.isRequired,
    topLeft: segment.isRequired,
    setTopLeft: PropTypes.func.isRequired,
    bottomRight: segment.isRequired,
    setBottomRight: PropTypes.func.isRequired,
    bottomMiddle: segment.isRequired,
    setBottomMiddle: PropTypes.func.isRequired,
    bottomLeft: segment.isRequired,
    setBottomLeft: PropTypes.func.isRequired,

    summaryReview: PropTypes.string.isRequired,
    setSummaryReview: PropTypes.func.isRequired,
    overallHealth: PropTypes.string.isRequired,
    setOverallHealth: PropTypes.func.isRequired,
    risk: PropTypes.string.isRequired,
    setRisk: PropTypes.func.isRequired,
}

export default Report
