import React,{ useContext, useEffect } from "react";
import StudentHeader from "./PrivateStudentHeader"
import AdminHeader from "./PrivateAdminHeader"
import PublicHeader from "./PublicHeader"

import UserAuthContext from "../../context/userAuth/userAuthContext"

const HeaderFilter = () => {

    const {isAuthenticated, rol} = useContext(UserAuthContext)


    const filterHeader = () =>{
    
        if(isAuthenticated){
            switch(rol){
                case "student": 
                    return <StudentHeader/>
        
                case "admin":
                    return <AdminHeader/>
                    
            }    
        }

        switch(isAuthenticated){
            case true: 
                return <StudentHeader/>
    
            case false:
                return <PublicHeader/>
                
        }
    }


    useEffect(()=>{
        
        console.log(rol)
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