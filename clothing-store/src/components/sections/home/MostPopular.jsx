import React from 'react'
import ProductCard from '../../ui/ProductCard'
import img1 from '../../../assets/img-08-a-400x488.jpg'
import img2 from '../../../assets/img-06-a-black-300x366.jpg'
import img3 from '../../../assets/img-04-ac-400x488.jpg'
import img4 from '../../../assets/img-07-ab-400x488.jpg'

const products = [
  { id: 1, image: img1, category: 'Work & Office', name: 'Timeless Classic Collection',  price: '124.90' },
  { id: 2, image: img2, category: 'Casual',        name: 'Bohemian Rhapsody Attire',     price: '145.50' },
  { id: 3, image: img3, category: 'Evening Dress', name: 'Midnight Gala Maxi Dress',     price: '175.00' },
  { id: 4, image: img4, category: 'Casual',        name: 'Power Suit Ensemble',          price: '125.50' },
]

const MostPopular = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-center mb-12" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '56px',
          letterSpacing: '2px',
          color: '#000',
          fontWeight: 700,
          lineHeight: '64.4px',
          fontStyle: 'italic',
        }}>
          Most Popular
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              image={p.image}
              category={p.category}
              name={p.name}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MostPopular
