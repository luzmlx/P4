import React from 'react';
import { useState } from 'react';
import './login.css'

export default function Login(props) {

    const [formData, setFormData] = useState({
        email: '',
        password: ''

    })
  
    const {email, password} = formData

    const {handleLogin} = props

    const handleChange = (e) => {
        // debugger
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
        [name]: value
        }))
    }
    return (
        <div className='login-div'>
        <form 
        className='login-form'
        onSubmit={(e) => {
            e.preventDefault()
            handleLogin(formData)
        }}>
            <h3 className='logintext'>Login</h3>
            <label className='email-label'>
            
                <input 
                className='email-input'
                name='email' 
                placeholder='Email'
                 type="text" 
                 value={email}
                 onChange={handleChange}/>
            </label>
            <label className='password-label'>
                
                <input 
                className='password-input'
                name='password'
                placeholder='Password'
                type="password"
                value={password} 
                onChange={handleChange}/>
            </label>
            <button className='signin-button'>Sign In</button>
        </form>
        </div>
    )
}