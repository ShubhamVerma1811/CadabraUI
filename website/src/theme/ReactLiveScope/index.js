import React from 'react'
import { Button as ButtonExample } from '../../../../src/components/Button/Button'

const ReactLiveScope = {
  React,
  ...React,
  Button: (props) => <ButtonExample {...props} />,
}

export default ReactLiveScope
