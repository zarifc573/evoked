"use client";
import { useDarkMode } from "@/utils/DarkModeContext";
import { Box1, Box2, DownArrow2, Plus, Minus } from "@/utils/Helpers";
import Image from "next/image";
import circle from "@/public/assets/circle.svg";
import checkedCircle from "@/public/assets/checkedCircle.svg";
import React, { useState, useEffect, useRef } from "react";



const Plans = () => {
  const [selectedTrend, setSelectedTrend] = useState(true);
  const data = [
    { name:'1 Perfume', rate:'£40/2 months', rate50:'£20/2 months', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'1 x 100ml perfume (lasts 2 months)', lastPoint:'1 x 5ml sample (free compliment)',spray:'£0.04 per spray' },
    { name:'2 Perfumes', rate:'£60/4 months',rate50:'£30/4 months',discount50:'£40 ', discount:'£80 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'2 x 100ml perfumes (lasts 4 months)', lastPoint:'2 x 5ml samples (free compliments)',spray:'£0.03 per spray', trend: selectedTrend, trendName: 'MOST POPULAR' },
    { name:'3 Perfumes', rate:'£75/6 months', rate50:'£37/6 months',discount50:'£60 ',discount:'£120 ', shipping:'Free shipping & returns. ', includes:'What’s included:', firstPoint:'3 x 100ml perfumes (lasts 6 months)', lastPoint:'3 x 5ml samples (free compliments)',spray:'£0.02 per spray', trend: selectedTrend, trendName: 'BEST VALUE' }
  ];

  // Ref to hold dropdown elements
  const dropdownRefs = useRef(data.map(() => React.createRef()));

  // State variables
  const [isOpen, setIsOpen] = useState(data.map(() => false)); // isOpen for each dropdown
  const [selectedPlan, setSelectedPlan] = useState('2 Perfumes');
 
  const [selectedPlanColors, setSelectedPlanColors] = useState(data.map(() => true)); // selectedPlanColor for each dropdown
  const [selectedOptions, setSelectedOptions] = useState(data.map(() => "100ml")); // selectedOption for each dropdown

  // Handle option change for a specific dropdown
  const handleOptionChange = (option, index) => {
    setSelectedOptions(prevOptions => prevOptions.map((value, i) => i === index ? option : value));
    setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? false : value)); // Close other dropdowns
  };

  // Handle plan change
  const handleOptionPlanChange = (option, index) => {
    setSelectedPlan(option);
    setSelectedPlanColors(prevColors => prevColors.map((value, i) => i === index ? true : value)); // Change color for this dropdown
  };

  // Toggle dropdown for a specific index
  const toggleDropdown = (index) => {
    setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? !value : false)); // Close other dropdowns
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event, index) => {
    if (dropdownRefs.current[index] && !dropdownRefs.current[index].current.contains(event.target)) {
      setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? false : value));
    }
  };

  useEffect(() => {
    const handleClickOutsideForAll = (event) => {
      isOpen.forEach((value, index) => handleClickOutside(event, index));
    };

    document.addEventListener("click", handleClickOutsideForAll);
    return () => {
      document.removeEventListener("click", handleClickOutsideForAll);
    };
  }, [isOpen]);

  return (
    data.map(({ name, rate, discount, shipping, includes, firstPoint, lastPoint, spray, rate50,discount50, trend, trendName }, index) => (
      <div className="">
      <div key={index} className={`flex flex-col items-start px-5 py-[30px] ${trend ? 'rounded-t-[var(--md,8px)] ' : 'rounded-[var(--md,8px)] '} border border-[color:var(--black,#171717)] border-solid  ${selectedPlan === name ? 'bg-primary ' : 'bg-white'} `}>
        <div className="flex items-center gap-5">
          <h6 className={` text-[38px] not-italic font-semibold leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{name}</h6>
          {/* Select  */}
          <div className="relative" ref={dropdownRefs.current[index]}>
            <span className="rounded-md shadow-sm">
              <button
                onClick={() => toggleDropdown(index)}
                type="button"
                className={`flex items-center gap-2.5 px-2.5 py-[5px] rounded-[var(--sm,4px)] border  border-solid  text-xl not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white border-white ' : 'text-[color:var(--Brand,#28282A)] border-[color:var(--Brand,#28282A)]'}`}
                id={`options-menu-${index}`}
                aria-haspopup="true"
                aria-expanded={isOpen[index] ? "true" : "false"}
              >
                {selectedOptions[index]}
                <DownArrow2 color={selectedPlan === name ? 'white' : '#28282A'} />
              </button>
            </span>

            {isOpen[index] && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby={`options-menu-${index}`}
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => handleOptionChange("100ml", index)}
                    className={`${selectedOptions[index] === "100ml" ? "" : ""} block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                    role="menuitem"
                  >
                    100ml
                  </button>
                  <button
                    onClick={() => handleOptionChange("50ml", index)}
                    className={`${selectedOptions[index] === "50ml" ? "bg-gray-100" : ""} block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                    role="menuitem"
                  >
                    50ml
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* CheckMark */}
          <div className="ml-[70px]">
            <Image onClick={() => handleOptionPlanChange(name, index)} src={selectedPlan === name ? checkedCircle : circle} alt="Circle" />
          </div>
        </div>
        <span  className={`text-[color:var(--Brand,#28282A)] text-[28px] not-italic font-normal leading-[normal] mt-[25px] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}><span className={` text-[22px] not-italic font-normal leading-[normal] line-through ${selectedPlan === name ? 'text-[rgba(255,255,255,0.80)] ' : 'text-[color:var(--Brand,#28282A)]'}`}>{selectedOptions[index] === "50ml" ? discount50 : discount}</span>{selectedOptions[index] === "50ml" ? rate50 : rate}</span>
        <span className={`flex mt-[10px] justify-center items-center gap-2.5 px-2.5 py-[5px] rounded-[var(--sm,4px)] border border-solid  text-sm not-italic font-normal leading-[120%] ${selectedPlan === name ? 'text-[#FFFFFFB2] border-[#FFFFFFB2] ' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))] border-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}>{shipping}</span>
        <span className={`mt-[30px] text-xl not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{includes}</span>
        <span className={` mt-[15px] text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{firstPoint}</span>
        <span className={` mt-[10px] text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{lastPoint}</span>
        <span className={` text-xl not-italic font-light leading-[normal] mt-[30px] ml-auto ${selectedPlan === name ? 'text-[#FFFFFFCC] ' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}>{spray}</span>
        </div>
        {
          trend && (
            <div className="flex justify-between items-center self-stretch p-5 rounded-[0px_0px_var(--md,8px)_var(--md,8px)] border-b border-l border-r   border-[color:var(--black,#171717)] border-solid">
              <span className={`text-[color:var(--black,#171717)] text-center mx-auto text-3xl not-italic font-bold leading-[normal]`}>
              {trendName}
              </span> 
            </div>
          )
        }
      </div>
    ))
  );
};


const Subscribe = () => {
  const [count, setCount] = useState(1)
  const data = [
    { name:'Perfume Set', rate:'£45', rate50:'£23', shipping:'Add 1 more to save £20',shippingProgress:'Add 1 more to get 1 x free perfume + £20 off', includes:'What’s included:', firstPoint:' x 100ml perfume (lasts 2 months)',firstPoint50:' x 50ml perfume (lasts 2 months)', lastPoint:' x 5ml sample (free compliment)',spray:'£0.05 per spray', discount:'£60', discount50:'£30' },
  ];
  const [rate, setRate] = useState(data[0].rate);
  const [rate50, setRate50] = useState(data[0].rate50);
  const [selector, setSelector] = useState(false);
  const [discount, setDiscount] = useState(data[0].discount);
  const [discount50, setDiscount50] = useState(data[0].discount50);
  const [firstPoint, setFirstPoint] = useState(data[0].firstPoint);
  const [firstPoint50, setFirstPoint50] = useState(data[0].firstPoint50);
  const [lastPoint, setLastPoint] = useState(data[0].lastPoint);
  const [spray, setSpray] = useState(data[0].spray);
  const [shipping, setShipping] = useState(data[0].shipping);
  const increment =()=> {
    //setCount(prevCount => prevCount+=1);
    setCount( (prevCount)=> {
      return (prevCount += 1);
    });
    if (count === 1) {
      setRate('£70'); // Update rate when count increases from 1 to 2
      setSelector(true)
      setDiscount('£90 ')
      setFirstPoint('x 100ml perfume (lasts 4 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('Add 1 more to save £45')
      setSpray('£0.04 per spray')

    }else if(count === 2){
      setRate( '£90' )
      setSelector(true)
      setDiscount('£135 ')
      setFirstPoint('x 100ml perfume (lasts 6 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('Add 1 more to save £80')
      setSpray('£0.03 per spray')
    } else if (count === 3) {
      setRate('£100')
      setSelector(true)
      setDiscount('£180 ')
      setFirstPoint('x 100ml perfume (lasts 8 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('You’ve unlocked max savings of £80! 🎉')
      setSpray('£0.02 per spray')
    }else if (count === 4) {
      setRate('£225')
      setSelector(false)
      setFirstPoint('x 100ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('No more savings here')
      setSpray('£0.05 per spray')
    }
    else if (count > 4) {
      setRate('£'+ (count * 45 ))
      setSelector(false)
      setFirstPoint('x 100ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('No more savings here')
      setSpray(`${rate.slice(1)/(count*1000)} per spray`)
    }
    // Rate for 50ml
    if (count === 1) {
      setRate50('£35');
      setSelector(true)
      setDiscount50('£45')
      setFirstPoint50('x 50ml perfume (lasts 4 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.04 per spray')
    }else if(count === 2){
      setRate50('£45')
      setSelector(true)
      setDiscount50('£67')
      setFirstPoint50('x 50ml perfume (lasts 6 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.03 per spray')
    } else if (count === 3) {
      setRate50('£50')
      setSelector(true)
      setDiscount50('£90')
      setFirstPoint50('x 50ml perfume (lasts 8 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.02 per spray')
    } else if (count === 4) {
      setRate50('£90')
      setSelector(false)
      setFirstPoint50('x 50ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.05 per spray')
    }
    else if (count > 4) {
      setRate50('£'+ Math.ceil((count * 45/2 )))
      setSelector(false)
      setFirstPoint50('x 50ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.05 per spray')
    } 
 
  }

  const decrement =()=> {
    setCount((prevCount)=> {
      if (prevCount > 1) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 1);
      }
    });
    if (count === 2) {
      setRate('£45');
      setSelector(false)
      setFirstPoint('x 100ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('Add 1 more to save £20)')
      setSpray('£0.05 per spray')
      
    }else if(count === 3){
      setRate('£70')
      setSelector(true)
      setDiscount('£90 ')
      setFirstPoint('x 100ml perfume (lasts 4 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('Add 1 more to save £45')
      setSpray('£0.04 per spray')
      
    } else if (count === 4) {
      setRate('£90'); 
      setSelector(true)
      setDiscount('£135 ')
      setFirstPoint('x 100ml perfume (lasts 6 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('Add 1 more to save £80')
      setSpray('£0.03 per spray')
    }else if (count === 5) {
      setRate('£100');
      setSelector(true)
      setDiscount('£180 ')
      setFirstPoint('x 100ml perfume (lasts 8 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('You’ve unlocked max savings of £80! 🎉')
      setSpray('£0.02 per spray')
    }
    else if (count > 5) {
      setRate('£' + Math.ceil((count - 2) * 45)); // Update rate for counts greater than 3
      setSelector(false)
      setFirstPoint('x 100ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setShipping('No more savings here')
      setSpray('£0.05 per spray')
    }
    // 50ml
    if (count === 2) {
      setRate50('£23'); // Update rate when count increases from 1 to 2
      setSelector(false)
      setFirstPoint50('x 50ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.05 per spray')
    }else if(count === 3){
      setRate50('£35')
      setSelector(true)
      setDiscount50('£45')
      setFirstPoint50('x 50ml perfume (lasts 4 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.04 per spray')
    } else if (count === 4) {
      setRate50('£45'); // Update rate for counts greater than 3
      setSelector(true)
      setDiscount50('£67')
      setFirstPoint50('x 50ml perfume (lasts 6 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.03 per spray')
    }else if (count === 5) {
      setRate50('£50'); // Update rate for counts greater than 3
      setSelector(true)
      setDiscount50('£90')
      setFirstPoint50('x 50ml perfume (lasts 8 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.02 per spray')
    }
    else if (count > 5) {
      setRate50('£' + Math.ceil((count - 2) * 45/2)); // Update rate for counts greater than 3
      setSelector(false)
      setFirstPoint50('x 50ml perfume (lasts 2 months)')
      setLastPoint('x 5ml sample (free compliment)')
      setSpray('£0.05 per spray')
    }
  }
  // Ref to hold dropdown elements
  const dropdownRefs = useRef(data.map(() => React.createRef()));

  // State variables
  const [isOpen, setIsOpen] = useState(data.map(() => false)); // isOpen for each dropdown
  const [selectedPlan, setSelectedPlan] = useState('Perfume Set');
 
  const [selectedPlanColors, setSelectedPlanColors] = useState(data.map(() => true)); // selectedPlanColor for each dropdown
  const [selectedOptions, setSelectedOptions] = useState(data.map(() => "100ml")); // selectedOption for each dropdown

  // Handle option change for a specific dropdown
  const handleOptionChange = (option, index) => {
    setSelectedOptions(prevOptions => prevOptions.map((value, i) => i === index ? option : value));
    setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? false : value)); // Close other dropdowns
  };

  // Handle plan change
  const handleOptionPlanChange = (option, index) => {
    setSelectedPlan(option);
    setSelectedPlanColors(prevColors => prevColors.map((value, i) => i === index ? true : value)); // Change color for this dropdown
  };

  // Toggle dropdown for a specific index
  const toggleDropdown = (index) => {
    setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? !value : false)); // Close other dropdowns
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event, index) => {
    if (dropdownRefs.current[index] && !dropdownRefs.current[index].current.contains(event.target)) {
      setIsOpen(prevOpen => prevOpen.map((value, i) => i === index ? false : value));
    }
  };

  useEffect(() => {
    const handleClickOutsideForAll = (event) => {
      isOpen.forEach((value, index) => handleClickOutside(event, index));
    };

    document.addEventListener("click", handleClickOutsideForAll);
    return () => {
      document.removeEventListener("click", handleClickOutsideForAll);
    };
  }, [isOpen]);

  return (
    data.map(({ name, includes }, index) => (
      <div className="mx-auto">
      <div key={index} className={`flex flex-col items-start rounded-[8px] px-5 py-[30px] border border-[color:var(--black,#171717)] border-solid  ${selectedPlan === name ? 'bg-primary ' : 'bg-white'} `}>
          <div className="flex justify-between items-center gap-5">
            
          <h6 className={` text-[38px] not-italic font-semibold leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{name}</h6>
          {/* Select  */}
          <div className="relative" ref={dropdownRefs.current[index]}>
            <span className="rounded-md shadow-sm">
              <button
                onClick={() => toggleDropdown(index)}
                type="button"
                className={`flex items-center gap-2.5 px-2.5 py-[5px] rounded-[var(--sm,4px)] border  border-solid  text-xl not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white border-white ' : 'text-[color:var(--Brand,#28282A)] border-[color:var(--Brand,#28282A)]'}`}
                id={`options-menu-${index}`}
                aria-haspopup="true"
                aria-expanded={isOpen[index] ? "true" : "false"}
              >
                {selectedOptions[index]}
                <DownArrow2 color={selectedPlan === name ? 'white' : '#28282A'} />
              </button>
            </span>

            {isOpen[index] && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby={`options-menu-${index}`}
              >
                <div className="py-1" role="none">
                  <button
                    onClick={() => handleOptionChange("100ml", index)}
                    className={`${selectedOptions[index] === "100ml" ? "" : ""} block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                    role="menuitem"
                  >
                    100ml
                  </button>
                  <button
                    onClick={() => handleOptionChange("50ml", index)}
                    className={`${selectedOptions[index] === "50ml" ? "bg-gray-100" : ""} block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                    role="menuitem"
                  >
                    50ml
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* CheckMark */}
          <div className="ml-[270px]">
            <Image onClick={() => handleOptionPlanChange(name, index)} src={selectedPlan === name ? checkedCircle : circle} alt="Circle" />
          </div>
        </div>
          <div className="flex gap-x-[20px] mt-[30px] mb-[20px]">
          <div className="">
          <span  className={`text-[color:var(--Brand,#28282A)] text-[28px] not-italic font-normal leading-[normal] mt-[25px] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}><span className={` text-[22px] not-italic font-normal leading-[normal] line-through ${selectedPlan === name ? 'text-[rgba(255,255,255,0.80)] ' : 'text-[color:var(--Brand,#28282A)]'}`}>{selectedOptions[index] === "50ml" ? selector ? discount50 : null : selector ? discount : null}</span> {selectedOptions[index] === "50ml" ? rate50 : rate && rate}</span>
          </div>
          {/* Increment Decrement Buttons */}
          <div className="inline-flex items-center border border-white border-solid">
            <button onClick={decrement} className="flex h-[25.04px] flex-col justify-center items-start gap-2.5 p-[5px] bg-white">
              <Minus color='#28282A'/>
            </button>
            <span className="text-white px-[9px] py-[3px] text-lg not-italic font-normal leading-[normal]">{count}</span>
            <button onClick={increment} className="flex h-[25.04px] flex-col justify-center items-start gap-2.5 p-[5px] bg-white">
              <Plus color='#28282A'/>
            </button>
          </div>
          </div>
          <div className="flex items-center mt-[10px] cursor-default">
            <span className={`flex justify-center items-center gap-2.5 px-2.5 py-[5px] rounded-[var(--sm,4px)] border border-solid  text-sm not-italic font-normal leading-[120%]  ${shipping === 'You’ve unlocked max savings of £80! 🎉' ? 'bg-white text-primary' : 'border-white text-white'}`}>{shipping}</span>
            {/* <div className="w-[92px] h-[1px] bg-white"></div>
        <span className={`flex justify-center items-center gap-2.5 px-2.5 py-[5px] rounded-[var(--sm,4px)] border border-solid  text-sm not-italic font-normal leading-[120%] ${selectedPlan === name ? 'text-[#FFFFFFB2] border-[#FFFFFFB2] ' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))] border-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}>{shippingProgress}</span> */}
        </div>
        <span className={`mt-[30px] text-xl not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{includes}</span>
        <span className={` mt-[15px] text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{selectedOptions[index] === "100ml" ? count + ' ' + firstPoint : count + ' ' + firstPoint50}</span>
        <span className={` mt-[10px] text-base not-italic font-normal leading-[normal] ${selectedPlan === name ? 'text-white ' : 'text-[color:var(--Brand,#28282A)]'}`}>{count + ' ' + lastPoint}</span>
        <span className={` text-xl not-italic font-light leading-[normal] mt-[30px] ml-auto ${selectedPlan === name ? 'text-[#FFFFFFCC] ' : 'text-[color:var(--brand-70,rgba(40,40,42,0.70))]'}`}>{spray}</span>
        </div>
     
      </div>
    ))
  );
}


const Pricing = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);
  const handleClick1 = () => {
    setShow1(true);
    setShow2(false);
  };
  const handleClick2 = () => {
    setShow2(true);
    setShow1(false);
  };
  return (
    <section>
      <div
        className={`flex justify-between pt-[100px] ${
          isDarkMode ? "bg-primary" : "bg-white"
        }`}
      >
        <Box1 color={isDarkMode ? "white" : "#454547"} />
        <div className="max-w-container mx-auto mt-[120px]">
          <div className="flex flex-col text-center">
            <h2
              className={`text-5xl mb-[25px] not-italic font-bold leading-[normal] uppercase ${
                isDarkMode ? "text-white" : "text-[color:var(--Brand,#28282A)] "
              }`}
            >
              Select how many BOTTLES
            </h2>
            <span
              className={`text-center text-2xl not-italic font-medium leading-[160%] ${
                isDarkMode ? "text-white" : "text-[color:var(--Brand,#28282A)] "
              }`}
            >
              Buy More, Save More. Subscribe to save most.
            </span>
            <span
              className={`text-2xl italic font-light leading-[160%] ${
                isDarkMode ? "text-white" : "text-[color:var(--Brand,#28282A)] "
              }`}
            >
              100ml per bottle (roughly 1000 sprays) = Lasts 2 months on
              average, used generously twice daily.
            </span>
            {/* Button */}
            <div
              className={`mt-[80px] mx-auto inline-flex gap-2.5 px-2.5 py-2 rounded-[var(--md,8px)] border  border-solid ${
                isDarkMode
                  ? "border-white"
                  : "border-[color:var(--black,#171717)]"
              }`}
            >
              <button
                onClick={handleClick1}
                className={`flex justify-center items-center gap-2.5 px-5 py-2.5 rounded-[var(--md,8px)] text-[#28282a] text-lg not-italic font-normal leading-[normal] bg-primary ${
                  show1 && "bg-primary text-white"
                } ${show2 && "bg-transparent text-[#28282a]"} `}
              >
                Subscribe & Save
              </button>
              <button
                onClick={handleClick2}
                className={`text-[#28282a] flex justify-center rounded-[var(--md,8px)] items-center gap-2.5 px-5 py-2.5 text-lg not-italic leading-[normal] font-normal bg-[transparent] ${
                  show2 && "bg-primary text-white"
                } ${show1 && "bg-transparent"}`}
              >
                One Time Purchase
              </button>
            </div>

                      <div className="flex items-start gap-[30px] self-stretch mt-[50px]">
              {
                show1 && <Plans />
              }
              {
                show2 && <Subscribe/>
              }
            </div>
          </div>
        </div>
        <Box2 color={isDarkMode ? "white" : "#28282A"} />
      </div>
    </section>
  );
};

export default Pricing;
