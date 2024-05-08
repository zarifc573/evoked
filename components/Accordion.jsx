"use client"

import { Add, Minus } from '@/utils/AddMinus';
import { useDarkMode } from '@/utils/DarkModeContext';
import React, { useState } from 'react'
import { Collapse } from 'react-collapse';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import footerLogo from '@/public/assets/footerIcon.svg'
import whiteLogo from '@/public/assets/whiteLogo.svg'
import lightMinus from '@/public/assets/lightMinus.svg'
import lightPlus from '@/public/assets/lightPlus.svg'
import darkMinus from '@/public/assets/darkMinus.svg'
import darkPlus from '@/public/assets/darkPlus.svg'
import dark from '@/public/assets/darkmode.png'
import light from '@/public/assets/lightmode.png'
import Image from 'next/image';
const AccordionItem = ({open, toggle, title, desc}) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggle} className={`flex mb-[30px] lg:w-[690px] w-full flex-col items-start gap-x-[15px] mx-auto lg:p-[20px]  py-[15px] px-[20px] rounded-[var(--md,8px)] border  border-solid ${isDarkMode ? 'border-[color:var(--black,#fff)] bg-[#28282AB2]' : 'bg-white border-[color:var(--black,#171717)]'}`}>
      <div className="flex flex-col">
      <div  className={`flex justify-center gap-x-[44px] items-center cursor-pointer`}>
        <p className={` fontFeature lg:text-[22px] text-start text-[16px] not-italic font-medium leading-[120%] lg:leading-7 ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>{title}</p>
        <div className="">
            {/* {open ? <CiSquareMinus className='text-[36px] text-[#171717]' /> : <CiSquarePlus className='text-[36px] text-[#171717]' />} */}
            {/* {open ?  <Minus color={isDarkMode ? 'white': '#171717'} /> : <Add color={isDarkMode ? 'white': '#171717'}/> } */}
            {
              open ? isDarkMode ? <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={darkMinus} alt='Minus'/> : <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={lightMinus} alt='Minus'/>  : isDarkMode ? <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={darkPlus} alt='Plus'/> : <Image className='lg:w-auto lg:h-auto h-[28px] w-[60px]' src={lightPlus} alt='Minus'/>
            }
        </div>
        </div>
        
{open !== null && (
          <div className={`h-[1px] text-start bg-[rgba(168,168,175,0.7)] transition-height duration-500 ${open ? ' mt-[10px]' : 'opacity-0 '}`}></div>
        )}
        
       
      
      </div>
      <Collapse isOpened={open}>
        
        <div className={`mt-[15px] text-start lg:w-[576.052px] lg:text-[22px] text-[12px] not-italic font-light leading-7 fontFeature ${isDarkMode ? 'text-[#FFFFFFB2]' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}>{desc}</div>
      </Collapse>


    </button>
  )
}


const Accordion = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [open, setOpen]= useState(false)
  const toggle = (index) => {
    if (open === index) { 
      return  setOpen(null); 
    }
    setOpen(index)
  }
    const accordioData = [
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
        {title:'What is Webflow and why is it the best website builder?', desc:'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.'},
    ]
  return (
    <section className={`lg:pt-[80px] lg:pb-[192px] pb-[40px]  ${isDarkMode ? 'bg-[#171717]' : 'bg-white'}`}>
      <div className="lg:max-w-container w-[90%] mx-auto">
        <div className="pb-[50px]">

        
        <h2 className={` text-center text-5xl not-italic font-bold leading-[130%] uppercase mb-[30px] lg:mb-[80px] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>FAQ</h2>
      {accordioData.map((item, index) => (
        <AccordionItem
          key={index}
          open={index === open}
          title={item.title}
          desc={item.desc}
          toggle={()=>toggle(index)}
        />
        
      ))
          }
        </div>
        {/* Footer */}
        {/* <div className="lg:pt-[50px] lg:mb-[150px] mb-[80px]">
        <div className={`lg:w-[1398px]  mx-auto h-[1px] ${isDarkMode ? 'bg-white' : 'bg-[#171717]'}`}>
        <div className="flex lg:flex-row flex-col items-center justify-between pt-[15px] lg:pt-[20px]">

        <div className="lg:hidden block">
            {
              isDarkMode ? <Image className=' lg:w-auto lg:h-auto w-[150px] h-[55px]' src={whiteLogo} alt='Logo' /> : <Image className=' lg:w-auto lg:h-auto w-[150px] h-[55px]' src={footerLogo} alt='Logo' />
              }
              </div>

            <span className={`fontVariant flex items-center gap-x-[20px] text-[14px] lg:text-xl not-italic font-bold leading-[140%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>2024 BE EVOKED
          
    <button className='lg:block hidden' onClick={toggleDarkMode}>
                      <div className={`border border-solid ${isDarkMode ? 'w-[100px] border-white transition duration-300 h-10 shrink-0 rounded-[106.623px] bg-[#454547] py-[5px] px-[10px] flex items-center justify-between relative' : 'border-primary w-[100px] h-10 shrink-0 rounded-[106.623px] bg-[#f4f4f4] transition duration-500 py-[5px] px-[10px] flex items-center justify-between relative'}`} >
                           {isDarkMode ?  <Image className='absolute transition duration-300 top-[50%] translate-y-[-50%] right-[10px]' src={light}/> : <Image className='absolute top-[50%] transition duration-500 translate-y-[-50%] left-[10px]' src={dark}/>}
       
        
      </div>
     
    </button>
            
            </span>
            <button className='lg:hidden block lg:my-0 py-[15px]' onClick={toggleDarkMode}>
                      <div className={isDarkMode ? 'lg:w-[100px] w-[60px] border border-solid border-white transition duration-300 lg:h-10 h-[30px] shrink-0 bg-[#454547] lg:rounded-[106.623px] rounded-[40px] py-[3px] lg:py-[5px] px-[10px] flex items-center justify-between relative' : 'lg:w-[100px] w-[60px] border border-solid border-primary lg:h-10 h-[30px] shrink-0 lg:rounded-[106.623px] rounded-[40px] py-[3px] lg:py-[5px] bg-[#f4f4f4] transition duration-500 px-[10px] flex items-center justify-between relative'} >
                           {isDarkMode ?  <Image className='absolute transition duration-300 top-[50%] translate-y-[-50%] right-[5px] lg:h-auto lg:w-auto w-[20px] h-[20px]' src={light}/> : <Image className='absolute transition duration-300 top-[50%] translate-y-[-50%] left-[5px] lg:h-auto lg:w-auto w-[20px] h-[20px]' src={dark}/>}
       
        
      </div>
     
    </button>
            <div className="lg:block hidden">
            {
              isDarkMode ? <Image className='ml-[50px]' src={whiteLogo} alt='Logo' /> : <Image className='ml-[50px]' src={footerLogo} alt='Logo' />
              }
              </div>
            
            <span className={`fontVariant text-[14px] lg:mt-0 mt-[10px] lg:text-xl not-italic font-bold leading-[140%] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Terms & Conditions | Privacy Policy</span>
          </div>
        </div>
        </div> */}
      </div>
      
    </section>
  )
}

export default Accordion