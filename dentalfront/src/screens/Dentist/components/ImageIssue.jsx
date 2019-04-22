import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'

const ImageIssue = ({ onClose, setImgProps }) => {
    const [dark, setDark] = useState(false)
    const [light, setLight] = useState(false)
    const [close, setClose] = useState(false)
    const [blurry, setBlurry] = useState(false)
    const [far, setFar] = useState(false)
    const [other, setOther] = useState(false)
    return (
        <>
            <Typography variant="h4">
                Poor image quality?
            </Typography>

            <FormGroup>
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={dark}
                          onChange={() => setDark(!dark)}
                          color="primary"
                        />
                    )}
                  label="Too dark"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={light}
                          onChange={() => setLight(!light)}
                          color="primary"
                        />
                    )}
                  label="Too light"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={close}
                          onChange={() => setClose(!close)}
                          color="primary"
                        />
                    )}
                  label="Too close"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={blurry}
                          onChange={() => setBlurry(!blurry)}
                          color="primary"
                        />
                    )}
                  label="Blurry"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={far}
                          onChange={() => setFar(!far)}
                          color="primary"
                        />
                    )}
                  label="Too far"
                />
                <FormControlLabel
                  control={(
                        <Checkbox
                          checked={other}
                          onChange={() => setOther(!other)}
                          color="primary"
                        />
                    )}
                  label="Other"
                />
            </FormGroup>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                    const newProps = {
                        ...(dark && { dark }),
                        ...(light && { light }),
                        ...(close && { close }),
                        ...(blurry && { blurry }),
                        ...(far && { far }),
                        ...(other && { other }),
                    }
                    setImgProps(newProps)
                    onClose()
                }
                }
            >
                Save
            </Button>
        </>
    )
}


ImageIssue.propTypes = {
    onClose: PropTypes.func.isRequired,
    setImgProps: PropTypes.func.isRequired,
}

export default ImageIssue
