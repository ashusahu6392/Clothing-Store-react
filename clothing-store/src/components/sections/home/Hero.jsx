import React from 'react'
import { NavLink } from 'react-router-dom'
import heroImage from '../../../assets/bg-01.jpg'
import Button from '../../ui/Button'

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20"
        style={{ paddingBlock: '7.45rem' }}
      >

        {/* "Casual & Everyday" — f1-para */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '14px',
          letterSpacing: '2px',
          color: '#ffffff',
          fontWeight: 600,
        }}>
          Casual &amp; Everyday
        </p>

        {/* Heading — f1-heading */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '75px',
          fontWeight: 700,
          fontStyle: 'italic',
          color: '#ffffff',
          lineHeight: 1.15,
          margin: '16px 0',
        }}>
          Effortlessly blend comfort <br /> &amp; style!
        </h1>

        {/* Description — f1-para */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '14px',
          letterSpacing: '2px',
          color: '#ffffff',
          fontWeight: 600,
          maxWidth: '700px',
          lineHeight: '1.8',
        }}>
          Effortlessly blend comfort and style with our Casual &amp; Everyday
          collection, featuring cozy sweaters, versatile denim, laid-back tees,
          and relaxed-fit joggers for your everyday adventures
        </p>

        <Button to="/shop" label="View Collection" />

      </div>
    </div>
  )
}

export default Hero
