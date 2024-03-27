import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

type Props = {
  selectedPlan: string;
  checkValue: string;
  checkValue2: string;
  checkValue3: string;
  isChecked1: boolean;
  isChecked2: boolean;
  isChecked3: boolean;
  onCheckboxChange: (label: string, isChecked1: boolean) => void;
  onCheckboxChange2: (label2: string, isChecked2: boolean) => void;
  onCheckboxChange3: (label3: string, isChecked3: boolean) => void;
  
}

const Finishing: React.FC<Props> =
 ({selectedPlan, checkValue, checkValue2,checkValue3, isChecked1,isChecked2, isChecked3}) => {

  const location = useLocation();
  const selectedPlann = location.state && location.state.selectedPlan;
  
 
  const getPrice = (label: string) => {
    if (label === "Online Service") {
      const monthPrice1 = 1;
      return monthPrice1;
    }
    return 0; 
  }
  
  const getPrice2 = (label2: string) => {
    if (label2 === "Larger Storage") {
      const monthPrice2 = 2;
      return monthPrice2;
    }
    return 0;
    
  }
  const getPrice3 = (label3: string) => {
    if (label3 === "Customizable Profile") {
      const monthPrice3 = 2;
      return monthPrice3;
    }
    return 0;
    
  }
  
  

  const getPricePlan = (selectedPlan: string): number => {
    switch (selectedPlan) {
      case "Arcade":
        return 9;
      case "Advanced":
        return 10;
      case "Pro":
        return 12;
      default:
        return 0; 
    }
  };
  
  const totalPlanPrice = () => {
    let planPrice = 0;
  const monthPrice1 = isChecked1 ? getPrice("Online Service") : 0;
  const monthPrice2 = isChecked2 ? getPrice2("Larger Storage") : 0;
  const monthPrice3 = isChecked3 ? getPrice3("Customizable Profile") : 0;


  switch (selectedPlan) {
      case 'Arcade':
          planPrice = getPricePlan("Arcade");
          break;
      case 'Advanced':
          planPrice = getPricePlan("Advanced");
          break;
      case 'Pro':
          planPrice = getPricePlan("Pro");
          break;
      default:
          planPrice = 0; 
  }

  return planPrice + monthPrice1 + monthPrice2 + monthPrice3;
  
}

  
  const [toggleChange, setToggleChange] = useState<boolean>(true);
  
  const handleToggleChange = () => {
    setToggleChange((prevChange: boolean) => !prevChange)

  }
  
  return (
    <main>
    <h1 className='text-4xl font-bold mb-5'>Finishing up</h1>
    <h2 className='mb-5 text-gray-400 font-semibold'>Double-check everything looks OK before confirming. </h2>
    <div className='bg-sky-50 mb-5 p-5'>
      <div className='flex items-center justify-between border border-b-gray-300
      border-l-0 border-r-0 border-t-0 mb-5'>
        <div>
          <p className='text-sky-700 font-bold'>
            {selectedPlan}<span> (Monthly)</span>
            </p>
          <p className='text-gray-400 font-semibold underline cursor-pointer
          hover:text-sky-600' onClick={handleToggleChange}>change</p>
        </div>
        <div>
          <p className='text-sky-700 font-bold'>{`$${getPricePlan(selectedPlan)}/mo`}</p>
        </div>
      </div>
        <div className='flex justify-between'>
          {isChecked1 && <p className='text-gray-400 font-semibold'>{checkValue}</p>}
          {isChecked1 && <p className='text-sky-600 text-sm font-semibold'>{`+$${getPrice(checkValue)}/mo`}</p>}
        </div>

        <div className='flex justify-between mb-10'>
          {isChecked2 && <p className='text-gray-400 font-semibold'>{checkValue2}</p>}
          {isChecked2 && <p className='text-sky-600 text-sm font-semibold'>{`+$${getPrice2(checkValue2)}/mo`}</p>}
        </div>

        <div className='flex justify-between mb-10'>
          {isChecked3 && <p className='text-gray-400 font-semibold'>{checkValue3}</p>}
          {isChecked3 && <p className='text-sky-600 text-sm font-semibold'>{`+$${getPrice3(checkValue3)}/mo`}</p>}
        </div>

        
    </div>
    <div className='flex justify-between items-center'>
          <p className='text-gray-400 font-semibold lg:text-lg text-sm'>Total(per month)</p>
          <p className='text-blue-700 font-bold text-lg'>+${totalPlanPrice()}/mo</p>
        </div>
  </main>
  )
}

export default Finishing