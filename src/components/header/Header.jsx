import React, { useEffect, useContext, useState} from "react"
import sw from "sweetalert2"
import UserAuthContext from "../../context/userAuth/userAuthContext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const HeaderComponent = () =>{

    
    const {isAuthenticated, LogoutUser} = useContext(UserAuthContext)

    const [authtenticated, setAuthtenticated] = useState(isAuthenticated)

    const onSubmitLogout = async() =>{
      sw.clickConfirm()
        await LogoutUser
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
              ? <Link to="/logout" >
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
            <li>
              <Link to="/spinner">Sprinner</Link>
            </li>
            
          </ul>
        </div>
    )
}

export default HeaderComponent;