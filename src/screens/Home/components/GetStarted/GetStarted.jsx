import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import * as ROUTES from 'modules/constants/routes'
import FormGrid from 'ui/FormGrid'

const GetStarted = ({ history }) => (
  <FormGrid>
    <Typography variant="h3">
      Welcome to Beemo
    </Typography>

    <Typography variant="body2">
      Beemo is here to make your trips to the dentist cheaper, better and more enjoyable.
    </Typography>

    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push(ROUTES.SIGNUP)}
    >
      I'm a Patient
    </Button>

    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push(ROUTES.CONTACTS_AS)}
    >
      I'm an Affiliate
    </Button>

    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push(ROUTES.CONTACTS_AS)}
    >
      I'm a Dentist
    </Button>
  </FormGrid>
)

GetStarted.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
}

export default GetStarted
