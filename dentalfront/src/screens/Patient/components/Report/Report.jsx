import React, { useState } from 'react'
import PropTypes from 'prop-types'

import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

function steper(step) {
    switch (step) {
        case 0:
            return '0'
        case 1:
            return '1'
        case 2:
            return '2'
        case 3:
            return '3'
        case 4:
            return '4'
        default:
            return null
    }
}

const Report = (props) => {
    const maxStep = 4
    const [step, setStep] = useState(0)
    return (
        <div>
            <LinearProgress color="primary" variant="determinate" value={step * 100 / 4} />
            Report

            {steper(step)}

            <Grid
              container
              spacing={8}
              direction="row"
              justify="center"
              alignItems="center"
            >

                {
                    step < maxStep && (
                        <>
                            <Grid item xs={6}>
                                <Button
                                  variant="text"
                                  color="primary"
                                  disabled={step < 1}
                                  onClick={() => setStep(step - 1)}
                                >
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  onClick={() => setStep(step + 1)}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </>

                    )
                }

                {
                    step === maxStep && (
                        <Grid item xs={12}>
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => setStep(step + 1)}
                            >
                                Submit
                            </Button>
                        </Grid>
                    )
                }
            </Grid>

        </div>
    )
}

Report.propTypes = {

}

export default Report
