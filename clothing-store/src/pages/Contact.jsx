import React from 'react'
import ContactHeroSection from '../components/sections/contact/ContactHeroSection'
import ContactFormSection from '../components/sections/contact/ContactFormSection'
import ContactMapSection from '../components/sections/contact/ContactMapSection'
import FeaturesSection from '../components/sections/shared/FeaturesSection'
import ExploreSection from '../components/sections/shared/ExploreSection'
import SiteFooter from '../components/ui/SiteFooter'
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
