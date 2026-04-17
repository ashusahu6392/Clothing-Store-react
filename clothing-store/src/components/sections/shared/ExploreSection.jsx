import React from 'react'
import Button from '../../ui/Button'
import defaultBackground from '../../../assets/bg-005.jpg'

const ExploreSection = ({
  eyebrow = 'EXPLORE',
  title = 'Elevate your wardrobe, embrace timeless style!',
  description =
    'Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!',
  buttonLabel = 'Shop Now',
  buttonTo = '/shop',
  backgroundImage = defaultBackground,
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block" />
          <div className="text-white">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '11px',
                letterSpacing: '2px',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              {eyebrow}
            </p>
            <h2
              className="mt-3"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '56px',
                letterSpacing: '2px',
                color: '#ffffff',
                fontWeight: 700,
                lineHeight: '64.4px',
                fontStyle: 'italic',
              }}
            >
              {title}
            </h2>
            <p
              className="mt-4"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14.45px',
                fontWeight: 600,
                lineHeight: '23px',
                color: '#ffffff',
              }}
            >
              {description}
            </p>
            <Button to={buttonTo} label={buttonLabel} style={{ marginTop: '20px' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
