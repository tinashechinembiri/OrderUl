import  { useState } from 'react'; 
import {omit} from 'lodash'; 
 interface Loginvalues {
    username?:string | undefined, 
    password?:string | undefined
}
type IunionType = Loginvalues; 
const useForm = () => {
    const [values, setValues] = useState <IunionType>(); 
    const [errors, setErrors] = useState<IunionType>(); 

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        event.persist(); 
        let name:string = event.target.name; 
        let val:string = event.target.value; 
        validate( name, val); 
        // validate values in state
     
       // setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        setValues({
            ...values ,  
            [name]:val,
        }); 

        

    }
  
    
    const validate =( name :string, value:string ) => {
        
        switch(name)
        {
            //https://stackoverflow.com/questions/12018245/regular-expression-to-validate-username
            case'username': 
            let usernameerror = new RegExp( /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/); 
            if (!usernameerror.test(value))
            {
                console.log(usernameerror)
                setErrors({
                    ...errors, 
                    username:'Username atleast have 5 letters'
                }); 
                console.log(errors)
            }
            else{
                let newObj = omit(errors, "username");
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
            case'email':
            break; 
            

            default:
                break; 
        }
    }
    return{
        handleChange,
        values, 
        errors     
    }
}
export default useForm;     
