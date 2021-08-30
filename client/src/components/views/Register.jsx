import React from 'react';
import { useState } from 'react';

export default function Register(props) {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''

    })

    const {handleRegister} = props

    const handleChange = (e) => {
        // debugger
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
        [name]: value
        }))
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            handleRegister(formData)
        }}>
            <h3>Register</h3>
            <label>
            
                <input name='first' 
                placeholder='First Name'
                 type="text" 
                 value={formData.firstName}
                 onChange={handleChange}/>
            </label>

            <label>
            
                <input name='last' 
                placeholder='Last Name'
                 type="text" 
                 value={formData.lastName}
                 onChange={handleChange}/>
            </label>

            <label>
            
                <input name='email' 
                placeholder='Email'
                 type="text" 
                 value={formData.email}
                 onChange={handleChange}/>
            </label>
            <label>
                
                <input name='password'
                placeholder='Password'
                type="password"
                value={formData.password} 
                onChange={handleChange}/>
            </label>
            <button>Sign In</button>
        </form>
    )
}