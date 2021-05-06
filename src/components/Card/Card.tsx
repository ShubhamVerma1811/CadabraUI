import React, { ReactElement, ReactNode } from 'react'
import { Radius, Width } from '../../config/theme'
import { Button } from '../Button/Button'

export type CardProps = {
  children: ReactNode
  padding?: string
  title?: string
  subtitle?: string
  headerImage?: { src: string; alt: string }
  radius?: Radius
  width?: Width
  raised?: boolean
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
  const containerClasses: string[] = []
  const contextClasses: string[] = []
  const titleClasses: string[] = []
  const parentClasses: string[] = []

  raised
    ? containerClasses.push('shadow drop-shadow')
    : containerClasses.push('border')

  containerClasses.push(`relative overflow-hidden font-${font}`)
  containerClasses.push(`flex flex-col justify-center`)

  radius && containerClasses.push(`rounded-${radius}`)

  width && containerClasses.push(`w-${width}`)

  padding && parentClasses.push(`p-${padding} flex flex-col justify-between`)
  contextClasses.push(`flex flex-col justify-between`)

  if (title || subtitle) titleClasses.push(`py-4`)

  return (
    <div className={containerClasses.join(' ')}>
      {headerImage && (
        <figure>
          <img
            src={headerImage.src}
            alt={headerImage.alt}
            className='w-full h-full object-cover'
          />
        </figure>
      )}

      <div className={parentClasses.join(' ')}>
        <div className={titleClasses.join(' ')}>
          {title && <h1 className='text-2xl font-semibold'>{title}</h1>}
          {subtitle && <h2 className='font-normal text-sm'>{subtitle}</h2>}
        </div>
        {children && <div className={contextClasses.join(' ')}>{children}</div>}
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

const Content = ({ children, padding = 2 }: ContentProps): ReactElement => {
  const containerClasses: string[] = []
  padding && containerClasses.push(`p-${padding}`)

  return <div className={containerClasses.join(' ')}>{children}</div>
}

const Footer = ({ children }: { children?: ReactNode }) => {
  return (
    <div>
      <div className='flex flex-row items-center overflow-hidden py-4'>
        {children}
      </div>
    </div>
  )
}

Card.Button = Button
Card.Media = Media
Card.Content = Content
Card.Footer = Footer
