import React from "react"
import "./studentCard.css"
import axios from "axios"
import {useForm} from "react-hook-form"


const StudentCard = (props) =>{

    


    return (
        <div className="studentCard">
            <img src= "https://cde.laprensa.e3.pe/ima/0/0/1/8/3/183593.jpg"alt=""/>
            <p>{props.emailUser}</p>
            <a href="">see more</a>
            
        </div>
    )
}

export default StudentCard;