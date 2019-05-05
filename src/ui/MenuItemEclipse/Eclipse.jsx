import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Eclipse = ({ text }) => (
    <Typography
      variant="body2"
      style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textAlign: 'left',
            paddingLeft: '12px',
        }}
    >
        {text}
    </Typography>
)

Eclipse.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Eclipse
