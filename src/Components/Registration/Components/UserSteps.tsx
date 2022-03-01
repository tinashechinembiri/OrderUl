import React, {  Fragment } from "react";
import'../CSS/CreateUser.css'; 
import {IRegistration, IErrors} from '../Interface/Registration'
import UserButtons from'../../../Helpers/HelperComponents/UserButtons'

interface IUserStep {
    nextsteps:()=>void, 
    onchange:(event: React.ChangeEvent<HTMLInputElement>)=> void
    errors:IErrors

}
const UserStep = ({  nextsteps , onchange, errors}:IUserStep) => {

    return(
        <Fragment>
            <h1 className="titles">Create Users </h1>
                    {
                     ( errors?.email|| null) && <h3> {(errors?.email || null)}</h3>
                    }
                <div className="input-container">
             
                <input
                 onChange={onchange}
                 name="email"
                 type="email"
                 placeholder="Enter your email"
                />
                </div>
                <div className="input-container">
                
                   {
                     ( errors?.password|| null) && <h3> {(errors?.password || null)}</h3>
                    }
                <input
                    onChange={onchange}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                />
                </div>
                <div>
                    <UserButtons functiontypes={nextsteps} buttonname={'next'}/>
                </div>    
        </Fragment>
    )
} 

export default UserStep; 