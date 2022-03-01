import React, {  Fragment, lazy, Suspense } from "react";
import './CSS/Advert.css'; 
const AdvertComponets = lazy(() => import('./AdvertComponent'));
const Advert = (props:any) => 
{    
    const loadData = () => {
      const  {advert_Data}  = props; 
        if(advert_Data)
        {
            return (
                props.advert_Data.map((adverts : {id:string, name:string, image:string})=>(
                  
                    <AdvertComponets
                    name={adverts.name}
                    image={adverts.image}
                    key={adverts.id}
                    />
                 
                ))
            )
        }
        return null; 
    }
  
    return(
        <Fragment>
              <Suspense fallback={<div>Loading...</div>}>
            <ul className="ul-list-adverts">
                {
                    loadData()
                }
            </ul>
            </Suspense>

        </Fragment>
    )

}

export default Advert; 