import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import { propsTreatment, defaultPropsTreatment } from 'modules/Dentist/props'

const emptyTreatment = { concern: '', treatment: '', toothNumber: '' }

const ReportTreatment = ({ treatmentProps, setMethod }) => (
    <>
        <Grid
            container
            spacing={0}
            direction="row"
        >
            <Grid item xs={6}>
                <Button
                    variant="text"
                    color="primary"
                    disabled
                >
                    {capitalizeFirstLetter(treatmentProps.concern)}
                </Button>
            </Grid>
            <Grid item xs={6}>
                <Button
                    variant="text"
                    color="primary"
                    onClick={() => setMethod({ ...treatmentProps, ...emptyTreatment })}
                >
                    remove
                </Button>
            </Grid>
        </Grid>
        <Typography variant="body2">
            {capitalizeFirstLetter(treatmentProps.treatment)}
        </Typography>
    </>
)

ReportTreatment.propTypes = {
    treatmentProps: propsTreatment.isRequired,
    setMethod: PropTypes.func.isRequired,
}

export default ReportTreatment
