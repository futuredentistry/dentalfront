import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

const FormGrid = ({ children }) => (
    <Grid
      container
      spacing={0}
      direction="row"
    >
        <Grid item xs={1} sm={3} md={4} xl={4} lg={4} />
        <Grid item xs={10} sm={6} md={4} xl={4} lg={4}>
            {children}
        </Grid>
        <Grid item xs={1} sm={3} md={4} xl={4} lg={4} />
    </Grid>
)

FormGrid.propTypes = {
    children: PropTypes.node.isRequired,
}

export default FormGrid
