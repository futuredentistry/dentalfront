import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ReactRouterPropTypes from 'react-router-prop-types'
import Button from '@material-ui/core/Button'

import FirebaseContext from 'modules/Firebase'
import WhiteLogo from './images/white_logo.svg'
import DarkBeemo from './images/dark_beemo.svg'
import DarkLogo from './images/dark_logo.svg'
import WhiteBeemo from './images/white_beemo.svg'

import './style.scss'

const Header = ({
    gradient,
}) => {
    const firebase = useContext(FirebaseContext)
    return (
        <div className={`header_row ${gradient ? 'gradient' : ''}`}>
            <div className="header_left_container">
                <Button variant="text" color="primary" component={Link} to="/">
                    home
                </Button>
            </div>
            <div className="header_middle_logo">
                <img src={DarkLogo} alt="Logo" />
            </div>
            <div className="header_middle_name">
                <img src={WhiteBeemo} alt="Logo" />
            </div>
            <div className="header_right_container">
                <Button variant="text" color="primary" component={Link} to="/" onClick={() => firebase.doSignOut()}>
                    log out
                </Button>

            </div>
        </div>
    )
}

Header.propTypes = {
    gradient: PropTypes.bool.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
    showButton: PropTypes.bool.isRequired,
    historyLink: PropTypes.string,
}

Header.defaultProps = {
    historyLink: null,
}

export default Header
