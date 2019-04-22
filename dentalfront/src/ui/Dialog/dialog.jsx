/* eslint-disable react/jsx-indent-props */
import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import PopUp from '@material-ui/core/Dialog'

import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

import './style.scss'

const Dialog = ({
  children, onClose, open, showClose,
}) => (
    <PopUp
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <div className="dialog_header_row">
        <div className="dialog_empty_container" />

        {showClose && (
          <div className="dialog_button_container">
            <IconButton aria-label="Close" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </div>
        )}
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
  showClose: PropTypes.bool,
}

Dialog.defaultProps = {
  children: null,
  showClose: true,
}

export default Dialog
