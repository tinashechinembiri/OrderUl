import React, { useState, useEffect, lazy, Suspense } from "react";
import CinemaModal from './CinemaModal'
import useModal from "./CustomHooks/UseModal";
import './CustomHooks/CSS/WhatsOn.css'; 
import GetLocationdata from  './Service/LocationService'

const AdvertPanel = lazy(() => import('./WhatsOnPanel/AdvertPanel')); 
const Search = lazy(() => import('./Search/Search'));
const WhatsOn = () => {
    const [location, setLocation] = useState<string|null>(''); // using array destructuring 
    const {isShowing, toggle} =   useModal(); // using object destructuring 
    const [cinemaPlaces, setcinemaPlaces] = useState<Array<{id:string, Name:string}>>([]); 

  

    const setSelectedLocation = (location : string| null) => {
        setLocation(location);
        if(location)
        {
            toggle(); 
        }
    }
    const getlocation = async () => {
        const data = await GetLocationdata(); 
        setcinemaPlaces(data)
    }
    useEffect( () =>{
        getlocation();  
    }, []);
    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="input-bars">
                    <div className="searchbars-total">
                        <div role ="heading" aria-level={2}className="display-header"> Whats on</div>  
                    <div className="movie-input">
                        <input className="location-input" onClick={toggle} readOnly value={!location  ? 'choose your location': location}/>                                  
                     <CinemaModal     
                         isShowing={isShowing}
                         hide={toggle}  
                         Dummy_Places_data={cinemaPlaces}  
                         setSelectedLocation={setSelectedLocation}
                         />    
                        <Search/>
                        </div>
                   </div>
                   
                         <AdvertPanel/>
                        
                </div> 
                </Suspense>        
        </React.Fragment>
    );
}

export default WhatsOn; 