import React from 'react'
import { Button, ButtonProps } from '../src/components/Button/Button'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    label: 'Button',
  },
  argTypes: {
    bg: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (args: ButtonProps) => <Button {...args} />

export const Contained = Template.bind({})
export const Ghost = Template.bind({})
export const Text = Template.bind({})

Contained.args = {
  variant: 'contained',
}

Ghost.args = {
  variant: 'ghost',
}

Text.args = {
  variant: 'text',
}
