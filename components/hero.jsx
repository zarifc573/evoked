'use client'
import Image from 'next/image';
import banner from '@/public/assets/banner.png';
import bannerMobile from '@/public/assets/bannerMobile.png';
import arrow from '@/public/assets/arrowRight.svg';
import checkmart from '@/public/assets/checkmart.svg';
import { useDarkMode } from '@/utils/DarkModeContext';
import CheckMart from '@/utils/CheckMart';
import ArrowRight from '@/utils/ArrowRight';

const Hero = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  let Lists = [
    { name: "Smell delicious, get compliments with iconic designer-like scents at wallet-friendly prices" },
    { name: "Eau De Parfum, Lasts 24h on average (2-3x longer than typical designer scents)" },
    { name: "Vegan-Friendly, Suitable for all skin types, Hand-mixed in small batches" },
    { name: "Try 100% risk-free first, then decide with our 30-day money back promise" },
  ];
  return (
    <section className={`relative lg:pb-0  ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'} `}>
     <div className={`lg:block hidden`}>
     <div className={`lg:max-w-container w-[90%] mx-auto flex lg:flex-row flex-col items-center gap-x-[95px] ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'} `}>
        <div className="lg:w-1/2 pr-10 lg:py-[84px]">
          <div className=" lg:static absolute top-0 left-0 z-20 lg:mt-0 mt-[190px]">
          <h1 className={`${isDarkMode ? 'lg:text-white duration-300' : 'lg:text-[color:var(--Brand,#28282A)] duration-300'} lg:text-[58px] text-white lg:w-auto text-center lg:text-start text-[24px] not-italic font-bold leading-[130%] uppercase`}>
            Your secret to elevate every beginning.
          </h1>
          <p className={`${isDarkMode ? 'lg:text-[#FFFFFFCC] duration-300' : 'lg:text-[color:var(--brand-70,rgba(40,40,42,0.70))] duration-300'} lg:text-[28px] text-[16px] text-[#FFFFFFCC] text-center lg:w-auto w-[249px] lg:text-start not-italic font-medium leading-[normal] mt-[20px] lg:mx-0 mx-auto`}>Take on the world with scents that put you in the spotlight.</p>
         </div>
<div className={`lg:w-auto w-[90%] lg:static lg:visible invisible  ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'}`}>
          <div className={`inline-flex cursor-auto flex-col items-start gap-5 p-5 rounded-md border  border-solid mt-[40px] ${isDarkMode ? 'border-[#fff] duration-300' : 'border-[color:var(--Brand,#28282A)] duration-300'} `}>
            {/* Add your content inside this div */}
           
              {Lists.map((list) => (
                 <div className="flex items-center gap-2.5">
                 {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span key={list.name} className={`lg:text-lg text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>{list.name}</span>
                 </div>
              ))}
                
           
           
            </div>
            <div className="lg:pb-0 pb-[35px]">
          <button className={`mt-[40px]  lg:mx-0 mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={`lg:text-[22px] text-[16px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>Build Your Set & Save</span>
            {/* <Image src={arrow} alt="Arrow Right" /> */}
            <ArrowRight color={ isDarkMode ? '#171717' : 'white'} />
              </button>
              </div>
            </div>
          </div>
     
        <div className={`absolute top-0 right-0 lg:border-l-[2px] lg:border-b-[2px]  ${isDarkMode ? 'lg:border-white' : 'lg:border-[#171717]'} `}>
          <Image className=' lg:h-[724px] h-[462px] object-cover lg:w-full hidden lg:block' src={banner} alt='Hero'  />
          <Image className='lg:hidden ' src={bannerMobile} alt='Hero'  />
          </div>
               {/* Mobile device */}
               <div className={`lg:w-auto w-[90%] lg:mt-0 mt-[50px] lg:invisible visible  ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'}`}>
          <div className={`inline-flex cursor-auto flex-col items-start gap-5 p-5 rounded-md border  border-solid mt-[40px] ${isDarkMode ? 'border-[#fff] duration-300' : 'border-[color:var(--Brand,#28282A)] duration-300'} `}>
            {/* Add your content inside this div */}
           
              {Lists.map((list) => (
                 <div className="flex items-center gap-2.5">
                 {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span key={list.name} className={`lg:text-lg text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>{list.name}</span>
                 </div>
              ))}
                
           
           
            </div>
            <div className="lg:pb-0 ">
          <button className={`mt-[20px]  lg:mx-0 mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={`lg:text-[22px] text-[16px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>Build Your Set</span>
            {/* <Image src={arrow} alt="Arrow Right" /> */}
            <ArrowRight color={ isDarkMode ? '#171717' : 'white'} />
              </button>
              </div>
            </div>
        </div>
      <div className={`h-[1px] overflow-hidden lg:mt-0 mt-[30px] w-full ${isDarkMode ? 'bg-white' : 'bg-[#171717]'}`}></div>
        </div>

        {/* Mobile device (Hero)  */}
        <div className="lg:hidden block pb-[20px]">
          <div className="bg-hero bg-cover bg-center pt-[186px] pb-[180px]">
          <div className="">
          <h1 className={`${isDarkMode ? 'text-white duration-300' : 'text-[color:var(--Brand,#28282A)] duration-300'}  text-white w-auto text-center  text-[24px] not-italic font-bold leading-[130%] uppercase`}>
            Your secret to elevate every beginning.
          </h1>
          <p className={`${isDarkMode ? 'text-[#FFFFFFCC] duration-300' : 'text-[#FFFFFFCC] duration-300'}  text-[16px]  text-center  w-[249px] not-italic font-medium leading-[normal] mt-[10px] mx-auto`}>Take on the world with scents that put you in the spotlight.</p>
         </div>
         

          </div>
          <div className={`w-[90%] mt-[30px] flex flex-col justify-center mx-auto  ${isDarkMode ? 'bg-[#171717] duration-300' : 'bg-[#F4F4F4] duration-300'}`}>
          <div className={`inline-flex cursor-auto flex-col justify-center items-start gap-5 p-5 rounded-md border  border-solid ${isDarkMode ? 'border-[#fff] duration-300' : 'border-[color:var(--Brand,#28282A)] duration-300'} `}>
            {/* Add your content inside this div */}
           
              {Lists.map((list) => (
                 <div className="flex items-center gap-2.5">
                 {/* <Image src={checkmart} alt="Checkmark Icon" /> */}
                  <CheckMart color={isDarkMode ? 'white' : '#28282A'} />
                 <span key={list.name} className={` text-[12px] text-start not-italic font-normal leading-[normal] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'} `}>{list.name}</span>
                 </div>
              ))}
                
           
           
            </div>
            <div className="pb-0 ">
          <button className={`mt-[20px] mx-auto flex items-center gap-2.5 lg:px-[30px] lg:py-[18px] px-[20px] py-[12px] rounded-[var(--md,8px)] border border-solid  ${isDarkMode ? 'border-[#28282A] bg-white shadow-[4px_4px_0px_0px_#fff]' : 'border-white bg-[#171717] shadow-[4px_4px_0px_0px_#171717]'}`}>
            <span className={` text-[16px] not-italic font-semibold leading-[normal] ${isDarkMode ? 'text-[#171717]' : 'text-white'}`}>Build Your Set</span>
            {/* <Image src={arrow} alt="Arrow Right" /> */}
            <ArrowRight color={ isDarkMode ? '#171717' : 'white'} />
              </button>
              </div>
            </div>
        </div>

    </section>
  );
};

export default Hero;
