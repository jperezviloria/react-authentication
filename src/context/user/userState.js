import { useState, useContext } from 'react';
import UserReducer from "./userReducer"
import axios from 'axios';
import UserContext from './userContext';

const userState = (props) =>{

    const initialState = {
        emailUser: "",
        passwordUser: "",
        tokenUser:"",
    }


    const [state, dispatch] = useReducer(UserReducer, initialState)


    const login = async() =>{

    }


    return (
        <UserContext.Provider value = {{
            emailUser: state.emailUser,
            passwordUser: state.passwordUser,
            tokenUser: state.tokenUser,
            login,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default userState;