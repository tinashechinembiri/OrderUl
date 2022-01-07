import React, { useState } from "react";
import CinemaModal from './CinemaModal'
import useModal from "./CustomHooks/UseModal";
import './CustomHooks/CSS/WhatsOn.css'; 
import Search from'./Search/Search'; 
import AdvertPanel from "./WhatsOnPanel/AdvertPanel";

const Dummy_Places :Array<{id:string, Name:string}> =  [
    {id : 'L1' , Name:'Leeds Cinema' }, 
    {id : 'N1' , Name:'Northampton Cinema' }, 
    {id : 'M1' , Name:'Manchester Cinema' }, 
    {id : 'C1' , Name:'Chester Cinema' }, 
    {id : 'LN1' , Name:'London Cinema' }, 
    {id : 'B1' , Name:'Birmingham Cinema' },     
]; 


const WhatsOn = () => {
    const [location, setLocation] = useState<string|null>(''); // using array destructuring 
    const {isShowing, toggle} =   useModal(); // using object destructuring 
    const setSelectedLocation = (location : string| null) => {
        setLocation(location);
        if(location)
        {
            toggle(); 
        }
    }
      
      
        

  /*    
    const  cinemaPlaces = <select defaultValue="Please select your location" onChange={setSelectedLocation} value={location}> {
        
        Dummy_Places.map((data) =>(
                    <option key={data.id} value={data.Name}>
                        {data.Name}
                    </option>))}; </select>*/

    return(
        <React.Fragment>
                <div className="input-bars">
                    <div className="searchbars-total">
                        <h1 className="display-header"> Whats on</h1>  
                    
                        <input className="location-input" onClick={toggle} readOnly value={!location  ? 'choose your location': location}/>                                  
                        <CinemaModal
                           
                         isShowing={isShowing}
                         hide={toggle}  
                         Dummy_Places_data={Dummy_Places}  
                         setSelectedLocation={setSelectedLocation}
                         />    
                        <Search />
                   </div>
                         <AdvertPanel/>
                </div> 
                            
        </React.Fragment>
    );
}

export default WhatsOn; 