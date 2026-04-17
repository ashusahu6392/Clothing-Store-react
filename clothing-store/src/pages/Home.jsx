import React from 'react'
import Hero from '../components/Hero'
import MostPopular from '../components/MostPopular'
import BagCollectionSection from '../components/BagCollectionSection'
import WorkOfficeSection from '../components/WorkOfficeSection'
import FashionReinventedSection from '../components/FashionReinventedSection'
import NewestProductsSection from '../components/NewestProductsSection'
import TestimonialSection from '../components/TestimonialSection'
import FeaturesSection from '../components/FeaturesSection'
import ExploreSection from '../components/ExploreSection'
import SiteFooter from '../components/SiteFooter'

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
