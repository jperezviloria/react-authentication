import React from "react"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"

import "./Register.css"

const Register = () =>{

    const {register, handleSubmit} = useForm({
        initialValues:{
            email:"",
            password:"",
        }
    });

    const onSubmitRegister = (data) =>{
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmitRegister)} className="register">
            <div className="register-input">
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
            <button type="submit">register</button>
        </form>
    )

}

export default Register;