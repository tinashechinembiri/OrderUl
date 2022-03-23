import React from 'react';
import{actionType} from '../../../Helpers/Reducer'; 
import axios from 'axios';
import getRandomInt from './Helpers/Registerhelpers'


const Login_Service_Url  = 'http://localhost:1337/api/auth/'
// observer could help 
interface IResponse{
    status:number, 
    
}
export interface Icreateuser{
    email : string, 
    password : string, 
    firstname:string, 
    lastname:string, 
    phone:string, 
    addressname:string, 
    postcode:string, 
    county:string, 
    country:string
}
const LoginService = async (user : {username:string, password:string}, dispatch:React.Dispatch<actionType> ) => {
        const username = user.username; 
        const password =user.password; 
        const requestOptions = {
            method:'post',
           crossDomain:true,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',  },
            body : JSON.stringify({username, password})
        }
        try {
             const response =  await fetch( Login_Service_Url+'login/', 
             requestOptions); 
             const {code, token, message} = await response.json(); 
             if (code as number !== 200)
             {
                dispatch({type:'error', data: {_errors:message}}); 
                
                 return {error:message}    
             } 
             dispatch({type:'success', data: {user:{token:token, username:username}}})
             localStorage.setItem('user', JSON.stringify({token, username:username}));
        }
        catch(ex:any)
        {
         dispatch ({type:'error', data: {_errors:ex}}); 
        }      
}; 

const register = async(registerData:Icreateuser) => {
 const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',  }
    const _userData = createregisterData(registerData); 
    axios.post(Login_Service_Url+'signup/',_userData, {headers})
    .then((response:any) => {
       if (response.code !== 200)
       {
            return false; 
       }
       return true 
    }).catch((ex:any)=> {
        console.log(ex); 

    })
    
}

const createregisterData = (registerData:Icreateuser) => {
    const accountid = 'ac'+getRandomInt(10000) as string; 
    const user_id = 'user_'+getRandomInt(10000) as string; 
    const _createdUser = {
        accountid, 
        user_id, 
        ...registerData
        // user_id: user_id, 
        // email:registerData.email, 
        // password:registerData.password, 
        // Account:{
        //     accountid: accountid, 
        //     firstname:registerData.firstname, 
        //     lastname:registerData.lastname, 
        //     phone:registerData.phone, 
        //     Address :{
        //         addressname:registerData.addressname, 
        //         postcode:registerData.postcode, 
        //         county:registerData.county, 
        //         country:registerData.country
        //     }
        // }  
    }
    return _createdUser; 
}

const logout = (dispatch:React.Dispatch<actionType>) => {
    try{
    dispatch({type:'logout'})
    // remove login from  local storage 
    localStorage.removeItem('user'); 
    }catch (ex :any)
    {
        console.log(ex); 
    }
    
}

const getCurrentUser = () => {
    // return json.parse from local storage 
    try{
        let value = localStorage.getItem('user'); 
        if (typeof value === 'string') {
            const parse = JSON.parse(value); 
            return parse; 
        }
    }catch (ex:any) 
    {
    
    } 
}
export  { LoginService , logout, getCurrentUser,register }; 