import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color: React.CSSProperties['color']
  variant: 'outlined' | 'tonal' | 'filled' | 'text'
  rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { style, className, children, ...rest } = props
    return (
      <button
        ref={ref}
        {...rest}
        style={style}
        className={className}
        type={rest.type || 'button'}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
