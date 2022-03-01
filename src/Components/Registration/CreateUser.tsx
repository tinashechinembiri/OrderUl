import React, {useState} from "react";
import RegistrationForms from './CustomHooks/RegistrationForms'; 
import './CSS/CreateUser.css'; 
import LoginService, {Icreateuser} from '../Login/Service/LoginService';
import Customusersteps from './CustomHooks/Custormusersteps'
//https://kentcdodds.com/blog/using-fetch-with-type-script
const CreateUser = () => { 
 const {values, errors, handleChange} = RegistrationForms(); 
    const {RegistrationStep} = Customusersteps({values, errors, handleChange}); 
    const [isOpen, setIsOpen] = useState(false);
const handleSubmit = async ( e:React.FormEvent<HTMLFormElement>) =>{
        

        e.preventDefault(); 
        if(Object.keys(errors as object).length === 0 && Object.keys(values as object).length!== 0)
        {
           const _user =LoginService.register(values as Icreateuser); 
           if (!_user) 
           {
               //https://www.cluemediator.com/create-simple-popup-in-reactjs
                setIsOpen(!isOpen); 
           } 
        }
        
    }
    return (
        <div  > 
          <form className="reg_form" onSubmit={handleSubmit}>
            {RegistrationStep()}
            </form>
        </div>
    )
  
}
export default CreateUser; 