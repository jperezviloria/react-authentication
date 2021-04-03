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

const Login = () =>{

    const {LoginUser, user, isAuthenticated, rol} = useContext(UserAuthContext)

    const {register, handleSubmit} = useForm();




    const onSubmitLogin = async(data) =>{
        
        if(!data.emailUser){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email is require',
                footer: '<a href>Why do I have this issue?</a>'
              })
                
              }
         else if (!data.passwordUser){

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password is require',
                footer: '<a href>Why do I have this issue?</a>'
              })
        }else if(data.emailUser && data.passwordUser){
            LoginUser(data)
        }
        
        
    
       

    }

    const decidedRedict = () =>{
        switch(rol){
            case "admin":
                return "studentboard"
            case "student":
                return "private"
        }
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
    
        <div>{
            !isAuthenticated ?
            <form onSubmit={handleSubmit(onSubmitLogin) } className="login">
            <div className="login-input">
            <input 
            type="text" 
            placeholder="email"
            name="emailUser"
            
            ref={register()}/>
            <input 
            type="password" 
            placeholder="password"
            name="passwordUser"
            
            ref={register()}/>
            </div>
            <button type="submit" >Login</button>
            </form>
            :<Redirect to={ {pathname:`/${decidedRedict()}`}}/>
        }
        </div>
    )

}

export default Login;