import React from 'react'
import ShopHeroSection from '../components/ShopHeroSection'
import ShopProductsSection from '../components/ShopProductsSection'
import SiteFooter from '../components/SiteFooter'

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
