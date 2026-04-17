import React from 'react'
import ProductCard from '../../ui/ProductCard'
import img1 from '../../../assets/images/img-08-a-400x488.jpg'
import img2 from '../../../assets/images/img-01-a-400x488.jpg'
import img3 from '../../../assets/images/img-02-aa-400x488.jpg'
import img4 from '../../../assets/images/img-03-ad-400x488.jpg'
import img5 from '../../../assets/images/img-04-ac-400x488.jpg'
import img6 from '../../../assets/images/img-05-a-black.jpg'
import img7 from '../../../assets/images/img-05-a-white-300x366.jpg'
import img8 from '../../../assets/images/img-06-a-black-300x366.jpg'

const defaultProducts = [
  { id: 1, image: img1, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
  { id: 2, image: img2, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
  { id: 3, image: img3, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
  { id: 4, image: img4, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
  { id: 5, image: img5, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
  { id: 6, image: img6, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
  { id: 7, image: img7, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
  { id: 8, image: img8, category: 'Work & Office', name: 'Timeless Classic Collection', price: '124.50' },
]

const ShopProductsSection = ({ products = defaultProducts }) => {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
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

export default ShopProductsSection
