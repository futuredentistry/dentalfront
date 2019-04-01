// @ts-nocheck
import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import MiuiTheme from 'modules/MiuiTheme'

const theme = createMuiTheme(MiuiTheme)

const muiThemeDecorator = story => (
    <MuiThemeProvider theme={theme}>
        {story()}
    </MuiThemeProvider>
)

export default muiThemeDecorator
