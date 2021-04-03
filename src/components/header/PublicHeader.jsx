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
              <Link to="/public">Index</Link>
            </li>
            <li>
            {
              isAuthenticated
              ? <Link to="/logout" >
                Logout
                </Link>
                : <Link to="/login">
                  Login
                  </Link>
            }
            </li>
            <li>
              <Link to="/private">Private Page</Link>
            </li>
            <li>
              <Link to="/prices">Prices</Link>
            </li>
          </ul>
        </div>
    )
}

export default HeaderComponent;