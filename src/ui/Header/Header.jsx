import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

import { HeaderFooterContext } from 'modules/HeaderFooter/context'
import FirebaseContext from 'modules/Firebase'
import { UserAuthorized } from 'utils/logonUser'
import WhiteLogo from './images/white_logo.svg'
import DarkBeemo from './images/dark_beemo.svg'
import DarkLogo from './images/dark_logo.svg'
import WhiteBeemo from './images/white_beemo.svg'

import './style.scss'

const Header = () => {
    const firebase = useContext(FirebaseContext)
    const { dark } = useContext(HeaderFooterContext)
    return (
        <div className={`header_row ${dark ? '' : 'white'}`}>
            <div className={`header_left_container ${dark ? '' : 'white'}`}>
                {dark && (
                    <Button variant="text" color="primary" component={Link} to="/">
                        home
                    </Button>
                )}
            </div>
            <div className={`header_middle_logo ${dark ? '' : 'white'}`}>
                <img src={dark ? DarkLogo : WhiteLogo} alt="Logo" />
            </div>
            <div className={`header_middle_name ${dark ? '' : 'white'}`}>
                <img src={!dark ? DarkBeemo : WhiteBeemo} alt="Logo" />
            </div>
            <div className={`header_right_container ${dark ? '' : 'white'}`}>
                { UserAuthorized() && dark && (
                    <Button variant="text" color="primary" component={Link} to="/" onClick={() => firebase.doSignOut()}>
                        log out
                    </Button>
                )}

            </div>
        </div>
    )
}

export default Header
