import React from "react"
import AuthForm from "./pages/authForm/authForm";
import UserAuthState from "./context/userAuth/userAuthState"
//import UserState from "./context/user/userState"


function App() {
  return (
    <div>
      <UserAuthState>
        <AuthForm/>
      </UserAuthState>
      
    </div>
  );
}

export default App;
