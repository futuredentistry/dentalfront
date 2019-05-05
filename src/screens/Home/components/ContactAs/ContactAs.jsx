import React from 'react'
// import ReactRouterPropTypes from 'react-router-prop-types'
import Typography from '@material-ui/core/Typography'
import FormGrid from 'ui/FormGrid'


const ContactAs = () => (
    <FormGrid>
        <Typography variant="h3">
            Please contact us and we'll take care
        </Typography>
    </FormGrid>
)

ContactAs.propTypes = {
    // history: ReactRouterPropTypes.history.isRequired,
}

export default ContactAs
