import React from 'react'
import PrimaryHeader from '../Components/primary/header/Header'
import PrimaryBanner from '../Components/primary/banner/Banner'
import PrimarySectionOne from '../Components/primary/Section1/SectionOne'
import HowItWorks from '../Components/primary/section2/SectionTwo'

function LandingPage() {
  return (
    <>
        <PrimaryHeader />
        <PrimaryBanner />
        <PrimarySectionOne />
        <HowItWorks />
    </>
  )
}

export default LandingPage