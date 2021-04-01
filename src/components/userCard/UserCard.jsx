import React, {useContext, useEffect, useState} from "react"
import UserAuthContext from "../../context/userAuth/userAuthContext"

import "./UserCard.css"

const ProfileCard = () =>{


    const {user, isAuthenticated} = useContext(UserAuthContext)
    const [authenticated, setAuthenticated] = useState(isAuthenticated)


    const checkAuth = () =>{
        if((localStorage.getItem("logued") != null) && (localStorage.getItem("logued") == "true")){
            setAuthenticated(true)
        }else(
            setAuthenticated(false)
        )
        
    }


    useEffect(() =>{
        checkAuth()
        console.log(authenticated)
    }, [])

    return (

        
        <div className="profile-card">
            {
              !authenticated
              ? <h1>
                TIENE QUE ESTAR LOGUEADO
                </h1>
                : <div>
                    <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/avatar-scaled.jpeg?fit=1200%2C675&ssl=1" alt=""/>
        <h3>user: {localStorage.getItem("user")}</h3>
            </div>
            }
            
        </div>
    )
}

export default ProfileCard;