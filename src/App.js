import React, {useContext} from "react"


import HeaderComponent from "./components/header/Header"
import AuthForm from "./pages/authForm/authForm";
import WelcomePage from "./components/welcome/Message"
import Profile from "./components/userCard/UserCard"
import Logout from "./components/authForm/Logout"
import Sprinner from "./components/welcome/Sprinner"


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

  

  return (
    <Router>
      <UserAuthState>
      <div>
        <HeaderComponent/>
        {/* {isAuthenticated ? <PublicHeader/> : <PrivateHeader/>} */}
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
          <Route path="/spinner">
            <Sprinner/>
          </Route>
        </Switch>        
      </div>
      </UserAuthState>
    </Router>
  );
}

export default App;
