import React from "react"
import AuthForm from "./pages/authForm/authForm";

import UserState from "./context/user/userState"


function App() {
  return (
    <div>
      <UserState>
      <AuthForm/>
      </UserState>
    </div>
  );
}

export default App;
