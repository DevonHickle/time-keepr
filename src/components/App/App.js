import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import 'bootstrap/dist/css/bootstrap.min.css'
import useToken from './useToken'
import Datepicker from '../Datepicker/Datepicker'

function App(){
    const {token, setToken} = useToken()

    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/preferences" element={<Preferences />} />
                <Route path="/datepicker" element={<Datepicker />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App