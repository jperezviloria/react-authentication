import React, {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import axios from "axios"


const AdminGenerate = () =>{
    
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState(false)
    const {register, handleSubmit} = useForm();

    const onSubmitGenerated = async(data) =>{

        const studentGenerated = {
            emailUser: data.email,
            passwordUser: data.password,
            levelUser: data.level,
            rolUser: data.rol,

        }
        const request = await axios.post(`http://localhost:3001/auth/signup`, studentGenerated)
        .then((response) =>{
            console.log(response.data)
            setQuery(true)
        }).catch((error) =>{
            console.log(error)
        })

        console.log(users)
        console.log(query)
    }

    useEffect(() =>{

    }, [users])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitGenerated)}>
                <input type="text" name="email" placeholder="email" ref={register()}/>
                <input type="text" name="password" placeholder="password" ref={register()}/>
                <select 
                name="level" 
                ref={register()}>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </select>
                <select 
                name="rol"
                ref={register()} >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
                <button type="submit">Generate</button>
            </form>
            
        </div>
    )
}

export default AdminGenerate;