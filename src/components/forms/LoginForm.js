import Button from '../misc/Button'
import axios from 'axios'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigateTo = useNavigate();
    
    const displayMessage = (message) => {
        alert(message)
    }

    const login = () => {

        if (!password || !email){
            displayMessage('Required fields are empty')
            return
        }

        axios.post('http://localhost:5000/api/login', {
            "email": email,
            "password": password
        })
        .then(response => {
            if (response.data.success){
                navigateTo('/dashboard')
            }else{
                displayMessage(response.data.message)
            }
        })
        .catch(err => console.log(err))

    }

    return (
        <form id='loginForm'>
            <input type='email' placeholder='Email' name='email' onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' name='password' onChange={(e) => setPassword(e.target.value)} />
            <br/>
            <br/>
            <Button 
                text='Login'
                textColor='white'
                backgroundColor='black'
                width='40%'
                onClick={(e) => login(e)}
            />
        </form>
    )
}

export default LoginForm