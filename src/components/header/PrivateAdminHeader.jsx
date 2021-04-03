import React, { useEffect, useContext, useState} from "react"
import sw from "sweetalert2"
import UserAuthContext from "../../context/userAuth/userAuthContext"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"

const PrivateAdminHeaderComponent = () =>{

    
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
              <Link to="/studentboard">Student board</Link>
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
              <Link to="/usersadmin">Users admin</Link>
            </li>         
          </ul>
        </div>
    )
}

export default PrivateAdminHeaderComponent;