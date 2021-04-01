import React, { useEffect, useContext, useState} from "react"
import UserAuthContext from "../../context/userAuth/userAuthContext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const HeaderComponent = () =>{

    const {isAuthenticated, LogoutUser} = useContext(UserAuthContext)

    const onSubmitLogout = () =>{
        LogoutUser()
    }

    return (
        <div>
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
            {
              isAuthenticated
              ? <Link to="/public" onSubmit = {onSubmitLogout()}>
                logout
                </Link>
                : <Link to="/login">
                  login
                  </Link>
            }
            </li>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
            
          </ul>
        </div>
    )
}

export default HeaderComponent;