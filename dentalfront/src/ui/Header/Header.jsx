import React from 'react'
import PropTypes from 'prop-types'
import ReactRouterPropTypes from 'react-router-prop-types'

import WhiteLogo from './images/white_logo.svg'
import DarkBeemo from './images/dark_beemo.svg'
import DarkLogo from './images/dark_logo.svg'
import WhiteBeemo from './images/white_beemo.svg'
import './style.scss'

const Header = ({
    gradient,
}) => (
        <div className={`header_row ${gradient ? 'gradient' : ''}`}>
            <div className="header_left_container">
                111
            </div>
            <div className="header_middle_logo">
                <img src={DarkLogo} alt="Logo" />
            </div>
            <div className="header_middle_name">
                <img src={WhiteBeemo} alt="Logo" />
            </div>
            <div className="header_right_container">33</div>
        </div>
    )

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
