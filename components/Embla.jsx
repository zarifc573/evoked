"use client"

import { useDarkMode } from "@/utils/DarkModeContext";
import '@/app/globals.css'
import useEmblaCarousel from 'embla-carousel-react'
import transform from '@/public/assets/transformed.png'
import star from '@/public/assets/blackStar.svg'
import Image from 'next/image';
import { Love2, Love3 } from "@/utils/Love";
const EmblaSlider = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const slides = [
        {link:'video' , link2:  'videoDark'},
        {link:'video' , link2:  'videoDark'},
        {link:'video' , link2:  'videoDark'},
        
  ]
  const options = { loop: true }
// const SLIDE_COUNT = 5
// const slides = Array.from(Array(SLIDE_COUNT).keys())
  // const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  return (
    <section className={`pt-[100px] ${isDarkMode ? 'bg-primary' : 'bg-white'}`}>
    <div className="embla">
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((index) => (
          <div className={`embla__slide ${isDarkMode ? 'bg-[#28282A]' : 'bg-white'}`} key={index}>
            <div className="embla__slide__number flex h-[488px] items-end gap-10">
              <div className={`relative flex h-[412px] flex-col justify-end items-start gap-[16.756px] px-[16.756px] rounded-[0px_205.767px_0px_0px] ${isDarkMode ? 'bg-[#454547]' : 'bg-[#f4f4f4]'} `}>
                <Image src={transform} alt="Image" />
                <div className="rounded-[155.611px] bg-[#FFFFFFAD] absolute left-[87.111px] bottom-[32.767px] flex justify-center items-center p-[17.784px]">
                  <Image src={star} alt="Star" /> 
                  <Image src={star} alt="Star" /> 
                  <Image src={star} alt="Star" /> 
                  <Image src={star} alt="Star" /> 
                  <Image src={star} alt="Star" /> 
                </div>
                <Love2 color={isDarkMode ? 'white' : 'rgba(40, 40, 42, 0.70)'} className='absolute left-[17.999px] top-[84px]'/>
                <Love3 color={isDarkMode ? 'white' : '#28282A'} className='absolute right-[7.651px] top-[-30.845px]'/>
              </div>
              <div className="flex flex-col justify-center items-start gap-[52px] self-stretch pl-0 pr-[60px] py-[60px]">
                <span className={`text-5xl not-italic font-bold leading-[normal] uppercase ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Hear from our customers</span>
                <span className={`w-[686px] text-[color:var(--Gray,#868686)] text-[32px] not-italic font-normal leading-[150%]`}>Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.</span>
                <span className={`text-2xl not-italic font-bold leading-[18px] ${isDarkMode ? 'text-white' : 'text-[color:var(--Brand,#28282A)]'}`}>Patricia O'Keefe</span>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


      </div>
      </section>
  )
}

export default EmblaSlider