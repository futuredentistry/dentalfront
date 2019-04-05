import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'

import * as ROUTES from 'modules/constants/routes'

const Home = ({ history }) => (
    <>
        Welcome to Beemo

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
          onClick={() => history.push(ROUTES.SIGNUP)}
        >
            Create an account
        </Button>
    </>
)

Home.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
}

export default Home
