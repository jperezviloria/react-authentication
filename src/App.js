import React, {useContext, useEffect} from "react"
import "./App.css"

import HeaderComponent from "./components/header/PublicHeader"
import StudentHeader from "./components/header/PrivateStudentHeader"
import HeaderFilter from "./components/header/HeaderFilter"

import AuthForm from "./pages/authForm/authForm";
import WelcomePage from "./components/welcome/Message"
import Profile from "./components/userCard/UserCard"
import Logout from "./components/authForm/Logout"
import Sprinner from "./components/welcome/Sprinner"
import Prices from "./pages/prices/prices"
import StudentBoard from "./pages/studentProgress/studentProgress"
import GetCertificate from "./pages/getCertificate/getCertificate.jsx"


import PrivateRoutes from "./services/PrivateRoutes"
import PublicRoutes from "./services/PublicRoutes"


import UserAuthState from "./context/userAuth/userAuthState"
import UserAuthContext from "./context/userAuth/userAuthContext"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

//import UserState from "./context/user/userState"


const App = () =>{

  //const {isAuthenticated} = useContext(UserAuthContext)

  useEffect(() =>{
    
  })


  return (
    <Router>
      <UserAuthState>
      <div className = "app-style">
        {/* <HeaderComponent/> */}
        {/* {isAuthenticated ? <PublicHeader/> : <PrivateHeader/>} */}
        {/* {true ? <HeaderComponent/> : <StudentHeader/>} */}
        <HeaderFilter/>
        <Switch>
          {/* <PublicRoutes exact path= "/public" component = {WelcomePage}/> */}
          <Route path="/public">
            <WelcomePage/>
          </Route>
          <Route path="/login">
            <AuthForm/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
          {/* <PrivateRoutes exact path= "/private" component = {Profile}/> */}
          <Route path="/private">
            <Profile/>
          </Route>
          <Route path="/prices">
            <Prices/>
          </Route>
          <Route path="/studentboard">
            <StudentBoard/>
          </Route>
          <Route path="/getcertificate">
            <GetCertificate/>
          </Route>
        </Switch>        
      </div>
      </UserAuthState>
    </Router>
  );
}

export default App;
