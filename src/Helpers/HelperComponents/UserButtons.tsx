import '../../Components/Registration/CSS/CreateUser.css'

const UserButtons = ({functiontypes, buttonname}:{functiontypes:()=>void,buttonname:string }) => { 
    return(
       <button
        onClick={functiontypes}
        className="button-items"
       >
        {buttonname}
       </button>
    )
}

export default UserButtons; 