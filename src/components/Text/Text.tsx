import React, { ReactNode } from 'react'
import { GlobalProps } from '../../config/theme'

export type TextProps = GlobalProps & {
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  p?: boolean
  b?: boolean
  i?: boolean
  a?: boolean
  children?: ReactNode
}

export const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  b,
  i,
  a,
  children,
}: TextProps) => {
  if (h1) {
    return <h1>{children}</h1>
  } else if (h2) {
    return <h2>{children}</h2>
  } else if (h3) {
    return <h3>{children}</h3>
  } else if (h4) {
    return <h4>{children}</h4>
  } else if (h5) {
    return <h5>{children}</h5>
  }
}
