import React from "react"
import {useForm} from "react-hook-form"

import "./Login.css"

const Login = () =>{

    const {register, handleSubmit} = useForm();

    const onSubmitLogin = (data) =>{
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmitLogin)} className="login">
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