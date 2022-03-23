import'./Css/Header.css'
import { useAuthstate} from'../../Helpers/Context'

const  Headers = ({logouts}: {logouts : () =>void}) => {
    const {user} = useAuthstate(); 
    const loggedin = user; 

     
    return(
        <header className="headers">
            <img src={ process.env.PUBLIC_URL +"/assets/logo.jfif"} className="Logo" alt="logo"/>

            <nav className="nav-items">
                <a href ='/'>Whats on </a>
                <a href ='/'>Big Screen Events</a>
                <a href ='/'>Inside Venue</a>
                <a href ='/'>offers</a>

                {loggedin ? 
                (<div className="nav-items_div">
                    <li>
                        <a href={"/userprofile"}>
                            {user.username}
                        </a>
                    </li>
                    <li>
                        <a onClick={logouts} href="/login">LogOut</a>
                    </li>
                </div>)
                 :(<div className="nav-items_div">
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