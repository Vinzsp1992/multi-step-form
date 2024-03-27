import React, { useState } from 'react'

type Props = {
  isChecked1:  boolean;
  isChecked2: boolean;
  isChecked3: boolean;
  onCheckboxChange: (label: string, isChecked: boolean) => void;
  onCheckboxChange2: (label2: string, isChecked2: boolean) => void;
  onCheckboxChange3: (label3: string, isChecked3: boolean) => void;
};

const AddOn: React.FC<Props> = ({isChecked1, isChecked2, isChecked3,
  onCheckboxChange, onCheckboxChange2, onCheckboxChange3}) => {
  const [checkValue , setCheckValue] = useState<string>("");
  const [checkValue2 , setCheckValue2] = useState<string>("");
  const [checkValue3 , setCheckValue3] = useState<string>("");
  const [toggleYear, setToggleYear] = useState<boolean>(false);
  const [toggleYear2, setToggleYear2] = useState<boolean>(false);
  const [toggleYear3, setToggleYear3] = useState<boolean>(false);

  const [iisChecked1, setIsChecked1] = useState(false);
  const [iisChecked2, setIsChecked2]= useState(false);
  const [iisChecked3, setIsChecked3]= useState(false);


  const handleCheckContainer1 = (e: React.ChangeEvent<HTMLInputElement>) =>{

    const isCheckedNewValue = e.target.checked;
    setIsChecked1(isCheckedNewValue);
    onCheckboxChange('Online Service', isCheckedNewValue);
   
  }
  const handleCheckContainer2 = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const isCheckedNewValue = e.target.checked;
    setIsChecked2(isCheckedNewValue);
    onCheckboxChange2('Larger Storage', isCheckedNewValue);
  
  }
  const handleCheckContainer3 = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const isCheckedNewValue = e.target.checked;
    setIsChecked3(isCheckedNewValue);
    onCheckboxChange3('Customizable Profile', isCheckedNewValue);
    
  }
  
  return (
    <main>
    <h1 className='text-2xl font-bold text-sky-900 '>Pick add-ons</h1>
    <h2 className='mt-2 text-gray-400 font-semibold mb-2'>Add-on help enhanced your gaming experience.</h2>

    <div className='flex flex-col gap-4'>

    <div className={` bg-slate-100 shadow-lg p-3 flex gap-3 px-4 rounded-lg items-center
     justify-between border ${isChecked1 ? 'border-violet-300' : 'none'} ${isChecked1 ? 'bg-sky-100' : 'none'}`}
      >
     
      <input 
             value={checkValue}
             name='add-on'
             type='checkbox'
             checked={isChecked1}
             onChange={handleCheckContainer1}
             className='w-[50px] h-[15px]' />

      <div className='flex flex-col'>
      <label className='text-md font-semibold'>Online Service</label>
      <label className='text-xs text-gray-400'>Access to multiplayer games</label>
      </div>
      <label className='text-violet-600 text-sm font-semibold cursor-pointer'>
        +$1/mo</label>

    </div>

    <div className={` bg-slate-100 shadow-lg p-3 flex gap-3 px-4  rounded-lg items-center
     justify-between border ${isChecked2 ? 'border-violet-300' : 'none'} ${isChecked2 ? 'bg-sky-100' : 'none'}`}
     >
      
      <input 
             value={checkValue2}
             name='add-on'
             type='checkbox'
             checked={isChecked2}
             onChange={handleCheckContainer2}
             className='w-[50px] h-[15px]' />

      <div className='flex flex-col'>
      <label className='text-md font-semibold' htmlFor='add-on'>Large storage</label>
      <label className='text-xs text-gray-400'>Extra 1TB of cloud storage</label>
      </div>
      <label className='text-violet-600 text-sm font-semibold cursor-pointer'>
        +$2/mo</label>

    </div>

    <div className={` bg-slate-100 shadow-lg p-3 flex gap-3 px-4  rounded-lg items-center
     justify-between border ${isChecked3 ? 'border-violet-300' : 'none'} ${isChecked3 ? 'bg-sky-100' : 'none'}`}
      >
      
      <input 
             value={checkValue3}
             name='add-on'
             type='checkbox'
             checked={isChecked3}
             onChange={handleCheckContainer3}
             className='w-[50px] h-[15px]'/>

      <div className='flex flex-col'>
      <label className='text-sm font-semibold'>Customizable profile</label>
      <label className='text-xs text-gray-400'>Custom theme on your profile</label>
      </div>
      <label className='text-violet-600 text-sm font-semibold cursor-pointer'>
        +$2/mo</label>

    </div>
    </div>

  </main>
  )
}

export default AddOn