import React, { useState } from 'react'

const ProductCard = ({
  image,
  category,
  name,
  price,
  sizes = ['XL', 'L', 'M', 'S', 'XS'],
  defaultSize = 'M',
  colors = [
    { id: 'black', bg: '#000000', border: '#ccc' },
    { id: 'green', bg: '#1abc9c', border: '#ccc' },
    { id: 'red',   bg: '#e74c3c', border: '#ccc' },
    { id: 'white', bg: '#ffffff', border: '#ccc' },
  ],
  defaultColor = 'black',
}) => {
  const [selectedSize,  setSelectedSize]  = useState(defaultSize)
  const [selectedColor, setSelectedColor] = useState(defaultColor)

  return (
    <div className="flex flex-col">

      {/* Image */}
      <div className="w-full overflow-hidden" style={{ height: '350px' }}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col items-center text-center mt-3 gap-1">

        {/* Category */}
        <p style={{
          fontSize: '14.45px',
          fontWeight: 400,
          lineHeight: '18.785px',
          fontFamily: "'Montserrat', sans-serif",
          color: '#000',
        }}>
          {category}
        </p>

        {/* Name */}
        <p style={{
          fontSize: '17px',
          fontWeight: 700,
          lineHeight: '19.55px',
          fontFamily: "'Montserrat', sans-serif",
          color: '#000',
          margin: '0 0 8.5px',
        }}>
          {name}
        </p>

        {/* Price */}
        <p style={{
          fontSize: '15.3px',
          fontWeight: 700,
          lineHeight: '19.89px',
          fontFamily: "'Montserrat', sans-serif",
          color: '#000',
        }}>
          ${price}
        </p>

        {/* Size Options */}
        <div className="flex gap-2.5 mt-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                padding: '8px 14px',
                fontSize: '13px',
                cursor: 'pointer',
                transition: '0.3s',
                fontFamily: "'Montserrat', sans-serif",
                background: 'transparent',
                border: selectedSize === size ? '1px solid #000' : '1px solid #ccc',
                fontWeight: selectedSize === size ? 600 : 400,
                color: '#000',
              }}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Color Options */}
        <div className="flex gap-3 mt-3">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setSelectedColor(color.id)}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: color.bg,
                cursor: 'pointer',
                border: selectedColor === color.id
                  ? '2px solid #000'
                  : color.id === 'white'
                  ? '1px solid #ccc'
                  : '2px solid transparent',
                transform: selectedColor === color.id ? 'scale(1.1)' : 'scale(1)',
                transition: '0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default ProductCard
