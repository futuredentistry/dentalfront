import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import { UserFirstName } from 'utils/logonUser'
import Carousele from 'ui/Carousele'

const Start = ({ startNewReport }) => (
    <>
        <Typography variant="h4">
            Welcome
            {' '}
            {capitalizeFirstLetter(UserFirstName())}
        </Typography>
        <br />
        <Typography variant="body2">
            Before we get a look at those teeth we have a few questions for you.
        </Typography>
        <br />

        <Typography variant="body2">
            This will usually take between 5-10 minutes but there’s no rush.
        </Typography>
        <br />

        <Carousele />

        <Button variant="contained" color="primary" onClick={startNewReport}>Create a new report</Button>
    </>
)

Start.propTypes = {
    startNewReport: PropTypes.func.isRequired,
}

export default Start
