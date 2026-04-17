import React from 'react'
import img1 from '../../../assets/img-02-aa-400x488.jpg'
import img2 from '../../../assets/img-07-ab-400x488.jpg'
import img3 from '../../../assets/img-04-ac-400x488.jpg'
import img4 from '../../../assets/img-03-ad-400x488.jpg'

const defaultProducts = [
  { id: 1, image: img1, category: 'Activewear', name: 'Professional Pinstripe Blazer', price: '109.99' },
  { id: 2, image: img2, category: 'Work & Office', name: 'Relaxed Fit Joggers', price: '145.50' },
  { id: 3, image: img3, category: 'Evening Dresses', name: 'Urban Chic Ensemble', price: '224.95' },
  { id: 4, image: img4, category: 'Activewear', name: 'Weekend Wanderlust Wardrobe', price: '119.95' },
]

const NewestProductCard = ({ image, category, name, price }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[350px] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center text-center mt-3 gap-1">
        <p
          style={{
            fontSize: '14.45px',
            fontWeight: 400,
            lineHeight: '18.785px',
            fontFamily: "'Montserrat', sans-serif",
            color: '#000',
          }}
        >
          {category}
        </p>
        <p
          style={{
            fontSize: '17px',
            fontWeight: 700,
            lineHeight: '19.55px',
            fontFamily: "'Montserrat', sans-serif",
            color: '#000',
            margin: '0 0 8.5px',
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: '15.3px',
            fontWeight: 700,
            lineHeight: '19.89px',
            fontFamily: "'Montserrat', sans-serif",
            color: '#000',
          }}
        >
          ${price}
        </p>
      </div>
    </div>
  )
}

const NewestProductsSection = ({ heading = 'Newest Products', products = defaultProducts }) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-center mb-12"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '56px',
            letterSpacing: '2px',
            color: '#000',
            fontWeight: 700,
            lineHeight: '64.4px',
            fontStyle: 'italic',
          }}
        >
          {heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <NewestProductCard
              key={product.id}
              image={product.image}
              category={product.category}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewestProductsSection
