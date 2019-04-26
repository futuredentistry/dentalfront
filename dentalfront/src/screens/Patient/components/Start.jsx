import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const Start = ({ startNewReport }) => (
    <>
        Patient

            <Button variant="contained" color="primary" onClick={startNewReport}>Create a new report</Button>
    </>
)

Start.propTypes = {
    startNewReport: PropTypes.func.isRequired,
}

export default Start
