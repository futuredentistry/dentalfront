/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types'

export const segment = PropTypes.shape({
    // Treatment
    concern: PropTypes.string.isRequired,
    treatment: PropTypes.string.isRequired,
    toothNumber: PropTypes.string.isRequired,
    // ImmageIssue
    dark: PropTypes.bool.isRequired,
    light: PropTypes.bool.isRequired,
    close: PropTypes.bool.isRequired,
    blurry: PropTypes.bool.isRequired,
    far: PropTypes.bool.isRequired,
    other: PropTypes.bool.isRequired,
})
