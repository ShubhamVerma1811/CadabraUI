const sizes = ['xs', 'sm', 'base', 'lg', 'xl'] as const
const variants = ['contained', 'ghost', 'text']

export type Size = typeof sizes[number]
export type ButtonVariants = 'contained' | 'ghost' | 'text' | 'icon'
export { sizes, variants }
