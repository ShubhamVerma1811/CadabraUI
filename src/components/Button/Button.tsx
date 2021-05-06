import React, { MouseEventHandler, ReactElement, ReactNode } from 'react'
import rando from 'unique-random-array'
import { ButtonVariants, Size, sizes } from '../../config/ButtonConfig'
import { colors, fonts, radiuses, Range, range } from '../../config/theme'

// TODO Figure out the types for the props - type unknown bad

export type ButtonProps = {
  label: string
  type?: 'button' | 'submit' | 'reset'
  variant: ButtonVariants
  color?: unknown
  colorNum?: Range
  bg?: unknown
  bgNum?: Range
  size?: Size
  font?: unknown
  radius?: unknown
  icon?: ReactNode
  iconRight?: ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  block?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const getSize = (size: string): string => {
  if (size === 'sm') {
    return `px-4 py-2 text-sm`
  } else if (size === 'base') {
    return `px-6 py-2 text-md`
  } else if (size === 'lg') {
    return `px-8 py-2 text-lg`
  } else if (size === 'xl') {
    return `px-10 py-3 text-xl`
  } else {
    return `px-2 py-1 text-xs`
  }
}

export const Button = (props: ButtonProps): ReactElement => {
  // TODO Figure out a proper way to handle all variants with diff props nested if else bad
  // TODO Add ICON variant
  // TODO add sytles for isDisabled such that other styles are not applied

  if (props.variant === 'ghost') {
    return <Button_Ghost {...props} />
  } else if (props.variant === 'text') {
    return <Button_Text {...props} />
  } else if (props.variant === 'contained') {
    return <Button_Contained {...props} />
  } else {
    throw new Error('Invalid variant')
  }
}

const Button_Ghost = ({
  label,
  type = 'submit',
  color = rando(colors)(),
  colorNum = rando(range)(),
  bg = rando(colors)(),
  bgNum = rando(range)(),
  size = rando(sizes)() as Size,
  font = rando(fonts)(),
  radius = rando(radiuses)(),
  onClick,
  block,
}: ButtonProps) => {
  const buttonClasses = []
  buttonClasses.push(
    `bg-none border-2 border-${bg}-${bgNum} hover:bg-${bg}-${bgNum}`
  )
  buttonClasses.push(`text-${color}-${colorNum} font-${font}`)

  block && buttonClasses.push(`w-full`)
  buttonClasses.push(getSize(size))

  if (radius === 'DEFAULT') {
    buttonClasses.push('rounded')
  } else {
    buttonClasses.push(`rounded-${radius}`)
  }

  return (
    <div className={`${block && 'w-full'}`}>
      <button
        className={buttonClasses.join(' ')}
        type={type}
        role='button'
        onClick={onClick}>
        {label}
      </button>
    </div>
  )
}

const Button_Contained = ({
  label,
  type = 'submit',
  color = rando(colors)(),
  colorNum = rando(range)(),
  bg = rando(colors)(),
  bgNum = rando(range)(),
  size = rando(sizes)() as Size,
  font = rando(fonts)(),
  radius = rando(radiuses)(),
  onClick,
  block,
}: ButtonProps) => {
  const buttonClasses = []
  buttonClasses.push(`bg-${bg}-${bgNum}`)
  if (bgNum !== 900) {
    buttonClasses.push(` hover:bg-${bg}-${bgNum! + 100}`)
  } else {
    buttonClasses.push(` hover:bg-${bg}-${bgNum - 100}`)
  }

  buttonClasses.push(getSize(size))

  if (radius === 'DEFAULT') {
    buttonClasses.push('rounded')
  } else {
    buttonClasses.push(`rounded-${radius}`)
  }

  block && buttonClasses.push(`w-full`)
  buttonClasses.push(`text-${color}-${colorNum} font-${font}`)

  return (
    <div className={`${block && 'w-full'}`}>
      <button
        className={buttonClasses.join(' ')}
        type={type}
        role='button'
        onClick={onClick}>
        {label}
      </button>
    </div>
  )
}

const Button_Text = ({
  label,
  type = 'submit',
  color = rando(colors)(),
  colorNum = rando(range)(),
  font = rando(fonts)(),
  onClick,
}: ButtonProps) => {
  const buttonClasses = []
  buttonClasses.push('p-0 hover:underline')
  buttonClasses.push(`text-${color}-${colorNum} font-${font}`)

  return (
    <div>
      <button
        className={buttonClasses.join(' ')}
        type={type}
        role='button'
        onClick={onClick}>
        {label}
      </button>
    </div>
  )
}
