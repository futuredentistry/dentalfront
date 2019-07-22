import React from 'react'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { propsPainMap, methodsPainMap } from 'modules/Patient/props'

import BottomPainMap from './images/bottom_pain_map.jpg'
import TopPainMap from './images/top_pain_map.jpg'

const labelStyle = { flexBasis: '33%', flexGrow: 0 }

const PainMap = ({
    painTopRight, setPainTopRight,
    painTopCenter, setPainTopCenter,
    painTopLeft, setPainTopLeft,
    painBottomRight, setPainBottomRight,
    painBottomCenter, setPainBottomCenter,
    painBottomLeft, setPainBottomLeft,
}) => {
    return (
        <>

            <Typography variant="h5">
                Where are you experiencing pain?
            </Typography>
            <br />
            <FormGroup row style={{ flexWrap: 'inherit' }}>
                <FormControlLabel
                    labelPlacement="top"
                    style={labelStyle}
                    control={(
                        <Checkbox
                            checked={painTopRight}
                            onChange={() => setPainTopRight(!painTopRight)}
                            color="primary"
                        />
                    )}
                    label='Top right'
                />
                <FormControlLabel
                    labelPlacement="top"
                    style={labelStyle}
                    control={(
                        <Checkbox
                            checked={painTopCenter}
                            onChange={() => setPainTopCenter(!painTopCenter)}
                            color="primary"
                        />
                    )}
                    label='Top middle'
                />
                <FormControlLabel
                    labelPlacement="top"
                    style={labelStyle}
                    control={(
                        <Checkbox
                            checked={painTopLeft}
                            onChange={() => setPainTopLeft(!painTopLeft)}
                            color="primary"
                        />
                    )}
                    label='Top left'
                />
            </FormGroup>

            <img
                src={TopPainMap}
                alt=""
                style={{ width: '100%' }}
            />

            <FormGroup row style={{ flexWrap: 'inherit' }}>
                <FormControlLabel
                    labelPlacement="top"
                    style={labelStyle}
                    control={(
                        <Checkbox
                            checked={painBottomRight}
                            onChange={() => setPainBottomRight(!painBottomRight)}
                            color="primary"
                        />
                    )}
                    label='Bottom right'
                />

                <FormControlLabel
                    labelPlacement="top"
                    style={labelStyle}
                    control={(
                        <Checkbox
                            checked={painBottomCenter}
                            onChange={() => setPainBottomCenter(!painBottomCenter)}
                            color="primary"
                        />
                    )}
                    label='Bottom middle'
                />

                <FormControlLabel
                    labelPlacement="top"
                    style={labelStyle}
                    control={(
                        <Checkbox
                            checked={painBottomLeft}
                            onChange={() => setPainBottomLeft(!painBottomLeft)}
                            color="primary"
                        />
                    )}
                    label='Bottom left'
                />
            </FormGroup>

            <img
                src={BottomPainMap}
                alt=""
                style={{ width: '100%' }}
            />
        </>
    )
}

PainMap.propTypes = {
    ...propsPainMap,
    ...methodsPainMap
}

export default PainMap
