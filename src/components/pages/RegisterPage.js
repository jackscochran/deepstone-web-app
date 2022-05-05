import { useState } from "react"

import Banner from "../misc/Banner"
import LoginForm from '../forms/LoginForm'
import RegisterForm from '../forms/RegisterForm'

const RegisterPage = () => {

    const [existingUser, setExistingUser] = useState(false)
    
    const style = {
        page: {
            display: 'flex',
            justifyContent: 'center',
            padding: '50px',
        },
        card: {
            display: 'flex',
            justifyContent: 'center',
            width: '50%',
            backgroundColor: 'white',
            textAlign: 'center',
            boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)',
            padding: '0 40px 40px 40px'
        },
        login: {
            display: !existingUser ? 'none' : 'block'
        },
        register: {
            display: existingUser ? 'none' : 'block'
        },
    }

    return (
        <div style={style.page}>
            <div style={style.card}>

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