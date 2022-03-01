import React, { useState, useEffect, lazy, Suspense } from "react";
import CinemaModal from './CinemaModal'
import useModal from "./CustomHooks/UseModal";
import './CustomHooks/CSS/WhatsOn.css'; 
//import AdvertPanel from "./WhatsOnPanel/AdvertPanel";

const AdvertPanel = lazy(() => import('./WhatsOnPanel/AdvertPanel')); 
const Search = lazy(() => import('./Search/Search'));

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
    const [cinemaPlaces, setcinemaPlaces] = useState<Array<{id:string, Name:string}>>([]); 
    useEffect( () =>{

        if(Dummy_Places)
        {
            setcinemaPlaces(Dummy_Places); 
        }
     
    }, []);

    const setSelectedLocation = (location : string| null) => {
        setLocation(location);
        if(location)
        {
            toggle(); 
        }
    }
      
    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="input-bars">
                    <div className="searchbars-total">
                        <span className="display-header"> What's on</span>  
                    <div className="movie-input">
                        <input className="location-input" onClick={toggle} readOnly value={!location  ? 'choose your location': location}/>                                  
                        <CinemaModal
                           
                         isShowing={isShowing}
                         hide={toggle}  
                         Dummy_Places_data={cinemaPlaces}  
                         setSelectedLocation={setSelectedLocation}
                         />    
                        <Search />
                        </div>
                   </div>
                   
                         <AdvertPanel/>
                        
                </div> 
                </Suspense>        
        </React.Fragment>
    );
}

export default WhatsOn; 