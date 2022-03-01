import React, {useState, useEffect} from "react";
import  './CSS/UserComponents.css'
interface UserInterface {
    email :string, 
    password:string, 
    accounts: {
        Address: {
            addressname: string,
            postcode:string,
            county: string,
            country: string
        },  
        accountid: string,
        firstname: string,
        lastname: string,
        phone: number,
    }
}
const UserComponents = ({email, password, accounts}: UserInterface) => {
    return(<React.Fragment>
        <div className="UserProfiles">
        <h1>Account</h1>
            <table className="tablesProfile">
                <tr>
                    <td>Name </td>
                    <td>{accounts.firstname} , {accounts.lastname}</td>
                </tr>
                <tr> 
                    <td>Email</td>
                    <td>{email}</td>
                </tr>
                <tr> 
                    <td>PhoneNumber</td>
                    <td>{accounts.phone}</td>
                </tr>
                <tr> 
                    <td>Password</td>
                    <td >{password}</td>
                </tr>
            </table>
        </div>
        <div >
        <button className="button"> EDIT</button>
        </div>
        </React.Fragment>
    )
}

export default UserComponents; 