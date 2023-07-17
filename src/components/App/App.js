import React, { createContext } from 'react'
import './App.css'
import Login from '../Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import useToken from './useToken'
import OTPInput from '../Login/OTPInput'
import ForgotPassword from '../Login/ForgotPassword'
import SelectDate from '../Calendar/Calendar'
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
        if (page === 'calendar') return <SelectDate />
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
