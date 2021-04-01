import React, {useReducer} from "react"
import UserAuthContext from "./userAuthContext"
import UserAuthReducer from "./userAuthReducer"
import axios from "axios"
import Swal from "sweetalert2"

const UserAuthState = (props) =>{


    const initialState = {
        user: null,
        token: null,
        isAuthenticated: false,
    }

    const [state, dispatch] = useReducer(UserAuthReducer, initialState)

    const LoginUser = async(userAuth) =>{

        const response = await axios.post(`http://localhost:3001/auth/signin`, userAuth)
        console.log(response.data)
        if(response.data.status === 400){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.data.message,
                footer: '<a href>Why do I have this issue?</a>'
              })
        }
        else if (response.data.status === 200){
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            Swal.fire({
                icon: 'success',
                title: 'successful login',
                text: response.data.message,
                
              })
        }
    }

    const LogoutUser = () =>{
        dispatch({
            type: 'LOGOUT',
            payload: initialState
        })
    }

    return (
        <UserAuthContext.Provider value = {{
            user: state.user,
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            LoginUser,
            LogoutUser,
        }}>
            {props.children}
        </UserAuthContext.Provider>
    )

}

export default UserAuthState;