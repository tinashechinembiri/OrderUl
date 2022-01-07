import React from "react";
import './CSS/Advert.css'; 
const advertComponents = (props) => {
        console.log(props)
        const adverts = props; 
    return(
        <li className="li-list-advert">
            <div className="advert-individual-items" >
                <h1> {adverts.name}</h1>
            </div>

        </li>
    )
}
export default advertComponents