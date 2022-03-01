import React, { useEffect } from "react";
import'./Css/Header.css'
import { useAuthstate,useAuthDispatch} from'../../Helpers/Context'

const  Headers = ({logouts}: {logouts : () =>void}) => {
    const {user} = useAuthstate(); 
    const dispatch = useAuthDispatch
    const loggedin = user; 

    useEffect(()=>{

    }, [user]); 
    return(
        <header className="headers">
            <img src={ process.env.PUBLIC_URL +"/assets/logo.jfif"} className="Logo" alt="logo"/>

            <nav className="nav-items">
                <a>Whats on </a>
                <a>Big Screen Events</a>
                <a>Inside Venue</a>
                <a>offers</a>

                {loggedin ? 
                (<div>
                    <li>
                        <a href={"/userprofile"}>
                            {user.username}
                        </a>
                    </li>
                    <li>
                        <a onClick={logouts} href="/login">LogOut</a>
                    </li>
                </div>)
                 :(<div>
                     <li> 
                         <a  href={"/login"}> Login </a>
                     </li>
                     <li>
                         <a href={"/register"}>
                            Sign Up 
                         </a>
                     </li>

                 </div>)}
            </nav>
        </header>
    )
}
export default Headers