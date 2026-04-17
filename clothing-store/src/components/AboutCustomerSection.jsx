import React from 'react'
import defaultBackground from '../assets/images/About-bg-02.jpg'

const AboutCustomerSection = ({
  eyebrow = 'Customer-Centric Approach',
  heading = 'Beyond Fashion: Nurturing a Customer-Centric Experience',
  description =
    "We believe that the essence of our success lies in the satisfaction of our customers. Our commitment to providing an exceptional shopping experience goes beyond trends and styles - it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. From personalized recommendations to hassle-free returns, we've crafted every aspect of our service with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your satisfaction is not just a priority; it's our passion.",
  backgroundImage = defaultBackground,
}) => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 py-20">
        <div className="max-w-xl lg:ml-8">
          <h6
            className="uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '11px',
              letterSpacing: '2px',
              fontWeight: 600,
              lineHeight: '13px',
              color: '#ffffff',
            }}
          >
            {eyebrow}
          </h6>
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
              textTransform: 'capitalize',
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '23px',
              color: '#ffffff',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutCustomerSection
