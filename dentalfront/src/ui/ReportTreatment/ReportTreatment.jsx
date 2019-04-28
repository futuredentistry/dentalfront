import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import { segment } from 'modules/Dentist/props'

const emptyTreatment = { concern: '', treatment: '', toothNumber: '' }

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
                  onClick={() => setMethod({ ...segmentProps, ...emptyTreatment })}
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

ReportTreatment.propTypes = {
    segmentProps: segment.isRequired,
    setMethod: PropTypes.func.isRequired,
}

export default ReportTreatment
