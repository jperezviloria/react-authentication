import React, {useReducer} from "react"
import UserAuthContext from "./userAuthContext"
import UserAuthReducer from "./userAuthReducer"
import axios from "axios"


const UserAuthState = (props) =>{


    const initialState = {
        user: null,
        token: null,
    }

    const [state, dispatch] = useReducer(UserAuthReducer, initialState)

    const LoginUser = async(userAuth) =>{

        const response = await axios.post(`http://localhost:3001/auth/signin`, userAuth)
        console.log(response.data)
        dispatch({
            type: 'GET_TOKEN',
            payload: response.data
        })
    }

    return (
        <UserAuthContext.Provider value = {{
            user: state.user,
            token: state.token,
            LoginUser,
        }}>
            {props.children}
        </UserAuthContext.Provider>
    )

}

export default UserAuthState;