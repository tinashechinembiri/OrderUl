import React, {useState} from "react";

import EditPage from "../EditPage";
import {UserprofileAuthDispatch} from './CustomHooks/UserContextdat'
//reducers 
// https://time2hack.com/spreading-splitting-reducer-in-files/
//https://medium.com/velotio-perspectives/the-ultimate-cheat-sheet-on-splitting-dynamic-redux-reducers-322ca17d5350
//https://www.sitepoint.com/replace-redux-react-hooks-context-api/
//https://hinty.io/aradchenko/simple-way-to-split-data-handling-logic-in-complex-react-redux-app/
interface EditData {
    email : string, 
    [key: string|number] : string |number|undefined, 

}
const DynamicEditPage = ( data : EditData) => {
    const userprofiledispatch = UserprofileAuthDispatch(); 
    const [value, setValues] = useState ({}); 
    const onChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    
        let name = e.target.name; 
        let val = e.target.value; 

        setValues({
            ...value, 
            [name] :val
        }); 
    }
   const submitUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        
       if (value)
       {
           const payload = {... value , email:data.email}; 
           console.log(payload)
           
           console.log(payload)
      //  userprofiledispatch ({type:'edit',  payload } )
       }
       setValues({}); 
      
   }

    const obj = Object.entries(data).map(([keys, values]) => {
        if (keys.trim() !== "email")
        {
         return(   
            <div key={keys}>
                <h1>Change your {keys}</h1>
                <label>{keys}</label>
                    <p>{values}</p>
                
                    <div>       
                        <label>Update {keys} </label>
                        <input onChange={onChange} name ={keys} placeholder={`update${keys}`}/>
                    </div>
                    
            </div>)
        }
    }); 
   return(
       <React.Fragment>
          {obj}
          <div>
              <button onClick={submitUpdate}> update User</button>
          </div>
          
       </React.Fragment>
   ) 
}
export default DynamicEditPage; 