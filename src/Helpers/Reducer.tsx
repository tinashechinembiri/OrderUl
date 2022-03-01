import LoginService from'../Components/Login/Service/LoginService'


 export interface Istate  {
    user?:{
        username:string, 
        token:string
    }
    loading?:boolean | false, 
    _errors?: string|null
 }
export interface ExtraState{
    loading:boolean, 
    errors?: string|null
}
export interface UserState  {
    username?: string | null, 
    token?: string | null,  
}
export const intinialstates : Istate =  {
    user:LoginService.getCurrentUser(),
    loading : false, 
    _errors : null

    
}
//https://blog.harveydelaney.com/creating-your-own-mini-redux-in-react/
//https://www.sumologic.com/blog/react-hook-typescript/
export type actionType = {type:'request',  data:Istate}|{type:'success', data:Istate} |{type:'error',  data:Istate} | {type:'current', data:Istate} | {type:'logout'}; 

export const AuthReducer = (intialstate:Istate  , action:actionType) =>
{   
    console.log(action)
    switch(action.type){
        case'request':
        return {...intialstate}; 
        case'success':         
         return {
            ...intialstate,
            user: action.data?.user,    
            loading:false, 
            _errors:null
            }
        case'error': 
       
        return {
            ...intialstate,
            _errors: action.data._errors
        }
        case'current': 
        return {
            ...intialstate,
            user: action.data?.user,    
            loading:false, 
            _errors:null
        }
        case  'logout': 
        return {
            ...intialstate,
            user:undefined,
            loading:false, 
            _errors:null
        }
        
        default :
        return {...intialstate}; 
    }

}