import { GET_TOKEN, GET_USER , LOGIN, LOGOUT} from "../types";


export default (state, action) =>{
    const {payload, type} = action

    switch(type){
        case GET_TOKEN:
            return {
                ...state,
                token: payload
            }
        case GET_USER:
            return {
                ...state,
                emailUSer: payload
            }
        case LOGIN:
            localStorage.setItem("user", JSON.stringify(action, payload.user));
            localStorage.setItem("token", JSON.stringify(action, payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token
            };
        case LOGOUT:
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                
            };
        default:
            return state;
    }
}
