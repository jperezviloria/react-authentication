import {LOGIN, LOGOUT} from "../types"

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case LOGIN:
            localStorage.setItem("user", payload.user.emailUser);
            localStorage.setItem("token", payload.token);
            localStorage.setItem("logued", true);
            return{
                ...state,
                user: payload.user.emailUser,
                token: payload.token,
                isAuthenticated: true,
            }
        case LOGOUT:
            // why always clear localstorage?
            localStorage.clear()
            return{
                ...state,
                user: null,
                token: null,
                isAuthenticated: false,
            }
        default:
            return state;
    }
}