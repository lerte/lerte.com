import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import Ripples from 'react-ripples'
import { cva } from 'class-variance-authority'

const buttonStyles = cva(
  'relative overflow-hidden box-border inline-block h-9 min-w-[64px] max-w-full cursor-pointer justify-center text-ellipsis rounded-[4px] border-none px-4 text-center align-middle text-sm font-medium uppercase leading-9 tracking-wider shadow-md transition-shadow',
  {
    variants: {
      density: {
        compact: ['h-6'],
        comfortable: ['h-7'],
        default: ['h-9']
      },
      color: {
        default: ['bg-white', 'text-black'],
        primary: ['bg-primary', 'text-primary'],
        secondary: ['bg-secondary', 'text-secondary'],
        accent: ['bg-accent', 'text-accent'],
        error: ['bg-error', 'text-error'],
        info: ['bg-info', 'text-info'],
        success: ['bg-success', 'text-success'],
        warning: ['bg-warning', 'text-warning']
      },
      variant: {
        elevated: ['shadow-md', 'text-white'],
        flat: ['shadow-none'],
        tonal: ['bg-transparent'],
        outlined: ['outline outline-1 outline-current', 'bg-transparent'],
        text: ['shadow-none', 'bg-transparent'],
        plain: []
      },
      size: {
        'x-small': ['text-sm'],
        small: ['text-base'],
        large: ['text-lg'],
        'x-large': ['text-xl']
      }
    },
    defaultVariants: {
      variant: 'elevated',
      density: 'default',
      color: 'default',
      size: 'medium'
    }
  }
)

function Button(props) {
  const {
    onClick,
    children,
    disabled,
    loading,
    variant,
    block,
    color,
    size,
    type,
    className
  } = props

  const handleOnClick = (event) => {
    if (disabled || loading) return
    onClick && onClick(event)
  }

  const classNames = clsx(className, { 'w-full': block })

  return (
    <Ripples>
      <button
        type={type || 'button'}
        onClick={handleOnClick}
        disabled={disabled}
        className={buttonStyles({
          variant,
          block,
          size,
          color,
          className: classNames
        })}
      >
        <span
          className={`pointer-events-none absolute bottom-0 left-0 right-0 top-0 ${
            variant == 'elevated' ? 'bg-current opacity-[.12]' : ''
          }`}
        ></span>
        <span className="text-current">{children}</span>
      </button>
    </Ripples>
  )
}

Button.defaultProps = {
  active: false,
  appendIcon: undefined,
  block: false,
  border: false,
  color: undefined,
  density: 'default',
  disabled: false,
  elevation: undefined,
  flat: false,
  href: undefined,
  icon: false,
  loading: false,
  location: undefined,
  prependIcon: undefined,
  ripple: true,
  rounded: false,
  size: 'default',
  stacked: false,
  variant: 'elevated'
}

Button.propTypes = {
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

export default Button
