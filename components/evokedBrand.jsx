'use client'

import { useDarkMode } from '@/utils/DarkModeContext';
import React from 'react'
import Image from 'next/image';
import reasonLight from '@/public/assets/reasonLight.png'
import reasonDark from '@/public/assets/reasonDark.png'
import perfume from '@/public/assets/perfume.png'
import spray from '@/public/assets/spray.png'
import star from '@/public/assets/evokeStar.svg'
import { SelfConfidence, SaveMoney, TwentyFour, EcoFriendly, Compostable, Perfume, SelfConfidenceDark, TwentyFourDark, SaveMoneyDark } from '@/utils/ThreeReasons';
const EvokedBrand = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
      <section className={`md:pb-[200px] md:pt-0 pt-[40px] pb-[40px] md:overflow-hidden ${isDarkMode ? 'bg-[#171717]' : 'bg-white'}`}>
    
          <div className="">
          <div className="text-center md:hidden block pb-[50px] ">
            <h2 className={`text-[22px] md:text-5xl not-italic font-bold leading-[normal] uppercase ${isDarkMode ? 'text-white' : 'text-primary'}`}>Why choose Evoked?</h2>
            <div className="flex justify-center mt-[40px] ">
                  <div className="flex md:flex-row flex-col justify-center gap-x-[50px] md:gap-y-0 gap-y-[30px] md:mt-[50px]">
                      <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[30px]">
                          {
                              isDarkMode ? <SelfConfidenceDark className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border shadow-[2px_2px_0px_0px_#FFF] border-solid border-white bg-primary`} color='white'/> : <SelfConfidence className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border border-[color:var(--Brand,#28282A)] shadow-[2px_2px_0px_0px_#171717] border-solid bg-white`} color='#171717'/>
                          }
                          <p className={`${isDarkMode ? 'text-white' : 'text-primary'} w-[261px] text-center text-lg not-italic font-normal leading-[120%]`}>Feel confident. Get compliments. Bring your best self daily.</p>
                      </div>
                      <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[30px]">
                          {
                              isDarkMode ? <TwentyFourDark className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border shadow-[2px_2px_0px_0px_#FFF] border-solid border-white bg-primary`} color='white'/> : <TwentyFour className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border border-[color:var(--Brand,#28282A)] shadow-[2px_2px_0px_0px_#171717] border-solid bg-white`} color='#171717'/>
                          }
                          <p className={`${isDarkMode ? 'text-white' : 'text-primary'} w-[261px] text-center text-lg not-italic font-normal leading-[120%]`}>Feel confident. Get compliments. Bring your best self daily.</p>
                      </div>
                      <div className="flex flex-col items-center gap-y-[15px] md:gap-y-[30px]">
                          {
                              isDarkMode ? <SaveMoneyDark className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border shadow-[2px_2px_0px_0px_#FFF] border-solid border-white bg-primary`} color='white'/> : <SaveMoney className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border border-[color:var(--Brand,#28282A)] shadow-[2px_2px_0px_0px_#171717] border-solid bg-white`} color='#171717'/>
                          }
                          <p className={`${isDarkMode ? 'text-white' : 'text-primary'} w-[261px] text-center text-lg not-italic font-normal leading-[120%]`}>Feel confident. Get compliments. Bring your best self daily.</p>
                      </div>
                      </div>
                      </div>
            </div>
          <div className="bg-evoked bg-cover bg-center md:mb-0 mb-[80px] md:pt-[70px] md:pb-[747px] md:h-auto h-[496px] ">
              <div className="text-center md:block hidden ">
            <h2 className="text-white text-5xl not-italic font-bold leading-[normal] uppercase">Why choose Evoked?</h2>
            <div className="flex justify-center">
                  <div className="flex justify-center gap-x-[50px] md:mt-[50px]">
                      <div className="flex flex-col items-center gap-y-[30px]">
                          {
                              isDarkMode ? <SelfConfidenceDark className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border shadow-[2px_2px_0px_0px_#FFF] border-solid border-white bg-primary`} color='white'/> : <SelfConfidence className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border border-[color:var(--Brand,#28282A)] shadow-[2px_2px_0px_0px_#171717] border-solid bg-white`} color='#171717'/>
                          }
                          <p className={`text-white w-[261px] text-center text-lg not-italic font-normal leading-[120%]`}>Feel confident. Get compliments. Bring your best self daily.</p>
                      </div>
                      <div className="flex flex-col items-center gap-y-[30px]">
                          {
                              isDarkMode ? <TwentyFourDark className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border shadow-[2px_2px_0px_0px_#FFF] border-solid border-white bg-primary`} color='white'/> : <TwentyFour className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border border-[color:var(--Brand,#28282A)] shadow-[2px_2px_0px_0px_#171717] border-solid bg-white`} color='#171717'/>
                          }
                          <p className={`text-white w-[261px] text-center text-lg not-italic font-normal leading-[120%]`}>Feel confident. Get compliments. Bring your best self daily.</p>
                      </div>
                      <div className="flex flex-col items-center gap-y-[30px]">
                          {
                              isDarkMode ? <SaveMoneyDark className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border shadow-[2px_2px_0px_0px_#FFF] border-solid border-white bg-primary`} color='white'/> : <SaveMoney className={`flex items-start gap-2.5 p-2.5 rounded-[var(--md,8px)] border border-[color:var(--Brand,#28282A)] shadow-[2px_2px_0px_0px_#171717] border-solid bg-white`} color='#171717'/>
                          }
                          <p className={`text-white w-[261px] text-center text-lg not-italic font-normal leading-[120%]`}>Feel confident. Get compliments. Bring your best self daily.</p>
                      </div>
                      </div>
                      </div>
            </div>
          </div>
          </div>
          {/* Second Step */}
          <div className="mx-auto md:w-auto w-[90%] md:mt-[193px] relative">
              <h3 className={`text-start md:text-center md:text-5xl text-[22px] not-italic font-bold leading-[normal] uppercase ${isDarkMode ? 'text-white' : 'text-[#28282A]'}`}>But wait, there’s more…</h3>
              <div className="md:flex md:flex-row flex flex-col items-start justify-center md:gap-[100px] gap-[30px] md:mt-[100px] mt-[40px]">
                <div className="md:flex md:flex-row flex flex-col items-start justify-center md:gap-[100px] gap-[30px]">
              <div className={`flex flex-col md:items-center items-start gap-[15px] md:gap-[30px]`}>
                  <button className={`flex items-start gap-2.5 p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)] shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white'}`}>
                      <EcoFriendly className={`md:h-auto md:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                  <p className={`  md:w-[348px] w-[263px] text-start md:text-center md:text-[22px] not-italic font-normal leading-[normal] text-[16px] ${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--Brand,#28282A)]'}`}>No harsh formulas. Vegan-Friendly. Never tested on animals.</p>
              </div>
              <div className={`flex flex-col md:items-center items-start gap-[15px] md:gap-[30px]`}>
                  <button className={`flex items-start gap-2.5 p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)] shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white'}`}>
                      <Compostable className={`md:h-auto md:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                  <p className={`  md:w-[348px] w-[200px] text-start md:text-center md:text-[22px] not-italic font-normal leading-[normal] text-[16px] ${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--Brand,#28282A)]'}`}>100% sustainably sourced ingredients and packaging.</p>
              </div>
              <div className={`flex flex-col md:items-center items-start gap-[15px] md:gap-[30px]`}>
                  <button className={`flex items-start gap-2.5 p-2.5 border-solid rounded-[var(--md,8px)] border  ${isDarkMode ? 'border-[color:var(--black,#fff)] shadow-[4px_4px_0px_0px_#fff] bg-[#171717]' : 'border-[color:var(--black,#171717)] shadow-[4px_4px_0px_0px_#171717] bg-white'}`}>
                      <Perfume className={`md:h-auto md:w-auto h-[25px] w-[25px]`} color={isDarkMode ? '#FFFFFFCC' : '#28282A'}/>
                  </button>
                  <p className={` md:w-[260px] w-[185px] text-start md:text-center md:text-[22px] not-italic font-normal leading-[normal] text-[16px] ${isDarkMode ? 'text-[#FFFFFFCC]' : 'text-[color:var(--Brand,#28282A)]'}`}>Try it and love it or money back guaranteed..</p>
              </div>
                  </div>
                  </div>
             <Image className='absolute md:top-[-90px] md:right-0 top-[66%] md:translate-y-0 translate-y-[-68%] right-[-5.5%] md:h-[489px] md:w-[430px] w-[160px] h-[172px] object-contain' src={spray} alt='Spray' />
          </div>
    </section>
  )
}

export default EvokedBrand