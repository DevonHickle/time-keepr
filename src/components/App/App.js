import React, { createContext } from 'react'
import { Switch, Redirect, Route, PrivateRoute } from 'react-router-dom'
import './App.css'
import Login from '../../pages/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import useToken from './useToken'
import OTPInput from '../../pages/Login/OTPInput'
import ForgotPassword from '../../pages/Login/ForgotPassword'
import SelectDate from '../../pages/Calendar/Calendar'
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
      <Switch>
        <Redirect from="/" to="/login" />
        <Route exact path="/login" component={Login} />
        <PrivateRoute path="/calendar" component={SelectDate} />
        <PrivateRoute path="/forgotpassword" component={ForgotPassword} />
    </Switch>
      );
}
