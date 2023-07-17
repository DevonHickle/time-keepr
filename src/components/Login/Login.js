import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import './Login.css'
import LogoImg from '../../images/svg/LogoImg'
import axios from 'axios'
import { RecoveryContext } from '../App/App'
import "../global.component.css"

async function loginUser(creds) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    }) .then(data => data.json())
}

export default function Login({ setToken }) {
    
function sendOtp() {
    if(username) {
        axios.get(`http://localhost:3000/checkUser?username=${username}`).then((response) => {
            if(response.status === 200) {
                const OTP = Math.floor(Math.random() * 9000 + 1000)
                console.log(OTP)
                setOTP(OTP)
                setUsername(username)

                axios.post('http://localhost:3000/send_email', {
                    OTP,
                    recipient_username: username,
            }).then(() => setPage('otp')).catch(console.log)
        } else {
            alert('User does not exit with this username')
            console.log(response.data.message)
        }}).catch(console.log)
    } else {
        alert('Please enter username')
    }}

    let [authMode, setAuthMode] = useState('signin')

    const changeAuthMode = () => {
        setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
    }

    const { setPage, setOTP, setUsername } = useContext(RecoveryContext)
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const handleSubmit = async e=> {
        e.preventDefault()
        const token = await loginUser({
            username, password
        })
        setToken(token)
    }

    if (authMode === 'signin') {
        return (
            <div className='Auth-form-body'>
                <div className='Auth-form-container'>
                    <form className="Auth-form" onSubmit={handleSubmit}>
                        <div className='Auth-form-content'>
                            <LogoImg className='App-logo' />
                            <h3 className='text-center'>Time Keepr</h3>
                            <div className='text-center'>Not registered?{" "}
                                <span className='link-primary' onClick={changeAuthMode}>
                                    Sign Up
                                </span>
                            </div>
                                <label>Email Address</label>
                                <input 
                                type='text' 
                                placeholder='Enter Email'
                                className="form-control mt-1"
                                onChange={e => setUserName(e.target.value)} 
                                />
                                <label>Password</label>
                                    <input 
                                        type='password' 
                                        placeholder='Enter Password'
                                        className="form-control mt-1"
                                        onChange={e => setPassword(e.target.value)} 
                                    />
                                <div className='d-grid gap-2 mt-3'>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </div>
                                <p className="forgot-password text-right">
                                Forgot <a href="#" onClick={() => sendOtp()}>password?</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
    return (
        <div className='Auth-form-body'>
                <div className='Auth-form-container'>
                    <form className="Auth-form" onSubmit={handleSubmit}>
                        <div className='Auth-form-content'>
                        <LogoImg className='App-logo' />
                        <h3 className='text-center'>Time Keepr</h3>
                        <h5 className='text-center'>Create account</h5>
                        <div className='text-center'>Already Registered?{" "}
                                <span className='link-primary' onClick={changeAuthMode}>
                                    Sign In
                                </span>
                            </div>
                                <label>Email Address</label>
                                <input 
                                type='text' 
                                placeholder='Enter email'
                                className="form-control mt-1"
                                onChange={e => setUserName(e.target.value)} 
                                />
                                <label>Password</label>
                                    <input 
                                        type='password' 
                                        placeholder='Enter password'
                                        className="form-control mt-1"
                                        onChange={e => setPassword(e.target.value)} 
                                    />
                            <div className='d-grid gap-2 mt-3'>
                                <button type='submit' className='btn btn-primary'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}