import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

import { segment } from 'modules/Dentist/props'
import ReportTreatment from 'ui/ReportTreatment'
import Eclipse from 'ui/MenuItemEclipse'

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
                        <div key={treatment.segmentProps.concern}>
                            <ReportTreatment {...treatment} />
                        </div>
                    ))
            }

            <br />
            <FormControl>
                <InputLabel>Overall, what is the state of their oral health</InputLabel>
                <Select
                  variant="filled"
                  value={overallHealth}
                  onChange={e => setOverallHealth(e.target.value)}
                  input={<Input />}
                  autoWidth
                >
                    <MenuItem value="outstanding"><Eclipse text="Outstanding - Nothing wrong, come back in 3 months" /></MenuItem>
                    <MenuItem value="good"><Eclipse text="Good - Nothing major but a few suggestions" /></MenuItem>
                    <MenuItem value="average"><Eclipse text="Average - Treatments required" /></MenuItem>
                    <MenuItem value="poor"><Eclipse text="Poor - Major treatments required" /></MenuItem>
                </Select>
            </FormControl>

            <Typography variant="h4">
                Summary
            </Typography>

            <TextField
              placeholder="Overall what is the state of the patient oral health? Any recommendations you'd like to pass on?"
              value={summaryReview}
              onChange={e => setSummaryReview(e.currentTarget.value)}
              margin="normal"
              variant="filled"
              multiline
              rows={6}
            />

            <FormControl>
                <InputLabel>
                    What risk profile do you feel this patient's oral health is at?
                </InputLabel>
                <Select
                  variant="filled"
                  value={risk}
                  onChange={e => setRisk(e.target.value)}
                  input={<Input />}
                  autoWidth
                >
                    <MenuItem value="no"><Eclipse text="No risk - The patient has good oral health" /></MenuItem>
                    <MenuItem value="high"><Eclipse text="Medium risk - there are items that left untreated will causes serious distress" /></MenuItem>
                    <MenuItem value="medium"><Eclipse text="Medium risk - there are items that left untreated will causes serious distress" /></MenuItem>
                    <MenuItem value="low"><Eclipse text="Low risk - The patient has some corrective measures to implement" /></MenuItem>
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