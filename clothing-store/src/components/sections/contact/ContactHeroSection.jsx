import React from 'react'
import defaultBackground from '../../../assets/images/contact-bg-09.jpg'

const ContactHeroSection = ({ title = 'About Us', backgroundImage = defaultBackground }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center" style={{ padding: '14rem 0' }}>
        <h1
          className="text-white"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '75px',
            lineHeight: '90px',
            fontWeight: 700,
            fontStyle: 'italic',
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  )
}

export default ContactHeroSection
