import React from 'react'
import './styles/Section.scss'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
// import me from './assets/me.png'

const Section = () => {
    return (
        <div className='section'>
             <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>


            <div className="section__container">


                {/* <div className="section__img">
                    <img src={me} alt="" />
                </div> */}

                <div className="section__content">
                    <h1>Skills</h1>    
                </div>

                <div className="section__content">
                    <p>C Language</p>
                    <p>Python Language</p>
                    <p>DATA STRUCTURES</p>
                    <p>OPERATING SYSTEM</p>
                    <p>LINUX</p>
                    <p>DOCKER</p>
                </div>
                <div className="section__content">
                    <p>HTML, CSS</p>
                    <p>javascript</p>
                    <p>REACTJS</p>
                    <p>NODE.JS</p>
                    <p>php</p>
                    <p>DBMS: MYSQL</p>
                </div>



            </div>


        </div>
    )
}

export default Section
