import Button from '../misc/Button' 
import Logo from '../misc/Logo'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs'

const NavBar = () => {

    const [isOpaque, setIsOpaque] = useState(true)

    const style = {
        navBar: {
            padding: '18px 16px',
            position: 'fixed',
            backgroundColor: 'white',
            width: '100%',
            opacity: isOpaque ? 0.7 : 1,
            transition: 'opacity 0.7s',
            zIndex: 10,
            textAlign: 'left'
        },
        spacer: {
            height:'160px'
        }
    }

    return (
        <>
            <nav style={style.navBar} onMouseOver={() => setIsOpaque(false)} onMouseLeave={() => setIsOpaque(true)}>
                <div className='row align-items-center'>
                    <div className='col-sm-2'>
                        <Link to='/'><Logo /></Link>
                    </div>
                    <div className='col offset-sm-1'>
                        <Link to='/about'>ABOUT</Link>
                    </div>
                    <div className='col-sm'>
                        <Link to='/coming-soon'>CONTACT</Link>
                    </div>
                    <div className='col-sm'>
                        <Link to='/coming-soon'>INSIGHTS</Link>
                    </div>
                    <div className='col-sm'>
                        <Link to='/coming-soon'>ANALYSIS</Link>
                    </div>
                    <div className='col-sm'>
                        <Link to='/coming-soon'>DASHBOARD</Link>
                    </div>
                    <div className='col-sm-2 offset-sm-1'>
                        <Button 
                            text='TRENDING STOCKS'
                            backgroundColor='#78b7d8'
                            textColor='white'
                        />
                    </div>
                    <div className='col-sm'>
                        <Link to='/register '>< BsPersonCircle/></Link>
                    </div>
                </div>
            </nav>
            <div style={style.spacer}></div>
        </>
    )
}

export default NavBar