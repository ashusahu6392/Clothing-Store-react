import React from 'react'
import defaultBackground from '../../../assets/bg-04.jpg'

const StarIcon = ({ className }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1000 1000"
    className={className}
    fill="currentColor"
  >
    <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
  </svg>
)

const TestimonialSection = ({
  quote =
    'FemmeWardrobe is my fashion sanctuary! The curated collection effortlessly blends chic trends with timeless elegance, making every purchase a delightful discovery. The quality of their pieces is unmatched, and I appreciate the brand\'s commitment to sustainable fashion. What truly sets FemmeWardrobe apart is their customer-centric approach.',
  author = 'Sarah M., Devoted FemmeWardrobe Fan',
  backgroundImage = defaultBackground,
  stars = 5,
}) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="flex justify-center gap-2 mb-4">
          {Array.from({ length: stars }).map((_, index) => (
            <StarIcon key={index} className="w-5 h-5 text-yellow-400" />
          ))}
        </div>
        <h4
          style={{
            fontSize: '31px',
            color: '#ffffff',
            lineHeight: '43.4px',
            fontWeight: 600,
            fontStyle: 'italic',
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {quote}
        </h4>
        <p
          className="mt-4"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '14px',
            letterSpacing: '2px',
            color: '#ffffff',
            fontWeight: 600,
          }}
        >
          {author}
        </p>
      </div>
    </section>
  )
}

export default TestimonialSection
