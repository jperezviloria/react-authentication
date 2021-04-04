import React, {useState, useEffect} from "react"
import {useForm} from "react-hook-form"
import axios from "axios"


const AdminSearch = () =>{
    
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState(false)
    const {register, handleSubmit} = useForm();

    const onSubmitFilter = async(data) =>{
        const request = await axios.get(`http://localhost:3001/publicuser`)
        .then((response) =>{
            console.log(response.data.data)
            setUsers(response.data.data)
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
            <form onSubmit={handleSubmit(onSubmitFilter)}>
                <input type="text" name="email" placeholder="email" ref={register()}/>
                <select 
                name="level" 
                ref={register()}>
                    <option value="">All Levels</option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                </select>
                <select 
                name="rol"
                ref={register()} >
                    <option value="">All Roles</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                </select>
                <button type="submit">search</button>
            </form>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <div>

                            <th>email</th>
                            <th>level</th>
                            <th>rol</th>
                            <th>options</th>
                            </div>
                        </tr>
                        {
                            query ? <tr>
                            {
                               users.map((particularUser) =>(
                                <div>
                                    <th>{particularUser.emailUser}</th>
                                    <th>{particularUser.level}</th>
                                    <th>{particularUser.rol}</th>
                                    <th>O O O</th>
                                </div>
                               )
                                
                            ) 
                            }
                            </tr>
                            : console.log("AAAAAAAAAAA")
                        }
                    </tbody>
                </table>
                
            </div>
        </div>
    )
}

export default AdminSearch;