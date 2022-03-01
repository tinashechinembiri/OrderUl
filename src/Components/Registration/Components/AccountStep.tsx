import React, {  Fragment, useEffect } from "react";
import'../CSS/CreateUser.css'; 
import {IRegistration, IErrors} from '../Interface/Registration'
import Accountsinput from'./AccountsInput'
interface IAccount {
    nextsteps:()=>void, 
    onchange:(event: React.ChangeEvent<HTMLInputElement>)=> void, 
    prevstep:()=>void
    errors:IErrors

}
const AccountStep =({nextsteps, onchange, prevstep, errors}:IAccount) => {
      

    /*
    use effect clean up 
    https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
    */
    return (
        <Fragment>
            <h1> Account step </h1>
                 <Accountsinput  onchange={onchange} errors={errors}  />
                
                <div className="button-wrapper">
                   <button className="button-items" onClick={prevstep} >Prev</button>
                    <button className="button-items" onClick={nextsteps}>Next</button>     
                </div>
        </Fragment>
    ); 

}

export default AccountStep; 