import React from 'react'
import { NavLink } from 'react-router-dom'
import defaultBackground from '../assets/images/bg-10.jpg'

const ShopHeroSection = ({
  title = 'Shop',
  backgroundImage = defaultBackground,
  breadcrumbs = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
  ],
}) => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`, padding: '13rem 0' }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '75px',
            lineHeight: '90px',
            fontWeight: 600,
            textTransform: 'capitalize',
          }}
        >
          {title}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={`${crumb.label}-${index}`}>
              {index > 0 && <span className="text-xs">&gt;&gt;</span>}
              {index === breadcrumbs.length - 1 ? (
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    lineHeight: '23px',
                    fontWeight: 600,
                  }}
                >
                  {crumb.label}
                </span>
              ) : (
                <NavLink
                  to={crumb.to}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '14px',
                    lineHeight: '23px',
                    fontWeight: 600,
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                >
                  {crumb.label}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopHeroSection
