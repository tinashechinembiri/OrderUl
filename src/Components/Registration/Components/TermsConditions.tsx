import { values } from "lodash";
import React, {  Fragment, useState } from "react";
import'../CSS/CreateUser.css'; 
import {IRegistration} from '../Interface/Registration' 
const TermsConditions =({prevstep, values}: {prevstep:()=>void, values:IRegistration| undefined}  ) => {
    console.log(values)
    const userInputData = () => {
        if (values)
        {
            return  (
                <ul>
                    <li>{values.email}</li>
                    <li>{values.firstname}</li>
                    <li>{values.lastname}</li>
                    <li>{values.phone}</li>
                    <li>{values.addressname}</li>
                    <li>{values.postcode}</li>
                    <li>{values.county}</li>
                    <li>{values.country}</li>
                </ul>
             )  
            
        }
    }
    return(
        <Fragment>
                  {userInputData()}
            <div className="button-wrapper">   
                <button className="button-items" onClick={prevstep}>Prev</button>
                <button className="button-items" type="submit">CreateUser</button>
            </div>
        </Fragment>
    )
}

export default TermsConditions; 