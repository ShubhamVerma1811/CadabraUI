import React, { ReactElement, ReactNode } from 'react'
import { Radius, Width } from '../../config/theme'
import { Button } from '../Button/Button'
import { Card_Styles } from './Card.styles'

export type CardProps = {
  children: ReactNode
  title?: string
  subtitle?: string
  headerImage?: { src: string; alt: string }
  raised?: boolean
  padding?: string
  radius?: Radius
  width?: Width
  font?: string
}

export const Card = ({
  title,
  subtitle,
  children,
  padding,
  headerImage,
  radius = 'md',
  width = 'auto',
  raised,
  font = 'karla',
}: CardProps): ReactElement => {
  let className: {
    container: string
    context: string
    title: string
    parent: string
  } = Card_Styles({ radius, padding, raised, width, title, subtitle, font })

  return (
    <div className={className.container}>
      {headerImage && (
        <figure>
          <img
            src={headerImage.src}
            alt={headerImage.alt}
            className='w-full h-full object-cover'
          />
        </figure>
      )}

      <div className={className.parent}>
        <div className={className.title}>
          {title && <h1 className='text-2xl font-semibold'>{title}</h1>}
          {subtitle && <h2 className='font-normal text-sm'>{subtitle}</h2>}
        </div>
        {children && <div className={className.context}>{children}</div>}
      </div>
    </div>
  )
}

export type MediaProps = {
  src: string
  alt?: string
}

const Media = ({ src, alt }: MediaProps): ReactElement => {
  return (
    <div>
      <figure>
        <img src={src} alt={alt} />
      </figure>
    </div>
  )
}

export type ContentProps = {
  children?: ReactNode
  padding?: number
}

// const Content = ({ children, padding = 2 }: ContentProps): ReactElement => {
//   const containerClasses: string[] = []
//   padding && containerClasses.push(`p-${padding}`)

//   return <div className={containerClasses.join(' ')}>{children}</div>
// }

const Footer = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <div className='flex flex-row items-center overflow-hidden pt-4'>
        {children}
      </div>
    </div>
  )
}

Card.Button = Button
Card.Media = Media
// Card.Content = Content
Card.Footer = Footer
