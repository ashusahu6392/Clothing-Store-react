import React from 'react'

const AboutStorySection = ({
  heading = 'From Vision to Vogue: The Birth of FemmeWardrobe',
  eyebrow = 'OUR STORY',
  title =
    'Our journey began with a simple yet powerful vision - to redefine the way women experience fashion.',
  description =
    'Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.',
  qualityEyebrow = 'QUALITY ASSURANCE',
  qualityHeading =
    'We understand that fashion is an expression of identity, and we take pride in delivering products that embody the highest standards of quality.',
  qualityDescription =
    "Our journey to excellence begins with meticulous sourcing, where we carefully select materials that meet our stringent criteria for durability, comfort, and style. Every garment is crafted with precision in our state-of-the-art manufacturing facilities, ensuring attention to detail at every stitch. Our commitment to quality doesn't end there - rigorous quality control processes guarantee that each piece meets our exacting standards before it finds its way to your wardrobe. Trust in FemmeWardrobe for fashion that not only captures attention but withstands the test of time.",
}) => {
  return (
    <section className="py-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2
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
          <div>
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
            <h5
              className="mt-3"
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
              {title}
            </h5>
            <p
              className="mt-3"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '23px',
                color: 'rgba(0,0,0,0.46)',
              }}
            >
              {description}
            </p>
          </div>
        </div>

        <hr className="my-12 border-gray-200" />

        <div>
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
            {qualityEyebrow}
          </h6>
          <h2
            className="mt-4"
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
            {qualityHeading}
          </h2>
          <p
            className="mt-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '23px',
              color: 'rgba(0,0,0,0.46)',
            }}
          >
            {qualityDescription}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutStorySection
