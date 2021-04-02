import React, { useEffect, useContext, useState} from "react"
import {useForm} from "react-hook-form"
import axios from "axios"
import UserAuthContext from "../../context/userAuth/userAuthContext"
import Swal from "sweetalert2"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
  


import "./Login.css"

const Logout = () =>{

    const {LogoutUser, user, isAuthenticated} = useContext(UserAuthContext)

    const {register, handleSubmit} = useForm();

    const onSubmitLogout = async() =>{
        
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              LogoutUser()
              
            }
            
          })

    }

    const getAllUser = async() =>{
        const response = await axios.get(`http://localhost:3001/publicuser`)
        console.log(response)
    }

    useEffect(() => {
        getAllUser()
        console.log(isAuthenticated)
        
    })

    return(
        <form onSubmit={handleSubmit(onSubmitLogout)} className="login">
            {
                isAuthenticated?
                <button type="submit" >logout</button>
                : <Redirect to={ {pathname:"/login"}}/>

            }
        </form>
    )

}

export default Logout;