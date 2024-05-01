"use client"

import { useDarkMode } from '@/utils/DarkModeContext';
import React from 'react'
import Image from 'next/image';
import listLight from '@/public/assets/listLight.png'
import listDark from '@/public/assets/Group 8 (2).png'
import black from '@/public/assets/blackPerfume.png'
import scent from '@/public/assets/scent.png'

const OtherBrands = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
      <section className={`lg:py-[60px] py-[30px] ${isDarkMode ?  'bg-[#28282A]' : 'bg-[#F4F4F4]'}`}>
          <h2 className={`text-center lg:text-5xl text-[22px] not-italic font-bold leading-[normal] uppercase ${isDarkMode ? 'text-white' : 'text-[#28282A]'}`}>EVOKED VS OTHERS</h2>
          <div className="flex items-center lg:justify-between justify-center lg:mx-0 mx-auto mt-[20px] lg:mt-[50px] lg:w-auto w-[90%]">
          <Image className='lg:block hidden' src={black} alt='Black'/>
              <Image src={isDarkMode ? listDark : listLight} alt='Lists'/>
              <Image className='mr-[22px] lg:block hidden' src={scent} alt='Scent'/>
          </div>
    </section>
  )
}

export default OtherBrands