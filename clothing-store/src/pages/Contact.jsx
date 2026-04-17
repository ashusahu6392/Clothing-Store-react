import React from 'react'
import ContactHeroSection from '../components/ContactHeroSection'
import ContactFormSection from '../components/ContactFormSection'
import ContactMapSection from '../components/ContactMapSection'
import FeaturesSection from '../components/FeaturesSection'
import ExploreSection from '../components/ExploreSection'
import SiteFooter from '../components/SiteFooter'
import exploreBackground from '../assets/images/bg-005.jpg'

const Contact = () => {
  return (
    <>
      <ContactHeroSection />
      <ContactFormSection />
      <ContactMapSection />
      <FeaturesSection />
      <ExploreSection backgroundImage={exploreBackground} />
      <SiteFooter />
    </>
  )
}

export default Contact
