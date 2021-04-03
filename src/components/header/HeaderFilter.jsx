import React,{ useContext, useEffect } from "react";
import StudentHeader from "./PrivateStudentHeader"
import PublicHeader from "./PublicHeader"

import UserAuthContext from "../../context/userAuth/userAuthContext"

const HeaderFilter = () => {

    const {isAuthenticated} = useContext(UserAuthContext)


    const filterHeader = () =>{
        switch(isAuthenticated){
            case true: 
                return <StudentHeader/>
    
            case false:
                return <PublicHeader/>
                
        }
    }


    useEffect(()=>{
        filterHeader()
    }, [])

    return ( 
        <div>
            {
                filterHeader()
            }
            
        </div>
    )


}

export default HeaderFilter;