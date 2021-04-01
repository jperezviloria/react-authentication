import React, {useContext} from "react"
import UserAuthContext from "../../context/userAuth/userAuthContext"

import "./UserCard.css"

const ProfileCard = () =>{

    const {user, isAuthenticated} = useContext(UserAuthContext)

    return (

        
        <div className="profile-card">
            {
              !isAuthenticated
              ? <h1>
                TIENE QUE ESTAR LOGUEADO
                </h1>
                : <div>
                    <img src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/03/avatar-scaled.jpeg?fit=1200%2C675&ssl=1" alt=""/>
        <h3>user: {user}</h3>
            </div>
            }
            
        </div>
    )
}

export default ProfileCard;