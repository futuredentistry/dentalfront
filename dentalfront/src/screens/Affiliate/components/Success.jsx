import React from 'react'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'

const Success = ({ patientFirstName, selectNext }) => (
    <>
        <Typography variant="h4">
            Well done!
        </Typography>

        <Typography variant="body2">
            That's all the images we need for
            {' '}
            {capitalizeFirstLetter(patientFirstName)}
            . You can now let them know that a dental report will be completed for them an emailed to them.
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
