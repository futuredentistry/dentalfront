import React from 'react'
import Typography from '@material-ui/core/Typography'

const Success = () => (
    <>
        <Typography variant="h4">
            Success!
        </Typography>

        <Typography variant="body2">
            That wasn't so bad was it? Next we'll get some pictures of your teeth!
        </Typography>

        <br />
        <br />
        <Typography variant="body2">
            <b>Did you know</b>
            {' '}
            that if you're brushing too hard you can damage your gums. Take it easy, your teeth are your friends not your foe.
        </Typography>
    </>
)

export default Success
