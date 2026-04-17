import React from 'react'
import { NavLink } from 'react-router-dom'

const defaultColumns = [
  {
    title: 'Menu',
    links: [
      { to: '/', label: 'Home' },
      { to: '/shop', label: 'Shop' },
      { to: '/about', label: 'About Us' },
      { to: '/contact', label: 'Contact us' },
    ],
  },
  {
    title: 'Categories',
    links: [
      { to: '/shop', label: 'Casual' },
      { to: '/shop', label: 'Work & Office' },
      { to: '/shop', label: 'Activewear' },
      { to: '/shop', label: 'Evening Dresses' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/contact', label: 'Contact Support' },
      { to: '/shop', label: 'FAQs' },
      { to: '/contact', label: 'Live Chat' },
      { to: '/contact', label: 'Returns' },
    ],
  },
  {
    title: 'Social Media',
    links: [
      { to: '/contact', label: 'Facebook' },
      { to: '/contact', label: 'Twitter' },
      { to: '/contact', label: 'Instagram' },
      { to: '/contact', label: 'Pinterest' },
    ],
  },
]

const SiteFooter = ({ columns = defaultColumns, backgroundClass = 'bg-white' }) => {
  return (
    <footer className={backgroundClass}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {columns.map((column) => (
            <div key={column.title}>
              <h6
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '20px',
                  lineHeight: '30px',
                  fontWeight: 700,
                  textAlign: 'left',
                }}
              >
                {column.title}
              </h6>
              <div className="mt-4 flex flex-col gap-2">
                {column.links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.to}
                    className="text-gray-500 hover:text-black transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '23px',
                    }}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 mt-12 pt-6 text-center">
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '23px',
              color: 'gray',
            }}
          >
            Copyright 2026 Clothing Store | Powered by Clothing Store
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
