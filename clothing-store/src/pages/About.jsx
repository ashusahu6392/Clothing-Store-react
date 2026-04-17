import React from 'react'
import AboutHeroSection from '../components/AboutHeroSection'
import AboutStorySection from '../components/AboutStorySection'
import AboutCustomerSection from '../components/AboutCustomerSection'
import AboutSustainabilitySection from '../components/AboutSustainabilitySection'
import ExploreSection from '../components/ExploreSection'
import SiteFooter from '../components/SiteFooter'
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
