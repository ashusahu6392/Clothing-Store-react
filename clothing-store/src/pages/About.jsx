import React from 'react'
import AboutHeroSection from '../components/sections/about/AboutHeroSection'
import AboutStorySection from '../components/sections/about/AboutStorySection'
import AboutCustomerSection from '../components/sections/about/AboutCustomerSection'
import AboutSustainabilitySection from '../components/sections/about/AboutSustainabilitySection'
import ExploreSection from '../components/sections/shared/ExploreSection'
import SiteFooter from '../components/ui/SiteFooter'
import exploreBackground from '../assets/images/bg-005.jpg'

const About = () => {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutCustomerSection />
      <AboutSustainabilitySection />
      <ExploreSection backgroundImage={exploreBackground} />
      <SiteFooter />
    </>
  )
}

export default About
