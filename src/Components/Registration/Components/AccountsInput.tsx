import React, { Fragment } from "react";
import'../CSS/CreateUser.css'; 
import {IErrors} from '../Interface/Registration'
interface IComponentsInterface{
    onchange:(event: React.ChangeEvent<HTMLInputElement>)=> void
    errors:IErrors
}; 
const  AccountsData = [
    {name:'firstname',_Placeholder:'Enter Your Firstname' , type:'text',  }, 
    {name:'lastname',_Placeholder:'Enter Your Lastname' , type:'text',  },
    {name:'phone',_Placeholder:'Enter Your Phone' , type:'text',  }, 
    {name:'addressname',_Placeholder:'Enter Your Address name' , type:'text',  }, 
    {name:'postcode',_Placeholder:'Enter Your Post Code' , type:'text',  },
    {name:'county',_Placeholder:'Enter Your county' , type:'text',  }, 
    {name:'country',_Placeholder:'Enter Your Country' , type:'text',  }
]; 
const Accountsinput = ({onchange, errors}:IComponentsInterface) => {
    const  inputs = () => {
        return  AccountsData?.map(({name,_Placeholder, type }) => {
            return< div className="input-container" key={name}> 
            {
           (errors[name]|| null) && <h3> {(errors[name] || null)}</h3>
            }
            <input
            name={name}
            placeholder={_Placeholder}
            type={type}
            onChange={onchange}
            /> 
            </div>
        })
    }
    return(
        <Fragment>
            {inputs()}
        </Fragment>
       )

}

export default Accountsinput; 