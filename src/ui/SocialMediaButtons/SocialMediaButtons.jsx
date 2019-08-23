import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Facebook from './icons/icons8-facebook.svg'
import Gmail from './icons/google-icon.svg'

import './styles.scss'

const SocialMediaButtons = ({ showGmail, showFacebook, onClickFacebook, onClickGmail }) => {
    return (
        <div className='social_row'>
            <div className='social_container'>
                {showFacebook && (
                    <IconButton onClick={() => onClickFacebook()}>
                        <img src={Facebook} alt="icon" />
                    </IconButton>)}

                {showGmail && (
                    <IconButton onClick={() => onClickGmail()}>
                        <img src={Gmail} alt="icon" />
                    </IconButton>)
                }
            </div>
        </div>
    )
}

SocialMediaButtons.propTypes = {
    showGmail: PropTypes.bool.isRequired,
    showFacebook: PropTypes.bool.isRequired,
    onClickFacebook: PropTypes.func.isRequired,
    onClickGmail: PropTypes.func.isRequired,

}

export default SocialMediaButtons
