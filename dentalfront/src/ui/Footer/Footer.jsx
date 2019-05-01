// @ts-nocheck
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

import * as ROUTES from 'modules/constants/routes'

import './style.scss'

const useStyles = makeStyles(() => ({
    whiteLink: {
        color: '#fff',
        textDecoration: 'underline',
        margin: '2%',
    },
    whiteText: {
        color: '#fff',
        margin: '1%',
    },
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <div className="footer_row">
            <Typography variant="h5" className={classes.whiteText}>
                Useful links
            </Typography>

            <Link component={RouterLink} variant="body2" to="/" className={classes.whiteLink}>
                what is beemo?
            </Link>

            <Link component={RouterLink} variant="body2" to="/" className={classes.whiteLink}>
                FAQ
            </Link>

            <Link component={RouterLink} variant="body2" to={ROUTES.PRIVACY_POLICY} className={classes.whiteLink}>
                privacy policy
            </Link>

            <Link component={RouterLink} variant="body2" to="/" className={classes.whiteLink}>
                contact us
            </Link>

            <br />
            <Typography variant="body2" className={classes.whiteText}>
                A product of Future Dentistry Australia Pty Ltd
            </Typography>

        </div>
    )
}

export default Footer
