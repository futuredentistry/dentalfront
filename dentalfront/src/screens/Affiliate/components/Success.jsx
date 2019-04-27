import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const Success = ({ patientFirstName, selectNext }) => (
    <>
        <Typography variant="h4">
            Thank you!
        </Typography>

        <Typography variant="body2">
            {capitalizeFirstLetter(patientFirstName)}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={selectNext}
        >
            select next
        </Button>
    </>
)

Success.propTypes = {
    patientFirstName: PropTypes.string,
    selectNext: PropTypes.func.isRequired,
}

Success.defaultProps = {
    patientFirstName: null,
}

export default Success
