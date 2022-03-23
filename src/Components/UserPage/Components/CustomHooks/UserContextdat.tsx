
import React, {createContext,ReactNode, useEffect, useContext, useReducer} from "react";
import  {UserInterface} from'../Interface/UserInterface'; 
import {getuserdata,updateProfile} from '../../service/Userprofileservice';


const _userprofileData = {
    data: {
        user_id: "",
        email: "",
        password: "",
        accounts: {
            Address: {
                addressname: "",
                postcode: "",
                county: "",
                country: ""
            },  
            accountid: "",
            firstname: "",
            lastname: "",
            phone: undefined,
        }
    },
     _errors:undefined


}
interface EditData {
    email : string, 
    [key: string|number] : string |number|undefined, 

}

type userprofileData = {
    data : UserInterface, 
    _errors? : object|null
}

const Usercontext = createContext<userprofileData> (_userprofileData); 
const UserprofileDispatcher = createContext <React.Dispatch<actionType>>(() =>null); 
export type actionType = {type:'userprofile',  userprofile:userprofileData, }| {type:'edit', userprofile:any }; 
// type AppContextValue = {
//     userProfile: UserInterface;
//     // type, you get when hovering over `setState` from `useState`
//     SetuserProfile: React.Dispatch<React.SetStateAction<UserInterface>>
//   };
const UserProfileReducer = ( _userprofileData : any, action :actionType) => {

    switch(action.type)
    {
           case  'userprofile':
               const {userprofile} = action 
               if (userprofile._errors)
               {
                   console.log('errors')
                   return {
                       ..._userprofileData, 
                    
                       _errors:{..._userprofileData._errors, _errors:userprofile._errors}
                   }
               }
              return {
                  data : userprofile.data,
                  _errors:{..._userprofileData._errors, _errors:null}
              }
            case 'edit': 
              if (userprofile._errors)
              {
                 return {
                     ..._userprofileData, 
                 
                     _errors:{..._userprofileData._errors, _errors:userprofile._errors}
                 }

              }
                return {
                     data : userprofile.data,
                     _errors:{..._userprofileData._errors, _errors:null}
                     }

              default : 
              return _userprofileData; 
              
    }
}

export function UseuserProfileState () {
    const context = useContext(Usercontext)
    if (context === undefined)
    {
        throw new Error('hasnt been created'); 
    }
    return context; 

}
export function  UserprofileAuthDispatch () {
    const context = useContext(UserprofileDispatcher); 
    if (context === undefined)
    {
        throw new Error('hasnt been created'); 
    }
    return context; 
}
const userprofileAysncHandler = (dispatch:React.Dispatch<actionType>) => {
    return async (action :actionType) => {
        let payload; 
        switch (action.type)
        {
            case 'edit':
                const  updateprofile =  await updateProfile(action.userprofile);
                payload = {...updateProfile  }
                //dispatch

                
            break; 
            case'userprofile':

                 payload = {...action.userprofile}; 
             
                 dispatch ({type:'userprofile', userprofile:payload})
            break


        }
    }
}

export const  Usercontextprovider =({children}:{ children: ReactNode}) =>{
    const [value, dispatch] = useReducer (UserProfileReducer, _userprofileData )
    
  
    
    return(
        <Usercontext.Provider value={value}>
        <UserprofileDispatcher.Provider value={userprofileAysncHandler(dispatch)}>
             {children}
        </UserprofileDispatcher.Provider>
        </Usercontext.Provider>
    )
}


export {Usercontext}
export default Usercontextprovider; 