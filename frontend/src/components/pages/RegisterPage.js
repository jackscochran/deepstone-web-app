import { useState } from "react"

import Banner from "../misc/Banner"
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'

const RegisterPage = () => {

    const [existingUser, setExistingUser] = useState(false)
    
    const style = {
        login: {
            display: !existingUser ? 'none' : 'block'
        },
        register: {
            display: existingUser ? 'none' : 'block'
        },
    }

    return (
        <div className='center-content narrow-container'>
            <div className='card text-center'>

                <div style={style.register}>
                    <Banner 
                        primary='Register Account'
                        secondary='Follow the steps to begin your financial journey'
                        topText='JOIN TODAY'
                    />
                    <RegisterForm />
                    <br/>
                    <br/>
                    <hr/>   
                    {/* <p>Already have an account? <span className='link' onClick={() => setExistingUser(true)}>Login.</span></p> */}
                </div>

                <div style={style.login}>
                <Banner 
                        primary='Login to Account'
                        secondary='Fill in the form below to login'
                    />
                    <LoginForm />
                    <br/>
                    <br/>
                    <hr/>   
                    <p>Need to create an account? <span className='link' onClick={() => setExistingUser(false)}>Register.</span></p>
                </div>

            </div>            
        </div>
    )

}

export default RegisterPage