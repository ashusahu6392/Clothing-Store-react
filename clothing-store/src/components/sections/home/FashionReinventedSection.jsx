import React from 'react'
import Button from '../../ui/Button'
import defaultBackground from '../../../assets/bg-greyHair.jpg'
import defaultImage from '../../../assets/img-03-b.jpg'

const FashionReinventedSection = ({
  titleLines = ['Discover The Allure Of', 'Fashion Reinvented!'],
  description =
    'Dive into a world of style with our latest collection! Shop now and redefine your wardrobe narrative!',
  buttonLabel = 'Shop Now',
  buttonTo = '/shop',
  backgroundImage = defaultBackground,
  featureImage = defaultImage,
  imageAlt = 'Fashion detail',
}) => {
  return (
    <section
      className="relative bg-cover bg-center lg:bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 lg:py-28 min-h-[90vh] lg:min-h-[120vh]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full lg:absolute lg:-top-[80px] lg:left-0 lg:right-0">
          <div className="lg:col-span-5">
            <div className="max-w-none">
              <div className="inline-block mb-10">
                <img
                  src={featureImage}
                  alt={imageAlt}
                  className="w-auto h-auto max-w-full origin-left"
                  style={{ transform: 'scale(1.3)' }}
                />
              </div>
              <h2
                className="mt-2 text-white"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '42px',
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
                className="mt-4 text-white"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '14px',
                  letterSpacing: '2px',
                  lineHeight: '23px',
                  fontWeight: 600,
                }}
              >
                {description}
              </p>
              <Button to={buttonTo} label={buttonLabel} style={{ marginTop: '18px' }} />
            </div>
          </div>
          <div className="hidden lg:block lg:col-span-7" />
        </div>
      </div>
    </section>
  )
}

export default FashionReinventedSection
