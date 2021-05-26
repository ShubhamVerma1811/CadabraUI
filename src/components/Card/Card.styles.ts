import { classnames, TArg } from 'tailwindcss-classnames'

export const Card_Styles = ({
  radius,
  padding,
  raised,
  width,
  title,
  subtitle,
  font,
}) => {
  return {
    container: classnames(
      'relative',
      'overflow-hidden',
      'flex',
      'flex-col',
      'justify-center',
      `font-${font}` as TArg,
      raised ? classnames('shadow', 'drop-shadow') : 'border',
      radius && `rounded-${radius}`,
      width && `w-${width}`
    ),
    context: classnames('flex', 'flex-col', 'justify-between'),
    title: (title || subtitle) && classnames('py-4'),
    parent: classnames(
      'flex',
      'flex-col',
      'justify-around',
      padding && (`p-${padding}` as TArg)
    ),
  }
}
