import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import * as ROUTES from 'modules/constants/routes'
import FormGrid from 'ui/FormGrid'

const Home = ({ history }) => (
    <FormGrid>
        <Typography variant="h3">
            Welcome to Beemo
        </Typography>

        <Typography variant="body2">
            Before we get started, let's get you logged in. If you're new, we'll create an account for you.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(ROUTES.SIGNIN)}
        >
            Login
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push(ROUTES.GET_STARTED)}
        >
            Create an account
        </Button>
    </FormGrid>
)

Home.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
}

export default Home
