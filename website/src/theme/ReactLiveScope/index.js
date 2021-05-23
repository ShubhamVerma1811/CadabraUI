import React from 'react'
import {
  Button as ButtonExample,
  Input as InputExample,
} from '../../../../dist'

const ReactLiveScope = {
  React,
  ...React,
  Button: (props) => <ButtonExample {...props} />,
  Input: (props) => <InputExample {...props} />,
}

export default ReactLiveScope
