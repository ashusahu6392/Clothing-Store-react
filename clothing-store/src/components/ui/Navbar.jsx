import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, ShoppingCart, X, Menu } from 'lucide-react'
import logo from '../../assets/logo-01.svg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const navStyle = ({ isActive }) =>
    `text-white text-sm font-semibold font-['Montserrat'] mx-2.5 pb-1 transition-colors duration-200
     hover:text-white/70
     ${isActive ? 'border-b-2 border-white' : ''}`

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-7 py-4">

      {/* Main Bar */}
      <div className="container-fluid px-4 py-4 flex items-center justify-between relative">

        {/* Left — Nav Links (hidden on mobile) */}
        <ul className="hidden lg:flex items-center list-none m-0 p-0">
          <li><NavLink to="/"        className={navStyle}>Home</NavLink></li>
          <li><NavLink to="/shop"    className={navStyle}>Shop</NavLink></li>
          <li><NavLink to="/about"   className={navStyle}>About</NavLink></li>
          <li><NavLink to="/contact" className={navStyle}>Contact</NavLink></li>
        </ul>

        {/* Center — Logo (absolutely centered) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <NavLink to="/">
            <img src={logo} alt="Femme Wardrobe" className="h-12 w-auto" />
          </NavLink>
        </div>

        {/* Right — Icons */}
        <div className="flex items-center gap-4 ml-auto">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-white hover:text-white/70 transition-colors"
            aria-label="Toggle search"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>

          <NavLink
            to="/cart"
            className="relative text-white hover:text-white/70 transition-colors"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            {/* Cart badge — swap 3 with your real cart count */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px]
                             w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              3
            </span>
          </NavLink>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white hover:text-white/70 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Search Bar (slides in below navbar) */}
      {searchOpen && (
        <div className="px-6 py-3 bg-black/50 backdrop-blur-sm">
          <input
            type="text"
            autoFocus
            placeholder="Search for products..."
            className="w-full bg-transparent text-white placeholder-white/50 text-sm
                       outline-none border-b border-white/40 pb-1"
          />
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/70 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {[
            { to: '/',        label: 'Home'    },
            { to: '/shop',    label: 'Shop'    },
            { to: '/about',   label: 'About'   },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-white text-sm font-semibold font-['Montserrat']
                 ${isActive ? 'opacity-100 border-b border-white pb-1 w-fit' : 'opacity-80'}`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

    </nav>
  )
}

export default Navbar
