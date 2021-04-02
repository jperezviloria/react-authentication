import React, {Component, useContext} from "react"
import {Route, Redirect} from "react-router-dom"
import UserAuthContext from "../context/userAuth/userAuthContext"



const PublicRoutes = ({ component: Component, ...opt}) =>{
    const {} = useContext(UserAuthContext)

    return (<Route 
    {...opt}
    render={(props) =>{
        if(!emailUser){
            return <Component{...props}/>;
        }else{
            return (
                <Redirect
                to={{pathname:"/private", state:{from : props.location}}}/>
            )
        }
    }}/>
    );
}

export default PublicRoutes;