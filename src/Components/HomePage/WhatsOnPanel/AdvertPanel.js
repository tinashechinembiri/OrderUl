import React, { useState, Fragment } from "react";
import Advert from'./Advert'; 
import './CSS/Advert.css'; 

const Dummy_Advert = [
    {'id':'test1', 'name':'Whats on', 'image':''},
    {'id':'test2', 'name':'Comming soon', 'image':''},
    {'id':'test3', 'name':'Covid requirement', 'image':''}
];

const AdvertPanel =() => {
    const [adverts, setAdverts] = useState(Dummy_Advert); 

    return(
        <Fragment>
            <Advert
                advert_Data={adverts}
            />
        </Fragment>
    )

}
export default AdvertPanel; 