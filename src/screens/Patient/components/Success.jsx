import React, { useContext, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'
import FirebaseContext from 'modules/Firebase'

const Success = () => {
    const firebase = useContext(FirebaseContext)
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

            <Typography variant="body2">
                That wasn't so bad was it? Next we'll get some pictures of your teeth!
            </Typography>
            <br />
            <br />
            <Button variant="contained" color="primary" component={Link} to="/" onClick={() => firebase.doSignOut()}>
                log out
            </Button>
            <br />
            <br />
            <Typography variant="body2">
                <b>Did you know</b>
                {' '}
                that if you're brushing too hard you can damage your gums. Take it easy, your teeth are your friends not your foe.
            </Typography>
        </>
    )
}

export default Success
