import React, { useEffect, useContext, useState} from "react"
import {useForm} from "react-hook-form"
import axios from "axios"
import UserAuthContext from "../../context/userAuth/userAuthContext"


import "./Login.css"

const Login = () =>{

    const {LoginUser, user, isAuthenticated} = useContext(UserAuthContext)

    const {register, handleSubmit} = useForm();

    const onSubmitLogin = async(data) =>{
        console.log(data)

        const response = await axios.post(`http://localhost:3001/auth/signin`, data)
        console.log(response.data)
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
        <form onSubmit={handleSubmit(LoginUser)} className="login">
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
            <button type="submit">Login</button>
        </form>
    )

}

export default Login;