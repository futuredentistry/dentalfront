import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'

const Success = ({ onClick }) => {
    const { setDark, setShow } = useContext(HeaderFooterContext)
    useEffect(() => {
        setDark(true)
        setShow(true)
    }, [])
    return (
        <>
            <Typography variant="h4">
                Success!
            </Typography>
            <br />
            <Typography variant="body2">
                That wasn't so bad was it?
            </Typography>
            <br />
            <Typography variant="body2">
                Next someone at your organisation will take some pictures of your teeth.
            </Typography>
            <br />
            <br />
            <Typography variant="body2">
                <b>Did you know</b>
                {' '}
                that if you're brushing too hard you can damage your gums. Take it easy, your teeth are your friends not your foe.
            </Typography>
            <br />
            <Button variant="text" color="primary" onClick={() => onClick()}>
                Return to your account
            </Button>
        </>
    )
}

Success.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Success
