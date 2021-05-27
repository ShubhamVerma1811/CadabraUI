import React, { ReactElement, ReactNode } from 'react'
import { GlobalProps } from '../../config/theme'
import {
  Input_Contained_Styles,
  Input_Filled_Styles,
  Input_Outlined_Styles,
  Input_Underline_Styles,
} from './Input.styles'

const variants = ['underline', 'filled', 'contained', 'outlined'] as const
type InputVariant = typeof variants[number]

export type InputProps = GlobalProps & {
  variant?: InputVariant
  label: string
  font?: unknown
  value?: string
  isBorder?: unknown
  placeholder: string
  trailing_icon?: ReactNode
  leading_icon?: ReactNode
  validation_text?: string
  isActive?: unknown
  isFocused?: boolean
  isDisabled?: boolean
  type?: 'text' | 'email' | 'password'
  required?: boolean
  labelStyles?: string
  placeholderStyles?: string
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

export const Input = ({
  label,
  placeholder,
  onChange,
  labelStyles,
  placeholderStyles,
  required,
  type,
  value,
  variant,
  bg,
  bgNum,
}: InputProps): ReactElement => {
  let inputStyles: {
    container: string
    label: string
    input: string
  }

  if (variant === 'underline') {
    inputStyles = { ...Input_Underline_Styles({ bg, bgNum }) }
  } else if (variant === 'filled') {
    inputStyles = { ...Input_Filled_Styles({ bg, bgNum }) }
  } else if (variant === 'contained') {
    inputStyles = { ...Input_Contained_Styles({ bg, bgNum }) }
  } else if (variant === 'outlined') {
    inputStyles = { ...Input_Outlined_Styles({ bg, bgNum }) }
  } else throw new Error('Invalid variant')

  return (
    <div className={inputStyles.container}>
      {label && (
        <label
          className={inputStyles.label + ' ' + labelStyles}
          htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={inputStyles.input + ' ' + placeholderStyles}
        value={value}
        type={type}
        placeholder={placeholder}
        id={label && label}
        onChange={onChange ? event => onChange(event) : undefined}
      />
    </div>
  )
}
