import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Login.css'
import LogoImg from '../../images/svg/LogoImg'

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

    let [authMode, setAuthMode] = useState('signin')

    const changeAuthMode = () => {
        setAuthMode(authMode === 'signin' ? 'signup' : 'signin')
    }

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
                                Forgot <a href="#">password?</a>
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