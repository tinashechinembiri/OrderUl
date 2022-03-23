import React from "react";
import  {UserInterface} from'../Components/Interface/UserInterface'; 
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
type userprofileData = {
    data : UserInterface, 
    _errors? : object|null
}
interface EditData {
    email : string, 
    [key: string|number] : string |number|undefined, 

}
const getuserdata = async () => {
   
  try {
      return {data:UserData, _errors:undefined}

  } catch (e)
  {
    return {data:UserData, _errors:{}}
  }

}

const updateProfile = async (payload:userprofileData) => {
    console.log(payload); 

}

export {getuserdata, updateProfile}