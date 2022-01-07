import React, {  } from "react";
import '../CustomHooks/CSS/WhatsOn.css'

const SearchBar = ({input , onchangeInput} : {input :string , onchangeInput:Function}) => {
    const onChange =(e:React.ChangeEvent<HTMLInputElement>) => {

        onchangeInput(e.target.value); 
    }

   return(

    
    <React.Fragment>
    
        <input  
       
        type="text"
        id="movie-search"
        value={input}
        placeholder="search movie"
        onChange={onChange}
        />
 
    </React.Fragment>
    
)}
export default SearchBar; 