
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

function App() {
  const [currentUser , setCurrentuser] = useState <any|null>()
  useEffect(() => {
    const user = LoginService.getCurrentUser(); 
    if(user)
    {
      setCurrentuser(user); 
    }
  }, []); 

  const logOut = () => {
    LoginService.logout(); 
  }

  return (
    <div className="App">
      <div> 
      <Headers  
       currentuser={currentUser} 
       />
      </div>
    
      
      <BrowserRouter>
        <Routes>
          <Route path='/'  element={<MainPage/>}/>
          <Route path='/login'  element={<Login/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
