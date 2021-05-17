import React, { ReactElement, ReactNode } from 'react'
import rando from 'unique-random-array'
import { colors, fonts, GlobalProps, range, Range } from '../../config/theme'

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
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

export const Input = (props: InputProps): ReactElement => {
  if (props.variant === 'underline') {
    return <Input_Underline {...props} />
  } else if (props.variant === 'filled') {
    return <Input_Filled {...props} />
  } else if (props.variant === 'contained') {
    return <Input_Contained {...props} />
  } else if (props.variant === 'outlined') {
    return <Input_Outlined {...props} />
  } else
    throw new Error(
      'Please enter a valid variant from Input. Entered variant name is ' +
        props.variant
    )

  // GLOBAL CLASSES FOR THE ELEMENTS
}

const Input_Underline = ({
  label,
  value,
  type,
  onChange,
  placeholder,
  font = rando(fonts)(),
  bgNum = rando(range)(),
  bg = rando(colors)(),
}: InputProps): ReactElement => {
  const containerClasses: string[] = []
  const labelClasses: string[] = []
  const inputClasses = []

  console.log(typeof onChange)

  containerClasses.push(`flex flex-col justify-center font-${font}`)
  labelClasses.push(`text-xs text-gray-500`)

  inputClasses.push(`border-b-2  transition transform-all bg-transparent`)

  inputClasses.push(
    `border-${bg}-${bgNum + 100} hover:border-${bg}-${
      bgNum + 200
    } focus:border-${bg}-${600} outline-none`
  )

  containerClasses.push(`transition transform-all`)

  return (
    <div className={containerClasses.join(' ')}>
      {label && (
        <label className={labelClasses.join(' ')} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        value={value}
        type={type}
        placeholder={placeholder}
        className={inputClasses.join(' ')}
        id={label && label}
        onChange={onChange ? (event) => onChange(event) : undefined}
      />
    </div>
  )
}

const Input_Filled = ({
  label,
  type,
  placeholder,
  font = rando(fonts)(),
  bgNum = rando(range.slice(0, 3))() as Range,
  bg = rando(colors)(),
  required,
  onChange,
}: InputProps): ReactElement => {
  const containerClasses: string[] = []
  const labelClasses: string[] = []
  const inputClasses = []
  containerClasses.push(
    `border-b-2 border-${bg}-${
      bgNum + 200
    } focus-within:border-${bg}-${600} rounded-t p-2 bg-${bg}-${bgNum} hover:bg-${bg}-${
      bgNum + 100
    }`
  )

  inputClasses.push(`bg-transparent`)

  containerClasses.push(`flex flex-col justify-center font-${font}`)
  labelClasses.push(`text-xs text-gray-500`)

  inputClasses.push(
    `border-${bg}-${bgNum + 100} hover:border-${bg}-${
      bgNum + 200
    } focus:border-${bg}-${600} outline-none`
  )

  containerClasses.push(`transition transform-all`)

  return (
    <div className={containerClasses.join(' ')}>
      {label && (
        <label className={labelClasses.join(' ')} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses.join(' ')}
        id={label && label}
        onChange={onChange ? (event) => onChange(event) : undefined}
        required={required && required}
      />
    </div>
  )
}

const Input_Contained = ({
  label,
  type,
  placeholder,
  font = rando(fonts)(),
  bgNum = rando(range)(),
  bg = rando(colors)(),
}: InputProps): ReactElement => {
  const containerClasses: string[] = []
  const labelClasses: string[] = []
  const inputClasses = []
  containerClasses.push(
    `border-2 border-${bg}-${
      bgNum + 100
    } focus-within:border-${bg}-${600} rounded p-2 `
  )

  inputClasses.push(`bg-transparent`)

  containerClasses.push(`flex flex-col justify-center font-${font}`)
  labelClasses.push(`text-xs text-gray-500`)

  inputClasses.push(
    `border-${bg}-${bgNum + 100} hover:border-${bg}-${
      bgNum + 200
    } focus:border-${bg}-${600} outline-none`
  )

  containerClasses.push(`transition transform-all`)

  return (
    <div className={containerClasses.join(' ')}>
      {label && (
        <label className={labelClasses.join(' ')} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses.join(' ')}
        id={label && label}
      />
    </div>
  )
}

const Input_Outlined = ({
  label,
  placeholder,
  type,
  font = rando(fonts)(),
  bgNum = rando(range)(),
  bg = rando(colors)(),
}: InputProps): ReactElement => {
  const containerClasses: string[] = []
  const labelClasses: string[] = []
  const inputClasses = []
  inputClasses.push(
    `border-2 border-${bg}-${
      bgNum + 100
    } focus-within:border-${bg}-${600}  p-2 `
  )

  inputClasses.push(`bg-transparent`)

  containerClasses.push(`flex flex-col justify-center font-${font}`)
  labelClasses.push(`text-xs text-gray-500`)

  inputClasses.push(
    `border-${bg}-${bgNum + 100} hover:border-${bg}-${
      bgNum + 200
    } focus:border-${bg}-${600} outline-none`
  )

  containerClasses.push(`transition transform-all`)

  return (
    <div className={containerClasses.join(' ')}>
      {label && (
        <label className={labelClasses.join(' ')} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={inputClasses.join(' ')}
        id={label && label}
      />
    </div>
  )
}
