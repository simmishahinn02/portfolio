import { GitHub, LinkedIn, MenuBook, SettingsPowerRounded, Twitter, } from '@material-ui/icons'
import React, { useState } from 'react'
import './styles/Main.scss'
import me from './assets/simmi.jpg'
import download from './assets/pdf/B190036CS-Simmi-Shahin.pdf'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'
// import {download} from 'assets/pdf/B190036CS-Simmi-Shahin.pdf';

const Main = () => {
    return (
        <div className='main'>

            <div className='main__container'>

                <div className="main__content">

                    <div className="text">
                        <p>Hey There !</p>
                        <h1>I am Simmi Shahin</h1>
                        <p>Learner</p>
                        <div className="icons">
                            <a href='https://www.linkedin.com/in/simmi-shahin'><LinkedIn className='icon' /></a>

                            <a href='https://www.linkedin.com/in/simmi-shahin'><GitHub className='icon' /></a>
                        </div>
                        <div className="buttons">.
                            {/* <Link to= {resume} download>Download</Link> */}
                            {/* import resume from './Resume.pdf'; */}

                            {/* <Link to={resume} download>Download</Link> */}
                            <button><a download="" href="assets/pdf/B190036CS-Simmi-Shahin.pdf" >Download CV</a></button>
                            {/* <button>See My Work</button> */}
                            {/* <button><a href='https://www.linkedin.com/in/simmi-shahin'></a>Works</button> */}
                        </div>
                    </div>
                </div>
                <div className="main__img">
                    <img src={me} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Main
