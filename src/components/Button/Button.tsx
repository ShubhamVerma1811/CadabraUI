import React, { MouseEventHandler, ReactNode } from 'react'
import { ButtonVariants, Size } from '../../config/ButtonConfig'
import { GlobalProps, Radius } from '../../config/theme'
import {
  Button_Contained_Styles,
  Button_Ghost_Styles,
  Button_Text_Styles,
} from './Button.styles'

export type ButtonProps = GlobalProps & {
  label: string
  type?: 'button' | 'submit' | 'reset'
  variant: ButtonVariants
  icon?: ReactNode
  iconRight?: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: Size
  radius?: Radius
  font?: string
  block?: boolean
}

export const Button = ({
  label,
  variant,
  type,
  onClick,
  ...styleProps
}: ButtonProps) => {
  let className

  if (variant === 'contained') {
    className = Button_Contained_Styles
  } else if (variant === 'ghost') {
    className = Button_Ghost_Styles
  } else if (variant === 'text') {
    className = Button_Text_Styles
  } else {
    throw new Error('Invalid variant')
  }

  return (
    <div>
      <button
        className={className(styleProps)}
        type={type || 'submit'}
        onClick={onClick}>
        {label}
      </button>
    </div>
  )
}
