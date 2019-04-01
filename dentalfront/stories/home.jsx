// @ts-nocheck
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { action } from '@storybook/addon-actions'
import { withViewport } from '@storybook/addon-viewport'
import Button from '@material-ui/core/Button'
import muiThemeDecorator from './muiThemeDecorator'


const stories = storiesOf('Buttons', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withViewport('iphonex'))
stories.addDecorator(muiThemeDecorator)
// stories.addDecorator(centered)

stories.add('Standard Button', () => (
  <Button variant="contained" color="primary" onClick={action()}>{text('Label', 'My Text')}</Button>
))
