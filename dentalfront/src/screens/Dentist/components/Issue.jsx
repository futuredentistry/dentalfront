import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Issue = (props) => {
    console.log(props)
    return (
        <>
            <Typography variant="h4">
                Which concern is this?
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => { }}
            >
                Save
            </Button>

        </>
    )
}

Issue.propTypes = {


}

export default Issue
