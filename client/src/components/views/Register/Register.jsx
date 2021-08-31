import React from 'react';
import { useState } from 'react';
import './register.css'


export default function Register(props) {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''

    })

    const {handleRegister} = props

    const handleChange = (e) => {
        // debugger
        const {name, value} = e.target;
        setFormData((prevState) => ({
            ...prevState,
        [name]: value
        }))
    }
    return (
        <div className='register-div'>
        <form 
            className='register-form'
        onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
        }}>
            <h3>Register</h3>
            <label className='firstname-label'>
            
                <input 
                className='firstname-input'
                name = 'first_name'
                placeholder='First Name'
                 type="text" 
                 value={formData.first_name}
                 onChange={handleChange}/>
            </label>

            <label className='lastname-label'>
            
                <input 
                className='lastname-input'
                name='last_name' 
                placeholder='Last Name'
                 type="text" 
                 value={formData.last_name}
                 onChange={handleChange}/>
            </label>

            <label className='email-label'>
            
                <input 
                className='email-input'
                name='email' 
                placeholder='Email'
                 type="text" 
                 value={formData.email}
                 onChange={handleChange}/>
            </label>
            <label className='password-label'>
                
                <input
                className='password-input'
                name='password'
                placeholder='Password'
                type="password"
                value={formData.password} 
                onChange={handleChange}/>
            </label>
            <button className='signin-button'>Sign In</button>
        </form>
        </div>
    )
}