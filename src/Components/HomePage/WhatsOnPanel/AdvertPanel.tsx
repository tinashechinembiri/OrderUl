import React, { useState, Fragment, useEffect , useMemo} from "react";
import Advert from'./Advert'; 
import './CSS/Advert.css'; 

const Dummy_Advert :Array<{id:string, name:string, image:string}> = [
    {'id':'test1', 'name':'Whats on', 'image':'/assets/whatsonimage.jpg'},
    {'id':'test2', 'name':'Comming soon', 'image':''},
    {'id':'test3', 'name':'Covid requirement', 'image':''}
];
const AdvertPanel =() => {
    const [adverts, setAdverts] = useState<Array<any>>([]); 
    console.log('rendered')
    useEffect( () =>{
        if (Dummy_Advert.length >=0)
        {
            setAdverts(Dummy_Advert); 
        }
    }, []); 

    return(
        <Fragment>
            <Advert
                advert_Data={adverts}
            />
        </Fragment>
    )

}
export default React.memo(AdvertPanel); 