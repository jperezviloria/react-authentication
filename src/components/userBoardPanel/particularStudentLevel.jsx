import React, {useEffect, useContext, useState} from "react"
import "./particularStudentLevel.css"
import axios from "axios"
import ParticularStudent from "../studentCard/studentCard.jsx"


const ParticularStudentLevel = (props) =>{

    const [particularStudents, setParticularStudents] = useState([]);
    const [query, setQuery] = useState(false)

    const getStudentByLevel = async() =>{
        const level = props.level
        console.log(level)
        axios.get(`http://localhost:3001/publicuser/level/${level}`).then((response)=>{
            setParticularStudents(response.data.data)
            console.log(response.data.data)
            setQuery(true)
            console.log(particularStudents)
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() =>{
        
        getStudentByLevel()
        
    }, []);
    
    return(
        query ? <div className="particularStudentLevel">
        <h1>level {props.level}</h1>
        {
        particularStudents.map((particularStudent) =>(
                <ParticularStudent
                emailUser={particularStudent.emailUser}/>
        )
                //profileImage= "imagen"
                //nameStudent="nombre"
                
            )
        }
        {/* <ParticularStudent
        //profileImage="image"
        nameStudet="name"/> */}

    </div>: null 
    )
}


export default ParticularStudentLevel;