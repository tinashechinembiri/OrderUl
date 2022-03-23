import React, {useState, useEffect, createContext, useContext} from "react";
import UserComponents from'./Components/UserComponents'
import  './Components/CSS/UserComponents.css'
import {getuserdata,updateProfile} from './service/Userprofileservice';
import {UserprofileAuthDispatch}from './Components/CustomHooks/UserContextdat'
const UserPage = () => {
   const dispatch = UserprofileAuthDispatch(); 
    useEffect (() =>{
        const getUserdata = async () => {
            const userprofile = await getuserdata(); 
            
            dispatch({type:'userprofile', userprofile:userprofile})
        }
        getUserdata(); 
    }, []);
    return(
        <div className="center">
          
            <div className="card">
           
             <UserComponents 
                /> 
               
             </div>
            
        </div>
    )

}

export default UserPage; 