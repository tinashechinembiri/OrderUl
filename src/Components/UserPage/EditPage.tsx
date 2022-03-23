import React, {useContext} from "react";
import DynamicEditPage from './Components/DynamicEditPage';
import {UseuserProfileState}from './Components/CustomHooks/UserContextdat'


const EditPage = () => { 
  const {data, _errors} = UseuserProfileState(); 
  const {email, password, accounts} = data; 
    const page = () => {
      let path  = window.location.pathname.replace('/edit/', '');  
      
      switch (path)
      {
          case "name": 
             return <DynamicEditPage
                email = {email}
                firstname={accounts.firstname}
             />; 
          case "email": 
          return <DynamicEditPage
          email = {email}
          newemail={email}
          />
       
          case "phonenumber": 
            return <DynamicEditPage
            email = {email}
                phone={accounts.phone}
            />
          case "password": 
            return <DynamicEditPage
            email = {email}
            password={password}
            />
      }
    }

    return (
        
        <React.Fragment>
            {page()}
        </React.Fragment>
    )

}

export default EditPage; 