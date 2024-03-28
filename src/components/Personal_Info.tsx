import React, { ChangeEvent, useState } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import sidebar_mobile from '../assets/images/bg-sidebar-mobile.svg';
import sidebar_desktop from '../assets/images/bg-sidebar-desktop.svg';
import Plan from './Plan';
import AddOn from './AddOn';
import Finishing from './Finishing';
import Thankyou from './Thankyou';


const routes = ['/', '/Plan', '/AddOn', '/Finishing'];

const Personal_Info = () => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const isMainpage = location.pathname === '/';

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [number, setNumber] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [isFormVisible, setIsFormVisible] = useState(true); 
    const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showNextButton , setShowNextButton] = useState(true);

    const [checkValue, setCheckValue]= useState({label: '', checked: false});
    const [checkValue2, setCheckValue2]= useState({label2: '', checked2: false});
    const [checkValue3, setCheckValue3]= useState({label3: '', checked3: false});
    

    const [isChecked1, setIsChecked1] = useState<boolean>(false);
    const [isChecked2, setIsChecked2] = useState<boolean>(false);
    const [isChecked3, setIsChecked3] = useState<boolean>(false);

    const [selectedPlan , setSelectedPlan] = useState<string>('Arcade');

    const handleCheckContainer1 = (label: string, isChecked1: boolean) => {
        setCheckValue({label, checked: isChecked1});
        setIsChecked1(prevState => !prevState);
        
      };
    
      const handleCheckContainer2 = (label2: string, isChecked2: boolean) => {
        setCheckValue2({label2, checked2: isChecked2});
        setIsChecked2(prevState => !prevState);
      };

      const handleCheckContainer3 = (label3: string, isChecked3: boolean) => {
        setCheckValue3({label3, checked3: isChecked3});
        setIsChecked3(prevState => !prevState);
      };

      const handlePlanChange = (value: React.SetStateAction<string>) =>{
        setSelectedPlan(value);
        console.log(value);
        
      }

    const handleName = (e:any) =>{
        const value = e.target.value;
        setName(value);
        setError(value === "");
    }
    const handleEmail = (e: any) =>{
        const value = e.target.value;
        setEmail(value);
        setError(value === "" && value !== email);
    }
    const handleNumber = (e: any) =>{
        const value = e.target.value;
        setNumber(value);
        setError(value === "");
    }
    
    const handleNextStep = (e: React.MouseEvent) =>{
        e.preventDefault();
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(validRegex.test(email) && name.trim() !== "" && number.trim() !== "" && email.trim() !== ""){
            setError(false);
            const currentRouteIndex = routes.indexOf(location.pathname);
            setCurrentRouteIndex(prevIndex => (prevIndex < routes.length - 1 ? prevIndex + 1 : 0));

             if(currentRouteIndex >= 3){
            setCurrentRouteIndex(0);
            setCurrentStep(0);
                }else if(currentStep < 3){
            setCurrentStep(currStep => currStep + 1);
                }
                setIsFormVisible(true);
                navigate(routes[currentRouteIndex + 1] || routes[0]);
        }
        else{
            setError(true);
            console.log("not empty")
        }

        }
        
        const handleGoBack = () => {
            const currentRouteIndex = routes.indexOf(location.pathname);
        
            if (currentRouteIndex > 0) {
                setCurrentRouteIndex(currentRouteIndex - 1);
                setCurrentStep(currentStep - 1);
            } else {
                setCurrentRouteIndex(0);
                setCurrentStep(0);
            }
        
            setIsFormVisible(true);
        };

        const handleConfirm = (e:React.MouseEvent) =>{
            e.preventDefault();
            setIsPopupOpen(true);
            setShowNextButton(false);
            setCurrentRouteIndex(0);
            setCurrentStep(0);
                
        }
        const closePopUp = () => {
            setIsPopupOpen(false);
            setCurrentRouteIndex(0);
            setCurrentStep(0);
            navigate('/');
            setShowNextButton(true);
        }
             
  return (
    <>
    <div className='bg-slate-50 h-[100%] lg:h-[auto] lg:m-20 lg:flex lg:w-[auto] 
     lg:mx-10 lg:p-5'>
        <img src={sidebar_desktop} className='w-[300px] lg:h-[100%] lg:flex hidden ' />
        <img src={sidebar_mobile} className='w-[100%] lg:hidden flex' />
        

       <section className='flex justify-center flex-col items-center lg:justify-start'>

            <ul className=' -mt-32 lg:mt-20 flex flex-row lg:flex-col lg:items-start
             items-baseline justify-center lg:absolute lg:left-40 lg:top-24 lg:gap-10 gap-5'>
                {routes.map((route, index) => (
                     <li key={index} className={`text-white border border-white p-1 px-3 rounded-full
                      ${currentRouteIndex === index ? 'bg-blue-200 text-black font-bold' : ''}`}>
                        {index + 1}
                        <span className='hidden lg:inline-block  absolute ml-7 -mt-2
                        w-[100px]'>
                        {index === 0 && <span className='text-xs text-gray-300'>STEP 1<br/>
                        <span className='text-md font-bold text-white'>YOUR INFO</span></span>}
                        {index === 1 && <span className='text-xs text-gray-300'>STEP 2<br/>
                        <span className='text-md font-bold text-white'>SELECT PLAN</span></span>}
                        {index === 2 && <span className='text-xs text-gray-300'>STEP 3<br/>
                        <span className='text-md font-bold text-white'>ADD-ONS</span></span>}
                        {index === 3 && <span className='text-xs text-gray-300'>STEP 4<br/>
                        <span className='text-md font-bold text-white'>SUMMARY</span></span>}
                        </span>
                      </li>
                ))}
               
            </ul>
        
            <aside className='h-[auto] lg:h-[auto] w-[auto] lg:w-[50vw] mt-5 p-8
            rounded-xl bg-slate-50 mx-5 lg:mx-0 shadow-xl'>
             {currentStep === 1 && isFormVisible && <Plan handlePlanChange={handlePlanChange}
              selectedPlan={selectedPlan}/>}
             {currentStep === 2 && isFormVisible && <AddOn
             isChecked1={isChecked1}
             isChecked2={isChecked2}
             isChecked3={isChecked3} 
             onCheckboxChange={handleCheckContainer1}
             onCheckboxChange2={handleCheckContainer2}
             onCheckboxChange3={handleCheckContainer3} />}
             {currentStep === 3 && isFormVisible && <Finishing selectedPlan={selectedPlan}
                      checkValue={checkValue.label}
                      checkValue2={checkValue2.label2}
                      checkValue3={checkValue3.label3}
                      isChecked1={isChecked1}
                      isChecked2={isChecked2}
                      isChecked3={isChecked3}
                      onCheckboxChange={handleCheckContainer1}
                      onCheckboxChange2={handleCheckContainer2}
                      onCheckboxChange3={handleCheckContainer3}
                       />}

             <Thankyou isOpen={isPopupOpen} onClose={closePopUp} />
             
                {isMainpage && isFormVisible && 
                ( <>
                <h1 className='font-bold text-2xl text-slate-900'>Personal Info</h1>
                <h2 className='text-gray-400 mt-2
                font-semibold'>Please provide your name, email address, and phone number</h2>

                <form className='flex flex-col mt-5 gap-2'>
                
                <div className='flex gap-5 justify-between'>
                <label className='text-sm font-semibold'>Name</label>
                {error && <p className='text-red-500 font-semibold italic
                text-sm'>Name should not be blank.</p>}
                </div>
                <input type='text' className={`border ${error ? "border-red-500" : "border-gray-200"} p-5
                rounded-md`}
                onChange={handleName} placeholder='e.g Stephen King'  required />
                
                <div className='flex gap-5 justify-between'>
                <label className='text-sm font-semibold'>Address</label>
                {error && <p className='text-red-500 font-semibold italic
                text-sm'>E-mail should be valid and not a blank.</p>}
                </div>
                <input type='text' className={`border ${error ? "border-red-500" : "border-gray-200"} p-5
                rounded-md`}
                onChange={handleEmail} placeholder='e.g stephenking@lorem.com' required />
                
                <div className='flex gap-5 justify-between'>
                <label className='text-sm font-semibold'>Phone number</label>
                {error && <p className='text-red-500 font-semibold italic
                text-sm'>Number should not be blank.</p>}
                </div>
                <input type='text' className={`border ${error ? "border-red-500" : "border-gray-200"} p-5
                rounded-md`}
                onChange={handleNumber} placeholder='e.g +1 2 3456 789'  required />
                
            </form>
              
            </> )}    
            </aside>
        
            <div className='bg-slate-50 p-2 mt-10 w-[100vw] lg:w-[50vw] h-[auto] lg:mx-10
            flex flex-row-reverse justify-between items-center py-5 px-2 shadow-md lg:rounded-md'>
           
            {showNextButton && currentRouteIndex <= 2 && (
            <Link to={routes[currentRouteIndex + 1] || routes[0]}
                onClick={handleNextStep}
               
                className='bg-sky-900 text-white p-2 rounded-md
                              mb-2 font-semibold '>
                     Next step
                </Link>
                )}

            {currentRouteIndex >= 3 && (
            <Link to={routes[currentRouteIndex + 1] || routes[0]}
                onClick={handleConfirm}
               
                className='bg-sky-900 text-white p-2 rounded-md
                              mb-2 font-semibold relative float-right'>
                     Confirm
                </Link>
                )}
                
            {currentRouteIndex >= 1 && (
                <Link to={routes[currentRouteIndex - 1] || routes[1]}
                onClick={handleGoBack}

                className=' text-gray-500 p-2 rounded-md
                          mb-2 font-semibold relative float-left'>
                    Go back
            </Link>
            )}
                
            </div>
            
       </section>
        
    </div>
    </>
  )
}
export default Personal_Info
