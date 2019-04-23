import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import { segment } from 'modules/Dentist/props'

const emptyTreatment = {
    concern: '',
    treatment: '',
    toothNumber: '',
}

const ReportTreatment = ({ segmentProps, setMethod }) => (
    <>
        <Grid
          container
          spacing={0}
          direction="row"
        >
            <Grid item xs={6}>
                <Typography variant="body2">
                    {capitalizeFirstLetter(segmentProps.concern)}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Button
                  variant="text"
                  color="primary"
                  onClick={() => setMethod({ ...segmentProps, ...emptyTreatment })
                    }
                >
                    remove
                </Button>
            </Grid>
        </Grid>
        <Typography variant="body2">
            {capitalizeFirstLetter(segmentProps.treatment)}
        </Typography>
    </>

)

const Report = ({
    topRight, setTopRight,
    topMiddle, setTopMiddle,
    topLeft, setTopLeft,
    bottomRight, setBottomRight,
    bottomMiddle, setBottomMiddle,
    bottomLeft, setBottomLeft,
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
                treatmentSegments.map((treatment, i) => treatment.segmentProps
                    && treatment.segmentProps.concern !== ''
                    && (
                        <div key={i}>
                            <ReportTreatment {...treatment} />
                        </div>
                    ))
            }
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
}

export default Report
