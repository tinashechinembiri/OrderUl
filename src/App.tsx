
import React ,{ useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './Components/MainPage'; 
import Login from'./Components/Login/Login'; 
import './App.css';
import LoginService from './Components/Login/Service/LoginService';
import Headers from './Components/Headers/HeadersNav';
import {AuthPrrovider} from'./Helpers/Context'
import {useAuthDispatch, useAuthstate} from'./Helpers/Context'
import CreateUser from './Components/Registration/CreateUser'
import UserPage from './Components/UserPage/UserPage'
function App() {
  //const [currentUser , setCurrentuser] = useState <any|null>(); 
  const dispatch = useAuthDispatch(); 
  const curentstate = useAuthstate(); 
  useEffect( () => {
    const user = LoginService.getCurrentUser(); 
    if(user)
    {
      dispatch ({type:'current', data:LoginService.getCurrentUser()})
    }
  }); 

  const logOut = () => {
    LoginService.logout(dispatch); 
  }

  return (
    <div className="App">
      <AuthPrrovider>
      <div> 
      <Headers
        logouts={logOut}
      />
      </div>
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register' element={<CreateUser/>}/>
          <Route path='/userprofile' element={<UserPage/>}/>
        </Routes>  
      </BrowserRouter>
      </AuthPrrovider>
    </div>
  );
}

export default App;
