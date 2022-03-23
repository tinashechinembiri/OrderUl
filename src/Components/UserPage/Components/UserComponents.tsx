import React, {useState, useEffect} from "react";
import  './CSS/UserComponents.css'
import {UserInterface} from './Interface/UserInterface'
import { Link } from "react-router-dom";
import EditPage from'../EditPage'
import {UseuserProfileState} from'./CustomHooks/UserContextdat'

const UserComponents = ( ) => {
    const [userData, setuserData] = useState({}); 
    const [errors, setErrors] = useState({}); 
    const {data, _errors} = UseuserProfileState(); 
    const {email, password, accounts} = data; 
   
    useEffect (() => {
      
       if (_errors )
       {
           console.log(_errors)
           
            setErrors(_errors); 
       }
       else if (data)
       {
            setuserData (data)
       }
       else {
           //setuserData ({})
       }
    }, [data, _errors])
   
 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    return(<React.Fragment>

        <div className="UserProfiles">
        <h1>Account Information</h1>
            <div className="tablesProfile">
                <Link to="/edit/name"  >
                <div className="userData">
                    <span>Name </span>
                    <span>{accounts.firstname} , {accounts.lastname}</span>
                </div>
                </Link>
                <a href="/edit/email">
                <div className="userData"> 
                    <span>Email</span>
                    <span>{email}</span>
                </div>
                </a>
                <a href="/edit/phonenumber">
                <div className="userData"> 
                    <span>PhoneNumber</span>
                    <span>{accounts.phone}</span>
                </div>
                </a>
                <a href="/edit/password">
                <div className="userData"> 
                    <span>Password : </span>
                    <span >***********</span>
                </div>
                </a>
            </div>
        </div>
        <div >
        <button className="button">EDIT</button>
        </div>
        </React.Fragment>
    )
}

export default UserComponents; 