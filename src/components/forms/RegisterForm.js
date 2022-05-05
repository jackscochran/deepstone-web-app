import Button from '../misc/Button'

import { useState } from 'react'
import axios from 'axios'

// import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // const navigateTo = useNavigate()

    const register = () => {

        if (!password || !email || !confirmPassword){
            displayMessage('Required fields are empty')
            return
        }

        if (password !== confirmPassword){
            displayMessage('Passwords do not match')
            return
        }

        axios.post('http://localhost:5000/api/register', {
            "email": email,
            "password": password
        })
        .then(response => {
            if (response.data.success){
                displayMessage('Account registered successfully!')// navigateTo('/dashboard')
            }else{
                displayMessage(response.data.message)
            }
        })
        .catch(err => console.log(err))
    }

    const displayMessage = (message) => {
        alert(message)
    }

    return (
        <form id='registerForm' >
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            <input type='password' placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)}/>
            <br/>
            <br/>
            <Button 
                text='Register'
                textColor='white'
                backgroundColor='black'
                width='40%'
                onClick={(e) => register(e)}
            />
        </form>
    )
}

export default RegisterForm