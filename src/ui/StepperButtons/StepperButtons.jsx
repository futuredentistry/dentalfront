import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const StepperButtons = ({
    disabledBackButton,
    showSubmitButton,
    showNextButton,
    disabledNextButton,
    showButtonsGrid,
    increaseOnClick,
    decreaseOnClick,
    onSubmit,
    disabledSubmit,
}) => {
    const BackButton = () => (
        <Button
          variant="text"
          color="primary"
          disabled={disabledBackButton}
          onClick={() => decreaseOnClick()}
        >
            Back
        </Button>
    )

    const NextButton = () => (
        <Button
          variant="contained"
          color="primary"
          disabled={disabledNextButton}
          onClick={() => increaseOnClick()}
        >
            Next
        </Button>
    )

    const SubmitButton = () => (
        <Button
          variant="contained"
          color="primary"
          disabled={disabledSubmit}
          onClick={() => {
                increaseOnClick()
                onSubmit()
            }
            }
        >
            Submit
        </Button>
    )

    return (
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignItems="center"
        >
            {
                showButtonsGrid && (
                    <>
                        <Grid item xs={6}>
                            <BackButton />
                        </Grid>
                        <Grid item xs={6}>
                            {showNextButton && <NextButton />}
                            {showSubmitButton && <SubmitButton />}
                        </Grid>
                    </>
                )
            }
        </Grid>
    )
}

StepperButtons.propTypes = {
    disabledBackButton: PropTypes.bool.isRequired,
    showSubmitButton: PropTypes.bool.isRequired,
    showNextButton: PropTypes.bool.isRequired,
    disabledNextButton: PropTypes.bool.isRequired,
    showButtonsGrid: PropTypes.bool.isRequired,
    increaseOnClick: PropTypes.func.isRequired,
    decreaseOnClick: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    disabledSubmit: PropTypes.bool.isRequired,
}

export default StepperButtons
