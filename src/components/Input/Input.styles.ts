import random from 'unique-random-array'
import { colors, fonts, Range, range } from '../../config/theme'
import { classnames } from '../../tailwindcss-classnames'

/*
 * BaseInput - Font, Background
 * Variants - BaseInput + Layout(flex, borders...)
 */

type ButtonStyleProps = {
  bg?: string
  bgNum?: Range
  font?: string
}

//* Base variant should only have styles
export const BaseInput = ({ bg, bgNum, font }: ButtonStyleProps) => {
  //@ts-ignore
  return classnames(`bg-${bg}-${bgNum}`, `font-${font}`)
}

// * Variants should only have Base + Their specific styles

export const Input_Underline_Styles = ({
  bg = random(colors)(),
  bgNum = random(range)(),
  font = random(fonts)(),
}: ButtonStyleProps) => {
  return {
    container: classnames(
      'flex',
      'flex-col',
      'justify-center',
      'transition',
      'transition-all'
    ),
    label: classnames('text-xs', 'text-gray-500'),
    input: classnames(
      'border-b-2',
      'bg-transparent',
      //@ts-ignore
      `border-${bg}-${bgNum + 100} hover:border-${bg}-${
        bgNum + 200
      } focus:border-${bg}-${600} outline-none`
    ),
  }
}

export const Input_Filled_Styles = ({
  bg = random(colors)(),
  bgNum = random(range.slice(0, 3))(),
  font = random(fonts)(),
}) => {
  return {
    container: classnames(
      BaseInput({ bg, bgNum, font }),
      'flex',
      'flex-col',
      'justify-center',
      'transition',
      'transition-all',
      //@ts-ignore
      `border-b-2 border-${bg}-${
        bgNum + 200
      } focus-within:border-${bg}-${600} rounded-t p-2 bg-${bg}-${bgNum} hover:bg-${bg}-${
        bgNum + 100
      }`
    ),
    label: classnames('text-xs', 'text-gray-500'),
    input: classnames('bg-transparent', 'outline-none'),
  }
}

export const Input_Contained_Styles = ({
  bg = random(colors)(),
  bgNum = random(range.slice(0, 3))(),
  font = random(fonts)(),
}: ButtonStyleProps) => {
  return {
    container: classnames(
      BaseInput({ bg, bgNum, font }),
      'border-2',
      'rounded',
      'p-2',
      'flex',
      'flex-col',
      'justify-center',
      'transition',
      'transition-all',
      //@ts-ignore
      `border-${bg}-${bgNum + 100} focus-within:border-${bg}-${600}`
    ),
    label: classnames('text-xs', 'text-gray-500'),
    input: classnames(
      'bg-transparent',
      'outline-none',
      //@ts-ignore
      `border-${bg}-${bgNum + 100} hover:border-${bg}-${
        bgNum + 200
      } focus:border-${bg}-${600}`
    ),
  }
}

export const Input_Outlined_Styles = ({
  bg = random(colors)(),
  bgNum = random(range)(),
}: ButtonStyleProps) => {
  return {
    container: classnames(
      'flex',
      'flex-col',
      'justify-center',
      'transition',
      'transition-all'
    ),
    label: classnames('text-xs', 'text-gray-500'),
    input: classnames(
      'border-2',
      'p-2',
      'bg-transparent',
      'outline-none',
      //@ts-ignore
      `border-${bg}-${bgNum + 100} hover:border-${bg}-${
        bgNum + 200
      } focus:border-${bg}-${600}`
    ),
  }
}
