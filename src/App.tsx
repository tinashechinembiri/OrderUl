
import React ,{ useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
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
import Usercontextprovider from './Components/UserPage/Components/CustomHooks/UserContextdat'
import CreateUser from './Components/Registration/CreateUser'
import UserPage from './Components/UserPage/UserPage'
import EditPage  from './Components/UserPage/EditPage'
function App() {
  //const [currentUser , setCurrentuser] = useState <any|null>(); 
  const dispatch = useAuthDispatch(); 
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
      <Usercontextprovider>
        <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login'  element={<Login/>}/>
          <Route path='/register' element={<CreateUser/>}/>
          <Route path='/userprofile' element={<UserPage/>}/>
          <Route path='/edit/:editpage' element={<EditPage/>}/>      
        </Routes>
        </Router>
      </Usercontextprovider>
      </AuthPrrovider>
    </div>
  );
}

export default App;
