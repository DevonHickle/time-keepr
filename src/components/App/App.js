import React, { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
    const [token, setToken] = useState()

    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
            <Routes>
                <Route path="/preferences" element={<Preferences />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App