import {GET_TOKEN} from "../types"

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_TOKEN:
            return{
                ...state,
                user: payload.user.emailUser,
                token: payload.token
            }
        default:
            return state;
    }
}