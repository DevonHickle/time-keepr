import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Login.css'

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

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const handleSubmit = async e=> {
        e.preventDefault()
        const token = await loginUser({
            username, password
        })
        setToken(token)
    }

    return (
        <div className='Auth-form-container'>
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className='Auth-form-content'>
                    <h3 classname="Auth-form-title">
                    Please Login
                    </h3>
                        <label>
                        <p>Username</p>
                        <input 
                        type='text' 
                        className="form-control mt-1"
                        onChange={e => setUserName(e.target.value)} 
                        />
                        </label>
                        <label>
                            <p>Password</p>
                            <input 
                                type='text' 
                                className="form-control mt-1"
                                onChange={e => setPassword(e.target.value)} 
                            />
                        </label>
                        <div className='d-grid gap-2 mt-3'>
                            <button type='submit' className='btn btn-primary'>Submit</button>
                        </div>
                        <p className="forgot-password text-right">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}