import { GET_TOKEN, GET_USER } from "../types";


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
        default:
            return state;
    }
}
