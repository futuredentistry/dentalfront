import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
// import Typography from '@material-ui/core/Typography'

import * as ROUTES from 'modules/constants/routes'


const ContactAs = ({ history }) => (
    <>
        Please contact as and we'll take care
    </>
)

ContactAs.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
}

export default ContactAs
