import random from 'unique-random-array'
import { Size, sizes } from '../../config/ButtonConfig'
import {
  colors,
  fonts,
  Radius,
  radiuses,
  Range,
  range,
} from '../../config/theme'
import {
  classnames,
  TBackgroundColor,
  TBorderColor,
  TBorderRadius,
} from '../../tailwindcss-classnames'

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

const getRadius = (radius: string): TBorderRadius => {
  if (radius === 'DEFAULT') {
    return 'rounded'
  } else {
    return `rounded-${radius}` as TBorderRadius
  }
}

export type ButtonStyleProps = {
  font?: string
  radius?: Radius
  block?: boolean
  size?: Size
  bg?: string
  bgNum?: Range
  color?: string
  colorNum?: number
}

export const BaseButton = ({
  size = random(sizes)(),
  font = random(fonts)(),
  radius = random(radiuses)(),
  block,
  color = random(colors)(),
  colorNum = random(range)(),
}: ButtonStyleProps) => {
  return classnames(
    //@ts-ignore
    getSize(size!),
    `font-${font}`,
    getRadius(radius!),
    `text-${color}-${colorNum}`,
    {
      ['w-full']: block,
    }
  )
}

//* Variants should only have their specific styles.

export const Button_Contained_Styles = ({
  size,
  font,
  radius,
  block,
  bg = random(colors)(),
  bgNum = random(range)(),
  color,
  colorNum,
}: ButtonStyleProps) => {
  return classnames(
    BaseButton({ size, font, radius, block, color, colorNum }),

    `bg-${bg}-${bgNum}` as TBackgroundColor,
    {
      [`hover:bg-${bg}-${bgNum + 100}`]: bgNum !== 900,
      [`hover:bg-${bg}-${bgNum - 100}`]: bgNum === 900,
    }
  )
}

export const Button_Ghost_Styles = ({
  size,
  font,
  radius,
  block,
  bg = random(colors)(),
  bgNum = random(range)(),
  color,
  colorNum,
}: ButtonStyleProps) => {
  return classnames(
    BaseButton({
      size,
      font,
      radius,
      block,
      color,
      colorNum,
    }),
    'bg-none',
    'border-2',
    `border-${bg}-${bgNum}` as TBorderColor,
    `hover:bg-${bg}-${bgNum}` as TBackgroundColor
  )
}

export const Button_Text_Styles = ({
  size,
  font,
  radius,
  block,
  bg = random(colors)(),
  bgNum = random(range)(),
  color,
  colorNum,
}: ButtonStyleProps) => {
  return classnames(
    BaseButton({ size, font, radius, block, color, colorNum }),

    `hover:bg-${bg}-${bgNum}` as TBackgroundColor,
    'hover:bg-opacity-25',
    'hover:underline'
  )
}
