import React, {useContext} from "react"
import UserAuthContext from "../../context/userAuth/userAuthContext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const Logout = () =>{
    const {LogoutUser} = useContext(UserAuthContext)


    const onSubmitLogout = () =>{
        console.log("Estamos siendo deslogueados")
    }

    return (
        <li>
              <Link to="/public" onSubmit = {(onSubmitLogout)}>Logout</Link>
        </li>
    )
}

export default Logout;