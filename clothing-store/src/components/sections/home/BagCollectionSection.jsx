import React from 'react'
import Button from '../../ui/Button'
import defaultBackground from '../../../assets/bg-02.jpg'
import defaultImage from '../../../assets/bg-03-b.jpg'

const BagCollectionSection = ({
  title = 'Explore our exquisite Bag Collection now!',
  buttonLabel = 'View Collection',
  buttonTo = '/shop',
  backgroundImage = defaultBackground,
  featureImage = defaultImage,
  imageAlt = 'Bag collection',
}) => {
  return (
    <section
      className="relative py-12 px-4 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 py-10">
          <div className="hidden lg:block lg:col-span-7" />
          <div className="lg:col-span-5">
            <div className="flex flex-col items-center">
              <img src={featureImage} alt={imageAlt} className="w-full h-auto" />
              <h2
                className="text-center text-white px-4 pt-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '42px',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: '48.3px',
                }}
              >
                {title}
              </h2>
              <div className="w-fit mx-auto">
                <Button to={buttonTo} label={buttonLabel} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BagCollectionSection
