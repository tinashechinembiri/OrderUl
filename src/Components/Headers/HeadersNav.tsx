import React, {  } from "react";
import'./Css/Header.css'
import {currentUser} from '../../Interface/CurrentUser'; 

const  Headers = ({currentuser }:currentUser) => {
    const loggedin = currentuser; 
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
                            {currentuser?.name}
                        </a>
                    </li>
                    <li>
                        <a href="/login">LogOut</a>
                    </li>
                </div>)
                 :(<div>
                     <li> 
                         <a href={"/login"}> Login </a>
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