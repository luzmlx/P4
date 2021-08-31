import React from 'react';
import { useState } from 'react';

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
        <form onSubmit={(e) => {
            e.preventDefault()
            handleLogin(formData)
        }}>
            <h3>Login</h3>
            <label>
            
                <input name='email' 
                placeholder='Email'
                 type="text" 
                 value={email}
                 onChange={handleChange}/>
            </label>
            <label>
                
                <input name='password'
                placeholder='Password'
                type="password"
                value={password} 
                onChange={handleChange}/>
            </label>
            <button>Sign In</button>
        </form>
    )
}