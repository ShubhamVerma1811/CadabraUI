// GLOBAL VALUES USED THROUGHOUT THE PROJECT
import tailwindColors from 'tailwindcss/colors'
import resolveConfig from 'tailwindcss/resolveConfig'
import { TailwindConfig } from 'tailwindcss/tailwind-config'
import * as fullConfig from '../tailwind.config'

// @ts-ignore
const { theme } = resolveConfig(fullConfig)

// removing transparent and current color.
const colors = Object.keys(tailwindColors).splice(2)
const range = [100, 200, 300, 400, 500, 600, 700, 800, 900] as const
const fonts = Object.keys(theme.fontFamily)
const radiuses = [
  'none',
  'sm',
  'DEFAULT',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  'full',
] as const

export { colors, range, fonts, radiuses }

export type Radius = typeof radiuses[number]
export type Range = typeof range[number]
export type Width = keyof TailwindConfig['theme']['width']
