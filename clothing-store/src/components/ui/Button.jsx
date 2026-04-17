import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({ to, label, variant = 'light', className = '', style = {} }) => {
  const isDark = variant === 'dark'
  const variantClasses = isDark
    ? 'text-black border-black hover:bg-black hover:text-white'
    : 'text-white border-white hover:bg-white hover:text-black'

  return (
    <NavLink
      to={to}
      className={`border transition-all duration-300 ${variantClasses} ${className}`.trim()}
      style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '14px',
        letterSpacing: '2px',
        fontWeight: 500,
        textAlign: 'center',
        backgroundColor: 'transparent',
        padding: '15px 35px',
        display: 'block',
        marginTop: '30px',
        textDecoration: 'none',
        ...style,
      }}
    >
      {label}
    </NavLink>
  )
}

export default Button
