import React from 'react'
import Hero from '../components/sections/home/Hero'
import MostPopular from '../components/sections/home/MostPopular'
import BagCollectionSection from '../components/sections/home/BagCollectionSection'
import WorkOfficeSection from '../components/sections/home/WorkOfficeSection'
import FashionReinventedSection from '../components/sections/home/FashionReinventedSection'
import NewestProductsSection from '../components/sections/home/NewestProductsSection'
import TestimonialSection from '../components/sections/home/TestimonialSection'
import FeaturesSection from '../components/sections/shared/FeaturesSection'
import ExploreSection from '../components/sections/shared/ExploreSection'
import SiteFooter from '../components/ui/SiteFooter'

const Home = () => {
  return (
    <>
    <Hero />
    <MostPopular />
    <BagCollectionSection />
    <WorkOfficeSection />
    <FashionReinventedSection />
    <NewestProductsSection />
    <TestimonialSection />
    <FeaturesSection />
    <ExploreSection />
    <SiteFooter />
    </>
  )
}

export default Home
