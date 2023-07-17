import React, { createContext } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from '../Login/Login'
import Dashboard from '../Dashboard/Dashboard'
import Preferences from '../Preferences/Preferences'
import 'bootstrap/dist/css/bootstrap.min.css'
import useToken from './useToken'
import Datepicker from '../Datepicker/Datepicker'
import OTPInput from '../Login/OTPInput'
import ForgotPassword from '../Login/ForgotPassword'
export const RecoveryContext = createContext();

export default function App(){
    const {token, setToken} = useToken()
    const [page, setPage] = React.useState('login')
    const [username, setUsername] = React.useState('')
    const [otp, setOTP] = React.useState('')

    function NavigateComponents() {
        if (page === 'login') return <Login />;
        if (page === 'otp') return <OTPInput />;
        if (page === 'forgotpassword') return <ForgotPassword />;
    }

    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
        <div className="App-header"> 
          <RecoveryContext.Provider
            value={{ page, setPage, otp, setOTP, username, setUsername }}>
            <div>
              <NavigateComponents />
            </div>
          </RecoveryContext.Provider>
        </div>
      );
}
