import React, {  Fragment} from "react";
import '../CustomHooks/CSS/WhatsOn.css'

const SearchBar = ({input , onchangeInput} : {input :string , onchangeInput:Function}) => {
    const onChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        onchangeInput(e.target.value); 
    }

   return( 
    <Fragment>
        <input   
        className="search_input" 
        type="text"
        id="movie-search"
        value={input}
        placeholder="Start typing a film or event"
        onChange={onChange}
        />
    </Fragment>  
)}
export default SearchBar; 