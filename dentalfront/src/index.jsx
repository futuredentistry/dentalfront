import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'
import App from 'App'

import MiuiTheme from 'modules/MiuiTheme'

import './style.scss'

// @ts-ignore
const theme = createMuiTheme(MiuiTheme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
)
