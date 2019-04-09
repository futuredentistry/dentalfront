import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from 'App'

import MiuiTheme from 'modules/MiuiTheme'

import './style.scss'

// @ts-ignore
const theme = createMuiTheme(MiuiTheme)


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'),
)
