import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import { cva } from 'class-variance-authority'

const inputStyles = cva(
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50',
  {
    variants: {
      density: {
        compact: ['h-6'],
        comfortable: ['h-7'],
        default: ['h-9']
      }
    },
    defaultVariants: {
      density: 'default'
    }
  }
)

function Input(props) {
  const {
    onClick,
    onClickIcon,
    disabled,
    loading,
    type,
    icon,
    name,
    placeholder,
    className,
    value
  } = props

  const handleChange = (event) => {
    const { onChange } = props
    onChange && onChange(event)
  }
  const handleClick = (event) => {
    if (disabled || loading) return
    onClick && onClick(event)
  }

  const classNames = clsx(
    className,
    'group flex rounded-md border relative overflow-hidden'
  )

  return (
    <div className={classNames}>
      <input
        name={name}
        value={value}
        type={type || 'text'}
        onChange={handleChange}
        placeholder={placeholder}
        onClick={handleClick}
        disabled={disabled}
        className="block w-full px-4 py-2 focus-visible:outline-none"
      />
      {icon && (
        <span
          onClick={onClickIcon}
          className={clsx(
            'flex items-center px-4 group-focus-within:text-indigo-500',
            { 'cursor-pointer': onClickIcon }
          )}
        >
          {icon({ size: 25 })}
        </span>
      )}
    </div>
  )
}

Input.defaultProps = {}

Input.propTypes = {
  icon: PropTypes.func,
  onClickIcon: PropTypes.func
}

export default Input
