import React, { useState } from 'react'
import Radio from '../context/Radio';
import { RadioGroup } from '../context/Radio';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg'


interface PlanProps {
  handlePlanChange: (value: string) => void;
  selectedPlan: string;
}

  const  Plan: React.FC<PlanProps> = ({handlePlanChange, selectedPlan}) => {

  
  const [toggleSwitch, setToggleSwitch] = useState<boolean>(false);
  const [togglePlan, setTogglePlan] = useState<boolean>(true);
  
  const handleSwitch = () => {
    setToggleSwitch(!toggleSwitch);
  }
  const handlePlanSwitch = () =>{
    setTogglePlan(!togglePlan);

  }
  const handleChange = (value: any) => {
    handlePlanChange(value);
};

  
  return (
    <div>
      <main>
        <h1 className='text-2xl font-bold '>Select your plan</h1>
        <h2 className='mt-2 text-gray-400 font-semibold'>You have a option of monthly billing or yearly billing.</h2>

    <div className='flex flex-col gap-5 mt-5 font-semibold justify-center lg:justify-evenly lg:flex lg:flex-row
    lg:flex-wrap'>
      
        <RadioGroup onChange={(value) => handlePlanChange(value as string)} value={selectedPlan} >

        <Radio value='Arcade' >

        <div className='flex gap-2 lg:flex lg:flex-col lg:gap-10 lg:items-start lg:w-[10vw]'>
        <img src={Arcade} className='' />
        <div className='flex  justify-start flex-col'>
          <label className='text-sky-800'>Arcade<br/></label>
          <label className='text-sm text-gray-400 '>{togglePlan ? `$9/mo` : `$90/yr`} </label>
          {!togglePlan && <p className='text-gray-600 text-xs text-semibold'>2 months free</p>}
          </div>
        </div>

        </Radio>
        <Radio value='Advanced' >
        <div className='flex gap-2 lg:flex lg:flex-col lg:gap-10 lg:items-start lg:w-[10vw]'>
        <img src={Advanced} className='' />
        <div className='flex  justify-start flex-col'>
          <label className='text-sky-800'>Advanced<br/></label>
          <label className='text-sm text-gray-400 '> {togglePlan ? "$12/mo" : "$120/yr"}</label>
          {!togglePlan && <p className='text-gray-600 text-xs text-semibold'>2 months free</p>}
          </div>
        </div>

        </Radio>
        <Radio value='Pro'>
        <div className='flex gap-2 lg:flex lg:flex-col lg:gap-10 lg:items-start lg:w-[10vw]'>
        <img src={Pro} className='' />
        <div className='flex  justify-start flex-col'>
          <label className='text-sky-800'>Pro<br/></label>
          <label className='text-sm text-gray-400 '>{togglePlan ? "$15/mo" : "$150/yr "} </label>
          {!togglePlan && <p className='text-gray-600 text-xs text-semibold'>2 months free</p>}
          </div>
        </div>

        </Radio>
        </RadioGroup>
        
    
</div>
      <div className='flex justify-center gap-2 items-center lg:order-4 mt-10'>
      <p className={`text-${!toggleSwitch ? 'black' : 'gray-300'}`}>Monthly</p>

        <div onClick={()=> {handleSwitch(); handlePlanSwitch(); }}
         className='toggle bg-sky-900  '>
          {!toggleSwitch ? <div className='text-gray-400 h-[20px]
           w-[20px] bg-white rounded-full m-1 cursor-pointer'></div>
          :
          <div className='text-gray-200 h-[20px] w-[20px] bg-white rounded-full mt-[5px] mr-[5px] mb-[5px]
           ml-[35px] cursor-pointer '></div>}
          
        </div>
       <p className={`text-${!toggleSwitch ? 'gray-300' : 'black'}`}>Yearly</p>
        </div>

      </main>
    </div>
    
  )
 
}
export default Plan;
