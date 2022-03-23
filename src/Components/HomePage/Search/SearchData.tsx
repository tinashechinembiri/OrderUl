import React, { Fragment } from "react";
import ReactDOM from 'react-dom';
const  SearchData = ({responseData= []}) =>  responseData  ? ReactDOM.createPortal (

        <Fragment>
            {<ul> {responseData?.map((data:{id:string, Name:string}) => (
                   <li key={data.id as string}>
                   {data.Name}
                  </li>
             
            ))}</ul> }
        </Fragment>, document.body

):  null;  

export default SearchData; 