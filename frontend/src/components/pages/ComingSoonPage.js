import Button from "../misc/Button"

import { useNavigate } from "react-router-dom";

const CommingSoonPage = () => {
    
    const navigateTo = useNavigate()

    return (
        <div className='text-center'>
            <h3>Coming Soon...</h3>
            <p>Sign up to be notified about feature relesases.</p>
            <br/>
            <Button 
                text='Register Today'
                textColor='white'
                backgroundColor='black'
                onClick={() => {navigateTo('/register')}}
            />
        </div>
    )
}

export default CommingSoonPage