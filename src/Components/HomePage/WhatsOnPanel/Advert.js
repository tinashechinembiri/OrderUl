import React, {  Fragment } from "react";
import AdvertComponets from './AdvertComponent'
import './CSS/Advert.css'; 
const Advert = (props) => 
{
  
    return(
        <Fragment>
            <ul className="ul-list-adverts">
                {
                    props.advert_Data.map((adverts)=>(
                        <AdvertComponets
                        key={adverts.id}
                        name={adverts.name}
                        image={adverts.image}
                        
                        />
                    ))
                }
            </ul>

        </Fragment>
    )

}

export default Advert; 