// @ts-nocheck
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { withViewport } from '@storybook/addon-viewport'
import Typography from '@material-ui/core/Typography'
import muiThemeDecorator from './muiThemeDecorator'


const stories = storiesOf('Buttons', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withViewport('iphonex'))
stories.addDecorator(muiThemeDecorator)
// stories.addDecorator(centered)

stories.add('Typography', () => (
  <>
    <Typography variant="h1">
      {text('Label', 'H1 my text')}
    </Typography>
    <Typography variant="h2">
      {text('Label', 'H2 my text')}
    </Typography>
    <Typography variant="h3">
      {text('Label', 'H3 my text')}
    </Typography>
    <Typography variant="h4">
      {text('Label', 'H4 my text')}
    </Typography>
    <Typography variant="body">
      {text('Label', 'Body my text')}
    </Typography>
  </>
))
