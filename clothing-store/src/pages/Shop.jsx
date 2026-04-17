import React from 'react'
import ShopHeroSection from '../components/sections/shop/ShopHeroSection'
import ShopProductsSection from '../components/sections/shop/ShopProductsSection'
import SiteFooter from '../components/ui/SiteFooter'

const Shop = () => {
  return (
    <>
      <ShopHeroSection />
      <ShopProductsSection />
      <SiteFooter backgroundClass="bg-[#f0efef]" />
    </>
  )
}

export default Shop
