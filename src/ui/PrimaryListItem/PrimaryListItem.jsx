import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const PrimaryListItem = ({ primary }) => (
    <ListItem>
        <ListItemText
          primary={primary}
        />
    </ListItem>
)

PrimaryListItem.propTypes = {
    primary: PropTypes.node,
}

PrimaryListItem.defaultProps = {
    primary: null,
}

export default PrimaryListItem
