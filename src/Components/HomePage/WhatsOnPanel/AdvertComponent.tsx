import React from "react";
import './CSS/Advert.css'; 
const advertComponents = (props:any) => {
        const adverts = props; 
    return(
        <li className="li-list-advert" >
            <a className="advert-individual-items" >
            <img width="350px" height="215px" src ={process.env.PUBLIC_URL+adverts.image}/> 
            <span className="advert_on_peak_details"> 
                <span>{adverts.name}</span>
            </span>
            </a>
                      
          
        </li>
    )
}
export default advertComponents