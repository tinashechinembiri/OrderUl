import axios from "axios";

const Login_Service_Url  = 'http://localhost:1337/api/auth/'
// observer could help 
interface IResponse{
    status:number, 
    
}
const Login = async (user : {username:string, password:string}) => {
            const username = user.username; 
            const password =user.password; 
        const requestOptions = {
            method:'post',
           // mode: 'no-cors', 
           crossDomain:true,
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',  },
            body : JSON.stringify({username, password})
        }
        try {
             const response =  await fetch( Login_Service_Url+'login/', 
            requestOptions); 
             const {code, token, message} = await response.json(); 

           //  console.log(message); 
             
             if (code != 200)
             {
                
             }
        


        }
        catch(ex:any)
        {
          //  console.log(ex);
        }      
}; 
/*
const register = async(registerData) => {
    return axios.post ( Login_Service_Url+ 'register', 
       registerData 
    ).then( (response:object) => {
        if (response?.code !== 200 && !response?.success)
        {
            // this will return errors 
        }
        return ; // this will return the positive  and  should call login and auto login 
    }); 
}*/
const logout = () => {
    // remove login from  local storage 
}

const getCurrentUser = () => {
    // return json.parse from local storage 

    return null; 
}
export default { Login , logout, getCurrentUser}; 