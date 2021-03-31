import React,{ useState, useContext , useReducer} from 'react';
import UserReducer from "./userReducer"
import axios from 'axios';
import UserContext from './userContext';


const UserState = (props) =>{

    const initialState = {
        user: null,
        tokenUser:null,
        isAuthenticated: false
    }


    const [state, dispatch] = useReducer(UserReducer, initialState)


    const login = async(email, password) =>{

        var user = {
            emailUser: email,
            passwordPassword: password
        }
        const response = await axios.post(`http://localhost:3001/auth/signin`, user)
        console.log(response)
    }


    return (
        <UserContext.Provider value = {{
            state,
            dispatch,
            user: state.user,
            tokenUser: state.tokenUser,
            login,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;