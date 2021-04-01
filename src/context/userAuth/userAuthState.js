import React, {useReducer} from "react"
import UserAuthContext from "./userAuthContext"
import UserAuthReducer from "./userAuthReducer"
import axios from "axios"


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
        dispatch({
            type: 'LOGIN',
            payload: response.data
        })
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