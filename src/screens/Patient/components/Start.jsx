import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter'
import { UserFirstName } from 'utils/logonUser'
import Carousele from 'ui/Carousele'
import DeleteUser from 'ui/DeleteUser'

const Start = ({ startNewReport }) => {
    const { setDark, setShow } = useContext(HeaderFooterContext)
    useEffect(() => {
        setDark(true)
        setShow(true)
    }, [])
    return (
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

            <DeleteUser />
        </>
    )
}

Start.propTypes = {
    startNewReport: PropTypes.func.isRequired,
}

export default Start
