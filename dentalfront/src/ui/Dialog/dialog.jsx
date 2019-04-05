/* eslint-disable react/jsx-indent-props */
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import PopUp from '@material-ui/core/Dialog'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import './style.scss'

const Dialog = ({ children, onClose, open }) => (
  <PopUp
    open={open}
    onClose={onClose}
    fullWidth
    maxWidth="sm"
  >
    <div className="dialog_header_row">
      <div className="dialog_empty_container" />

      <div className="dialog_button_container">
        <IconButton aria-label="Close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
    </div>

    <Card>
      <CardContent>
        {children}
      </CardContent>

    </Card>
  </PopUp>
)

Dialog.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
}

Dialog.defaultProps = {
  children: null,
}

export default Dialog
