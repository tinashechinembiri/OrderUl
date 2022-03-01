import React, {useState } from "react";
import {omit} from 'lodash'; 
import{IRegistration, IErrors} from'../Interface/Registration'

const RegistrationForms = () => {
    const [values, setValues] = useState<IRegistration>(); 
    const [errors, setErrors] = useState<IErrors>({} ); 

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.persist(); 
        let name:string = event.target.name; 
        let val:string = event.target.value; 
  
        validate(name, val); 
       // setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        setValues({
            ...values ,  
            [name]:val,
        }); 
    }; 

    const validate  = (name :string, value:string) => {
        switch(name)
        {
            //https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
            case'email': 
            let usernameerror = new RegExp( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/); 
            if (!usernameerror.test(value))
            {
                setErrors({
                    ...errors, 
                    email:'email atleast have 5 letters'
                }); 
                console.log(errors)
            }
            else{
                let newObj = omit(errors, "email");
                setErrors(newObj);
            }
          
            break; 
            case'password': 
            if (!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value))
            {
                setErrors({
                    ...errors, 
                    password:'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                }); 
            }
            else{
                let newObj = omit(errors, "password");
                setErrors(newObj);
            }
            break; 
            case'firstname':
            if(!new  RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).test(value) && value !=null)
            {
              
                setErrors({
                    ...errors, 
                    firstname:'Name should be only letters'
                }); 
            }
            else{
                let newObj = omit(errors, "firstname");
                setErrors(newObj);
            }
            break; 
            case'lastname':
            if(!new  RegExp(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/).test(value))
            {
                setErrors({
                    ...errors, 
                    lastname:'Name should be only letters'
                }); 
            }
            else{
                let newObj = omit(errors, "lastname");
                setErrors(newObj);
            }
            break;
            case'phone':
            if(!new  RegExp(/((\+44(\s\(0\)\s|\s0\s|\s)?)|0)7\d{3}(\s)?\d{6}/).test(value))
            {
                setErrors({
                    ...errors, 
                    phone:'Phone should be only be number and min of 10'
                }); 
            }
            else{
                let newObj = omit(errors, "phone");
                setErrors(newObj);
            }
            break;
            case'addressname':

            break;
            case'postcode':
            if(!new  RegExp(/^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i).test(value))
            {
                setErrors({
                    ...errors, 
                    postcode:'postcode required '
                }); 
            }
            else{
                let newObj = omit(errors, "postcode");
                setErrors(newObj);
            }
            break;
            default:
                setErrors({}); 
                break; 
        }
    
    }

    return {
        values, 
        errors, 
        handleChange
    }

    
}
export default RegistrationForms; 

