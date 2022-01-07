import React, {  } from "react";
import ReactDOM from 'react-dom';
import './CustomHooks/CSS/UserModal.css'; 
//https://upmostly.com/tutorials/modal-components-react-custom-hooks
interface cinemaModal {
    isShowing: boolean, 
    hide:any, 
    Dummy_Places_data: Array <{
        id:string, 
        Name:string
    }>, 
    //React.SetStateAction<string|null>
    setSelectedLocation: (value: string | null) => void

}

const CinemaModal = ({isShowing, hide , Dummy_Places_data, setSelectedLocation}: cinemaModal  ) =>
{
    const handleLocationChange = (e:any) => {
        console.log(e.target.value)
        setSelectedLocation (e.target.value)
       
      
    }
    if (!isShowing) return null
    return ReactDOM.createPortal( 
    
        <React.Fragment>
            
            <div className="modal-overlay">
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
               
                 <div className="modal">
                 <div className="modal-header">
                    <h1 className="modal-title">Choose your venue</h1>
                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>X</button>
                    </div>
                    {<ul className="ul-wrapper"> {
                        Dummy_Places_data.sort((a:{Name:string}, b:{Name:string}) => {
                            return a.Name.normalize().localeCompare(b.Name.normalize());     
                        }).map((data : {Name?:string, id?:string,}) =>(
                          <li className="li-wrapper" key={data?.id} >
                          
                                  <option key={data?.id} value={data.Name} onClick={handleLocationChange}> {data.Name} </option>
                                 
                        </li>))} 
                        </ul>}
                </div>
            </div>
            </div>
    
        </React.Fragment>,document.body
    ); 
}



        //const [showModal, setShowModal] = useState(false); 
//https://dev.to/bhuma08/react-using-modal-in-functional-components-3po2
//https://upmostly.com/tutorials/modal-components-react-custom-hooks
  /*  return(
        <React.Fragment>
            
        </React.Fragment>

    ); 

}*/
        

export default (CinemaModal); 