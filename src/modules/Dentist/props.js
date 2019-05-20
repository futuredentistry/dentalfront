/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types'

export const propsTreatment = PropTypes.shape({
    concern: PropTypes.arrayOf(PropTypes.string.isRequired),
    treatment: PropTypes.arrayOf(PropTypes.string.isRequired),
    toothNumber: PropTypes.string.isRequired,
})

export const propsImageIssue = PropTypes.shape({
    dark: PropTypes.bool.isRequired,
    light: PropTypes.bool.isRequired,
    close: PropTypes.bool.isRequired,
    blurry: PropTypes.bool.isRequired,
    far: PropTypes.bool.isRequired,
    other: PropTypes.bool.isRequired,
})

export const propsSingleSegment = PropTypes.shape({
    treatment: propsTreatment,
    imageIssue: propsImageIssue,
})

export const defaultPropsTreatment = {
    concern: [],
    treatment: [],
    toothNumber: '',
}

export const defaultPropsImageIssue = {
    dark: false,
    light: false,
    close: false,
    blurry: false,
    far: false,
    other: false,
}

export const defaultPropsSingleSegment = {
    treatment: defaultPropsTreatment,
    imageIssue: defaultPropsImageIssue,
}

export const propsSegments = PropTypes.shape({
    'Top right': propsSingleSegment,
    'Top middle': propsSingleSegment,
    'Top left': propsSingleSegment,
    'Bottom right': propsSingleSegment,
    'Bottom middle': propsSingleSegment,
    'Bottom left': propsSingleSegment,
})

export const defaultPropsSegments = {
    'Top right': defaultPropsSingleSegment,
    'Top middle': defaultPropsSingleSegment,
    'Top left': defaultPropsSingleSegment,
    'Bottom right': defaultPropsSingleSegment,
    'Bottom middle': defaultPropsSingleSegment,
    'Bottom left': defaultPropsSingleSegment,
}