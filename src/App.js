import React, {useContext} from "react"

import HeaderComponent from "./components/header/Header"
import AuthForm from "./pages/authForm/authForm";
import WelcomePage from "./components/welcome/Message"
import Profile from "./components/userCard/UserCard"
import Logout from "./components/authForm/Logout"


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

  

  return (
    <Router>
      <UserAuthState>
      <div>
        <HeaderComponent/>
        <Switch>
          <Route path="/public">
            <WelcomePage/>
          </Route>
          <Route path="/login">
            <AuthForm/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
          <Route path="/private">
            <Profile/>
          </Route>
        </Switch>        
      </div>
      </UserAuthState>
    </Router>
  );
}

export default App;
