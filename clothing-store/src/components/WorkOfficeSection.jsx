import React from 'react'
import Button from './Button'
import defaultBackground from '../assets/bg-pinstripBlazzer.jpg'

const WorkOfficeSection = ({
  eyebrow = 'Work & Office Attire',
  titleLines = ['Professional', 'Pinstripe Blazers', 'Collection'],
  description =
    'Elevate your workwear with our Professional Pinstripe Blazers Collection, where tailored sophistication meets modern confidence for a powerfully polished office look.',
  buttonLabel = 'Shop Now',
  buttonTo = '/shop',
  backgroundImage = defaultBackground,
}) => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12">
          <div className="col-span-9 md:col-span-6 bg-white">
            <div className="pl-6 pr-6 pt-16 pb-24 sm:pl-12 sm:pr-12 sm:pt-24 sm:pb-40 lg:pl-16 lg:pr-24 lg:pt-28 lg:pb-[16.4rem]">
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '2px',
                  color: '#000000',
                  fontWeight: 600,
                }}
              >
                {eyebrow}
              </p>
              <h2
                className="mt-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '56px',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  lineHeight: '1.2',
                  letterSpacing: '0.3px',
                }}
              >
                {titleLines.map((line, index) => (
                  <span key={`${line}-${index}`} className="block">
                    {line}
                  </span>
                ))}
              </h2>
              <p
                className="mt-4 max-w-md"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14.45px',
                  fontWeight: 600,
                  lineHeight: '23px',
                  color: 'rgba(0,0,0,0.46)',
                }}
              >
                {description}
              </p>
              <Button
                to={buttonTo}
                label={buttonLabel}
                variant="dark"
                style={{ marginTop: '20px' }}
              />
            </div>
          </div>
          <div className="col-span-3 md:col-span-6" />
        </div>
      </div>
    </section>
  )
}

export default WorkOfficeSection
