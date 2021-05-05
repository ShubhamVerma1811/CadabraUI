import React from 'react'
import { Card } from '../src/components/Card/Card'

export default {
  title: 'Surface/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Basic = Template.bind({})
export const WithImage = Template.bind({})

Basic.args = {
  children: (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga error
      inventore, tempora hic quod facere quae sapiente. Iste non reiciendis a at
      expedita.
    </p>
  ),
}

WithImage.args = {
  title: 'This is the example',
  headerImage: {
    src: 'https://dummyimage.com/580x50',
    alt: 'Dummy Image',
  },
  children: (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto numquam
        pariatur esse iste voluptates nam eius soluta nemo quam, odit at
        possimus suscipit.
      </p>
      <Card.Footer>
        <Card.Button label='Action 1' variant='contained' />
        <Card.Button label='Action 1' variant='contained' />
        <Card.Button label='Action 1' variant='contained' />
      </Card.Footer>
    </>
  ),
}
