import React, {useState, useEffect} from "react";
import UserComponents from'./Components/UserComponents'
import  './Components/CSS/UserComponents.css'

const UserData = {
    user_id: "user_5508",
    email: "jdhfhhfgj0102@gmail.com",
    password: "$2b$14$vo0WAMVgWCFUSil714PJzer6JJXTntiLlyH8/lYBrKDEz9tM0YY2G",
    accounts: {
        Address: {
            addressname: "test2222",
            postcode: "ng1233",
            county: "placestest",
            country: "countrytest"
        },  
        accountid: "ac9840",
        firstname: "updateduser",
        lastname: "abc",
        phone: 987654321,
    }
}
const UserPage = () => {
    const [userProfile, SetuserProfile]= useState({}); 

    useEffect (() =>{
        if (UserData)
        {
            SetuserProfile (UserData)
        }
    }, []); 
    
    const {email, password, accounts} = UserData;
    return(
        <div className="center">
            <div className="card">
             <UserComponents 
                 email={email}  
                password={password}
                accounts={accounts}
             /> 
             </div>
        </div>
    )

}

export default UserPage; 