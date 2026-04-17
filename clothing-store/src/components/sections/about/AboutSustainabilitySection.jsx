import React from 'react'

const AboutSustainabilitySection = ({
  eyebrow = 'Sustainability Initiatives',
  heading = 'Conscious Fashion for a Better Tomorrow',
  lead =
    'We recognize the responsibility we hold in shaping a more sustainable future for fashion. Our commitment to eco-friendly practices and sustainable fashion choices is at the core of what we do.',
  paragraphOne =
    'From the careful selection of ethically sourced materials to the implementation of environmentally conscious manufacturing processes, every step we take is a stride toward a greener and more sustainable industry.',
  paragraphTwo =
    'We prioritize transparency in our supply chain, partnering with suppliers who share our values of fair labor practices and environmental stewardship. Our sustainable fashion choices extend to packaging as well - we use recyclable materials to minimize our environmental footprint. Join us on this journey towards conscious fashion, where style meets responsibility, and every purchase contributes to a brighter, eco-friendly tomorrow.',
}) => {
  return (
    <section className="py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h6
            className="uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '11px',
              letterSpacing: '2px',
              fontWeight: 600,
              lineHeight: '13px',
              color: '#000000',
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
              color: '#000000',
              fontWeight: 700,
              lineHeight: '64.4px',
              fontStyle: 'italic',
              textTransform: 'capitalize',
            }}
          >
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <h5
            className="lg:pr-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '24px',
              textTransform: 'capitalize',
              fontStyle: 'italic',
              color: '#000000',
            }}
          >
            {lead}
          </h5>
          <div className="space-y-4">
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '23px',
                color: 'rgba(0,0,0,0.46)',
              }}
            >
              {paragraphOne}
            </p>
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '23px',
                color: 'rgba(0,0,0,0.46)',
              }}
            >
              {paragraphTwo}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSustainabilitySection
