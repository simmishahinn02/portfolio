import React from 'react'
import ab from './assets/ab.jpg'
import clock from './assets/clock.jpg'
import todo from './assets/todo.jpg'
import exam from './assets/exam.png'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import './styles/Works.scss'

const Works = () => {
    return (
        <div className='works'>
             <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>
            <div className="work__section">

                <div className="cards">
                    <img src={exam} alt="" />
                    <button><a href='https://github.com/simmishahinn02/Online-Exam-System'>Online Examination System</a></button>
                </div>

                <div className="cards">
                    <img src={ab} alt="" />
                    <button><a href='https://github.com/simmishahinn02/Weather-App'>Weather App</a></button>
                    {/* <button>See Work</button> */}
                </div>

                <div className="cards">
                   <img src={clock} alt="" />
                   <button><a href='https://github.com/simmishahinn02/Alarm-Clock'>Alarm Clock</a></button>
                </div>

                <div className="cards">
                   <img src={todo} alt="" />
                   <button><a href='https://github.com/simmishahinn02/Todos-List'>Todos-List</a></button>
                </div>

            

            </div>
        </div>
    )
}

export default Works
