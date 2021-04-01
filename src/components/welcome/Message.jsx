import React, {useContext, useEffect} from "react"
import UserAuthContext from "../../context/userAuth/userAuthContext"

const WelcomePage = () =>{


    const {LoginUser, user, isAuthenticated} = useContext(UserAuthContext)


    useEffect(() =>{
        console.log(isAuthenticated)
      })


    return (
        <div>
            <h1>Welcome to my Web</h1>
        </div>
    )
}

export default WelcomePage;