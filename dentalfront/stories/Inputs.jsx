// @ts-nocheck
import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { withViewport } from '@storybook/addon-viewport'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FilledInput from '@material-ui/core/FilledInput'
import Radio from '@material-ui/core/Radio'
import muiThemeDecorator from './muiThemeDecorator'


const stories = storiesOf('Inputs', module)
stories.addDecorator(withKnobs)
stories.addDecorator(withViewport('iphonex'))
stories.addDecorator(muiThemeDecorator)
// stories.addDecorator(centered)

stories.add('TextField', () => (
  <form className="">

    <TextField
      label="Name"
      value={text('Input1', 'simple text')}
      margin="normal"
      variant="filled"
    />

  </form>
))
  .add('Radio button ', () => (
    <FormGroup>

      <FormControlLabel
        control={(
          <Radio
            checked
            value="d"
            color="default"
            name="radio-button-demo"
          />
        )}
        label="Yes"
      />

      <FormControlLabel
        control={(
          <Radio
            checked={false}
            value="d"
            color="default"
            name="radio-button-demo"
          />
        )}
        label="No"
      />
    </FormGroup>


  ))
  .add('Checkbox', () => (
    <FormGroup>
      <FormControlLabel
        control={(
          <Checkbox
            checked
            value="checkedB"
            color="primary"
          />
        )}
        label="Primary"
      />
      <FormControlLabel
        control={(
          <Checkbox
            checked={false}
            value="checkedB"
            color="primary"
          />
        )}
        label="Primary"
      />
    </FormGroup>
  ))
  .add('Checkbox', () => (
    <FormControl variant="filled">
      <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
      <Select
        native
        value={10}
        input={<FilledInput name="age" id="filled-age-native-simple" />}
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  ))
