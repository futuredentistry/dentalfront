import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const CaptureContainer = ({ children }) => (
    <div className='capture_container'>
        <div className='capture_item'>
            {children}
        </div>
    </div>
)


CaptureContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default CaptureContainer
