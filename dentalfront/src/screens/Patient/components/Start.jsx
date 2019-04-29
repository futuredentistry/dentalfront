import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import { UserFirstName } from 'utils/logonUser'

const Start = ({ startNewReport }) => (
    <>
        <Typography variant="h4">
            Welcome
            {' '}
            {capitalizeFirstLetter(UserFirstName())}
        </Typography>

        <Button variant="contained" color="primary" onClick={startNewReport}>Create a new report</Button>
    </>
)

Start.propTypes = {
    startNewReport: PropTypes.func.isRequired,
}

export default Start
