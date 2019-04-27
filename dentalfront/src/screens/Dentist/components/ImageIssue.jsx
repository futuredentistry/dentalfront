import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

import { segment } from 'modules/Dentist/props'

const ImageIssue = ({ segmentProps, setSegment, onClose }) => {
  const [starterProps, setStarterProps] = useState(null)
  useEffect(() => !starterProps && setStarterProps(segmentProps), [])
  return (
    <>
      <Typography variant="h4">
        Poor image quality?
      </Typography>

      <FormGroup>
        <FormControlLabel
          control={(
            <Checkbox
              checked={segmentProps.dark}
              onChange={e => setSegment({ ...segmentProps, ...{ dark: e.currentTarget.checked } })}
              color="primary"
            />
          )}
          label="Too dark"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={segmentProps.light}
              onChange={e => setSegment({ ...segmentProps, ...{ light: e.currentTarget.checked } })}
              color="primary"
            />
          )}
          label="Too light"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={segmentProps.close}
              onChange={e => setSegment({ ...segmentProps, ...{ close: e.currentTarget.checked } })}
              color="primary"
            />
          )}
          label="Too close"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={segmentProps.blurry}
              onChange={e => setSegment({ ...segmentProps, ...{ blurry: e.currentTarget.checked } })}
              color="primary"
            />
          )}
          label="Blurry"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={segmentProps.far}
              onChange={e => setSegment({ ...segmentProps, ...{ far: e.currentTarget.checked } })}
              color="primary"
            />
          )}
          label="Too far"
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={segmentProps.other}
              onChange={e => setSegment({ ...segmentProps, ...{ other: e.currentTarget.checked } })}
              color="primary"
            />
          )}
          label="Other"
        />
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        onClick={() => onClose()}
      >
        save
      </Button>

      <Button
        variant="text"
        color="primary"
        onClick={() => {
          onClose()
          setSegment(starterProps)
        }}
      >
        close without saving
      </Button>
    </>
  )
}

ImageIssue.propTypes = {
  onClose: PropTypes.func.isRequired,
  segmentProps: segment.isRequired,
  setSegment: PropTypes.func.isRequired,
}

export default ImageIssue
