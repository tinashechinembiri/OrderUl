
import React, {  Fragment } from "react";
import LoginService from "./Service/LoginService";
import useForm from './CustomHooks/UseForm'; 
import './Css/Login.css'
export interface Loginvalues {
    username:string , 
    password:string
}


const Login = () => {
   // const [username, setUsername] = useState(""); 
    //const [password, setPassword] = useState('')
// /https://www.bezkoder.com/react-hooks-jwt-auth/
// css : https://codepen.io/FlorinPop17/pen/vPKWjd
      //https://www.sitepoint.com/how-to-migrate-a-react-app-to-typescript/  
    const  handleSubmit = async ( e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();        //const values; 
       if (Object.keys(errors as object).length === 0 && Object.keys(values as object).length!== 0)
        {
           const _loginservice =  await LoginService.Login(values as {username:string, password:string}); 
        }
    }

   
    const {handleChange , values, errors}  = useForm(); 
 
    return(
        <Fragment> 
            <div className="form-body">
            <form className="form-class" onSubmit={handleSubmit}>
                <label>username:</label>
              
                <input
                    className="input-username"
                    name="username"
                    type='email'
                    placeholder="enter your username"
                   // value={username}
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
                     //value={password}
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