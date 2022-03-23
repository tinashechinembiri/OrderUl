import React,{lazy, Suspense} from "react";
import CustomSteps  from'../CustomHooks/CustomSteps';
import {IRegistration, IErrors} from '../Interface/Registration'; 
import UserStep from '../Components/UserSteps'; 
const TermsConditions = lazy(()=> import('../Components/TermsConditions')); 
const AccountStep = lazy(()=> import('../Components/AccountStep')); 
interface Icustomers{
    values : IRegistration| undefined, 
    errors : IErrors 
    handleChange  :(event: React.ChangeEvent<HTMLInputElement>)=> void
}
const Customusersteps =({values, errors ={}, handleChange}:Icustomers) => {
    const {currentSteps,_next, _prev} = CustomSteps(); 
    const prevStep = () => {
        _prev(); 
        
    }
    const nextStep =() => {
     if(Object.keys(errors as object).length === 0 && Object.keys(values as object).length!== 0)
    {   
        _next();    
    }
    }
    let RegistrationStep = () => {
        switch(currentSteps)
        {
            case 1: 
            return <UserStep  nextsteps={nextStep} onchange={handleChange} errors={errors} /> 
            case 2: 
            return (
                <Suspense fallback={<div>Loading...</div>}>
                <AccountStep nextsteps={nextStep} onchange={handleChange} prevstep ={prevStep} errors={errors}/> 
                </Suspense>) 
            case 3: 
            return( <Suspense fallback={<div>Loading...</div>}>
                     <TermsConditions prevstep ={prevStep} values={values}/>
                     </Suspense>
     )
            default:
            return null; 
        }
    }
    return { RegistrationStep}

}
export default Customusersteps; 