import React from 'react'
import ThankyouImg from '../assets/images/icon-thank-you.svg';

type ThankyouPopUp = {
  isOpen: boolean;
  onClose: () => void;
}

const Thankyou = ({isOpen, onClose}: ThankyouPopUp) => {
  if(!isOpen){
    return null;
  }
  return (
    <div className='text-2xl font-semibold gap-2 flex justify-between '>

      <div className='flex flex-col justify-center items-center'>
         <img src={ThankyouImg} className='w-[50px] h-[50px] mb-5 mt-10' /> 
        <h1 className='text-3xl font-black text-center mb-5'>Thank you!</h1>

        <h2 className='text-lg text-center text-gray-500'>
          Thanks for confirming your subscription!
          We hope you have fun using our platform.
          If you ever need support,
           please feel free to email us at
          support@loremgaming.com
        </h2>
        
      </div>

      <div>
          <label onClick={onClose} className='text-red-500 cursor-pointer
        hover:text-sky-500'>X</label>
      </div>

    </div>
  )
}

export default Thankyou