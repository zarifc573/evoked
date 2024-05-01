import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import { DarkModeProvider } from '@/utils/DarkModeContext'
import Carousel from './carousel'
import EvokedBrand from './evokedBrand'
import OtherBrands from './OtherBrands'
import Accordion from './Accordion'
import Story from './Story'
import Pricing from './Pricing'
import Review from './Review'
// import BodyComponent from '@/utils/BodyComponent'

const Main = () => {
  return (
    <div>
      <DarkModeProvider>
        {/* <BodyComponent/> */}
          <Navbar />
        <Hero />
        <Carousel />
        <EvokedBrand />
        <OtherBrands />
        <Pricing/>
        <Review/>
        <Story/>
          <Accordion />
      </DarkModeProvider>
    </div>
  )
}

export default Main