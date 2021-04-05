import React from "react"
import HttpClient from "../../services/axios"
import { useForm } from "react-hook-form";
import AdminSearch from "../../components/adminControlUser/adminSearch"
import AdminGenerate from "../../components/adminControlUser/adminGenerate"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


const AdminControlUsers = () =>{

    const {register, handleSubmit} = useForm();

    const chooseFuncionalities = async(name) =>{
        console.log(name)
    }


    return (
        <div>
            <Router>
                <div>
                    <Link to="/admincontroluser/search">search</Link>
                    <Link to="/admincontroluser/generate">generate</Link>
                    <Link to="/admincontroluser/inavailable">inavailable</Link>
                </div>
                <Switch>
                    <Route path="/admincontroluser/search">
                        <AdminSearch/>
                    </Route>
                    <Route path="/admincontroluser/generate">
                        <AdminGenerate/>
                    </Route>
                    <Route path="/admincontroluser/inavailable">
                        <h1>inavailable</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default AdminControlUsers;