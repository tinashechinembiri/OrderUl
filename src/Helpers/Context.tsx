import React ,{ useContext, createContext, useReducer, ReactNode } from 'react';
import {AuthReducer, intinialstates,Istate, actionType } from'./Reducer'

const AuthStateContext = createContext<Istate>(intinialstates); 
const AuthDispatchContext = createContext <React.Dispatch<actionType>>(() =>null); 

export function useAuthstate() {
    const context = useContext(AuthStateContext);
    if(context === undefined)
    {

    }
    return context; 
}

export function useAuthDispatch (){
    const context = useContext(AuthDispatchContext);
    if(context === undefined)
    {
      
    
    }
    return context; 
}

export const AuthPrrovider = ({children}:{
    children: ReactNode;
  }) => {
      
    const [user, dispatch] = useReducer(AuthReducer, intinialstates)
    const value = { user, dispatch };
  
    return(
        <AuthStateContext.Provider value={user}>
			<AuthDispatchContext.Provider value={dispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
    ); 
}
//https://github.com/nero2009/login-auth-useContext/blob/master/src/Context/reducer.js
//https://stackoverflow.com/questions/67144122/typescript-how-to-splite-react-context-with-dispatch-actions
