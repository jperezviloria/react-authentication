import React, {useEffect, useContext, useState} from "react"
import "./userBoardPanel.css"

import ParticularLevel from "./particularStudentLevel.jsx";


const UserBoardPanel = () =>{

    const [levelOne, setlevelOne] = useState([])
    const [levelTwo, setlevelTwo] = useState([])
    const [levelThree, setlevelThree] = useState([])





    return(
        <div>
            <ParticularLevel/>
            <ParticularLevel/>
            <ParticularLevel/>
        </div>
    )
}


export default UserBoardPanel;