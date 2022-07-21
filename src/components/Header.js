import { Close, FiberManualRecordOutlined, MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/Header.scss'

const Header = () => {

    const [active,setActive] = useState(false);


    const showMenu = () => {
            setActive(!active)
    }

    return (
        <div className='header'>

                    {/* <div className="header__logo">
                        <h1>Portfolio</h1>
                    </div> */}

            <nav className={active ? 'navbar active' : 'navbar'}>

                <ul>
                    <div className="closed">
                        <Close className='close' onClick={showMenu}/>
                    </div>
                    <li>
                        <Link to='/main'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/section'>Skills</Link>
                    </li>
                  
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

                    <div className="changer">
                        <MenuOutlined className='menu' onClick={showMenu}/>
                    </div>
                    </div>
    )
}

export default Header
