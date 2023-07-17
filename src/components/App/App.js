import React from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import 'bootstrap/dist/css/bootstrap.min.css'
import useToken from './useToken'
import Datepicker from '../Datepicker/Datepicker'

export default function App(){
    const {token, setToken} = useToken()
    const [page, setPage] = React.useState('login')
    const [username, setUsername] = React.useState('')
    const [otp, setOTP] = React.useState('')

    function NavigateComponents() {
        if (page === 'login') return <Login />;
        if (page === 'otp') return <OTPInput />;
        if (page === 'forgotpassword') return <ForgotPassword />;

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
                <Route path="/forgotpassword" element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
        )
    }
}
