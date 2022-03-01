import React, {  Fragment,  } from "react";
import {useNavigate } from "react-router-dom";
import LoginService from "./Service/LoginService";
import useForm from './CustomHooks/UseForm'; 
import './Css/Login.css'; 
import {useAuthDispatch, useAuthstate} from'../../Helpers/Context'; 
export interface Loginvalues {
    username:string , 
    password:string
}

interface IloginService{
  error?: string  
}


const Login = () => {
    const dispatch = useAuthDispatch(); 
    const  { user,loading, _errors} = useAuthstate(); 
    const navigate = useNavigate();
    
   // const [username, setUsername] = useState(""); 
    //const [password, setPassword] = useState('')
// /https://www.bezkoder.com/react-hooks-jwt-auth/
// css : https://codepen.io/FlorinPop17/pen/vPKWjd
      //https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/  

    const  handleSubmit = async ( e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        //const values; 
       if (Object.keys(errors as object).length === 0 && Object.keys(values as object).length!== 0)
        {
           const _loginservice =  await LoginService.Login(values as {username:string, password:string},dispatch ) as IloginService; 
           if (!_loginservice?.error)
           {
               
            return navigate('/homepage')

           }
           return; 

        }
    }
   
    const {handleChange , values, errors}  = useForm(); 
 
    return(
        <Fragment> 
            <div className="form-body">
                  {
                        (_errors|| null) && <h3>{(_errors|| null)}</h3>
                    }
            <form className="form-class" onSubmit={handleSubmit}>
                <label>username:</label>
                  
                <input
                    className="input-username"
                    name="username"
                    type='email'
                    placeholder="enter your username"
                    onChange={handleChange}
                />
                    {
                     ( errors?.username|| null) && <h3> {(errors?.username || null)}</h3>
                    }
                <div>
                    <label>Password: </label>
                    <input
                    className="input-password"
                     type='password'
                     placeholder="enter a password"
                     name="password"
                     onChange={handleChange}
                    />
                    {
                      errors?.password && <h3> {errors?.password}</h3>
                    }
                </div>
                <button className="btn" type="submit"> Login</button>
            </form>
            </div>
        </Fragment>
    )

}
export default Login; 