import React from 'react'
import { Input } from '../src/components/Input/Input'

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    label: 'Email',
    placeholder: 'Hey there',
  },
  argTypes: {
    bg: {
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (args) => <Input {...args} />

export const Underline = Template.bind({})
export const Filled = Template.bind({})
// export const Floating = Template.bind({});
export const Contained = Template.bind({})
export const Outlined = Template.bind({})

Underline.args = {
  variant: 'underline',
}

Filled.args = {
  variant: 'filled',
  isDisabled: true,
}

Contained.args = {
  variant: 'contained',
  label: 'Full Name',
}

Outlined.args = {
  variant: 'outlined',
}
