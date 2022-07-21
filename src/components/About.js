import React from 'react'
// import { Link } from 'react-router-dom'
import './styles/About.scss'
import { ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='about'>
             <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>


            <div className="about__container">


                {/* <div className="section__img">
                    <img src={man2} alt="" />
                </div> */}


                <div className="about__content">
                    <h1>About me</h1>
                    <p>An undergraduate learner in Computer Science Engineering who is self motivated and demonstrates strong ethic, have creative ability and seeks internship positions in an organization which will allow me to enhance my skills, while making a significant contibution to the  success of company.  </p>
                    
                </div>



            </div>


        </div>
    )
}



export default About
