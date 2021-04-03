import React, {useEffect, useContext, useState} from "react"
import "./userBoardPanel.css"

import ParticularLevel from "./particularStudentLevel.jsx";


const UserBoardPanel = () =>{


    return(
        <div className="userBoardPanel">
            <ParticularLevel
            level="1"/>
            <ParticularLevel
            level="2"/>
            <ParticularLevel
            level="3"/>
        </div>
    )
}


export default UserBoardPanel;