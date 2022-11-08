import React, { useState, useRef, useContext } from 'react'
import '../Resume/resume.scss'
import HistoryIcon from '@mui/icons-material/History';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import AOS from "aos";
import "aos/dist/aos.css";


import 'react-circular-progressbar/dist/styles.css';
import Ncontext from '../../NContext';
export default function Resume() {
    const ref = useRef(null);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const context = useContext(Ncontext);
    const { ref4 } = context

    const scrollevent = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });


    }
    const scrollevent1 = () => {
        ref1.current?.scrollIntoView({ behavior: 'smooth' });


    }
    const scrollevent2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });


    }
    const scrollevent3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'smooth' });


    }

    AOS.init();

    return (
        <div className='Resume_container' id='resume' ref={ref4}>
            <div className='Resume_title' >
                <p style={{ fontSize: '40px' }}>RESUME</p>
                <p>My formal Bio Details</p>
                <div className='bdr'></div>
            </div>

            <div className='Resume_content' data-aos="zoom-in">
                <div className='Resume_content_left'>
                    <ul>
                        <li onClick={scrollevent}><a ><HistoryIcon /></a><a className='Resume_content_li'>Work History</a></li>
                        <li onClick={scrollevent1} ><a><SchoolIcon /></a><a className='Resume_content_li'>Education</a></li>
                        <li onClick={scrollevent2}><a ><ComputerIcon /></a><a className='Resume_content_li'>Programming Skills</a></li>
                        <li onClick={scrollevent3}><a ><AssuredWorkloadIcon /></a><a className='Resume_content_li'>Projects</a></li>
                    </ul>




                </div>
                <div className='Resume_content_right'>
                    <div className='work' ref={ref}>
                        <div className='work_box' >
                            <p className='work_title'>Infranix Technologys private Ltd. Lucknow India</p>
                            <p className='work_title2'>August 2022-Present</p>
                            <ul>
                                <li>Developed an ecommerce website for client with the dashboard for
                                    managing the products, managing reviews, users, payment etc. .</li>
                                <li>Integrated the web app with backend services to create new user onboarding
                                    application with dynamic form content.</li>
                                <li>I stretch my mental capacity to develope UI as per the given designs.</li>
                            </ul>
                        </div>


                    </div>
                    <div id="education" className='education' ref={ref1}>
                        <div className='education_box' >
                            <p className='education_title'>B.tech in Computer Science & Engineering </p>
                            <p className='education_title2'>Maharana Pratap Engineering College Kanpur India</p>
                            <p className='education_title3'>2019-2022</p>
                            <p className='education_title4'>CGPA:<span>7.52</span></p>

                        </div>

                        <div className='education_box'>
                            <p className='education_title'>Diploma in Computer Science & Engineering </p>
                            <p className='education_title2'>Integral University Lucknow India</p>
                            <p className='education_title3'>2016-2019</p>
                            <p className='education_title4'>Percentage:<span>75</span></p>

                        </div>


                        <div className='education_box'>
                            <p className='education_title'>Intermediate (<span>12<sup>th</sup></span>) </p>
                            <p className='education_title2'>Vikas Inter College Siddharth Nagar Uttar pradesh India</p>
                            <p className='education_title3'>2014-2016</p>
                            <p className='education_title4'>Percentage:<span>75</span></p>

                        </div>
                    </div>

                    <div id="skill" className='skill ' ref={ref2}>
                        <div className='skill_box' >
                            <div style={{ width: "130px", height: "130px" }} >

                                <CircularProgressbar value={80} text={`${80}%`}



                                    styles={buildStyles({
                                        pathColor: "green",
                                        textColor: "green",
                                        trailColor: "#eee",
                                        strokeLinecap: "butt"
                                    })}


                                />
                                <p style={{ textAlign: 'center' }}>JavaScript</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={75} text={`${75}%`}
                                    styles={buildStyles({
                                        pathColor: "yellow",
                                        textColor: "yellow",
                                        trailColor: "#eee",
                                        strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>ReactJs</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={90} text={`${90}%`}
                                    styles={buildStyles({
                                        pathColor: "lightgreen",
                                        textColor: "lightgreen",
                                        trailColor: "#eee",
                                        strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>Html</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={90} text={`${90}%`}
                                    styles={buildStyles({
                                        pathColor: "cyan",
                                        textColor: "cyan",
                                        // trailColor: "#eee",
                                        // strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>Css</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={90} text={`${90}%`}
                                    styles={buildStyles({
                                        pathColor: "lightblue",
                                        textColor: "lightblue",
                                        // trailColor: "#eee",
                                        // strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>Bootstrap</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={70} text={`${70}%`}
                                    styles={buildStyles({
                                        pathColor: "darkblue",
                                        textColor: "darkblue",
                                        trailColor: "#eee",
                                        strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>Rest API</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={70} text={`${70}%`}
                                    styles={buildStyles({
                                        pathColor: "blue",
                                        textColor: "blue",
                                        // trailColor: "#eee",
                                        // strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>Node.Js</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={66} text={`${50}%`}
                                    styles={buildStyles({
                                        pathColor: "#f00",
                                        textColor: "red",
                                        // trailColor: "#eee",
                                        // strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>SQl</p>
                            </div>
                        </div>

                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={66} text={`${50}%`}
                                    styles={buildStyles({
                                        pathColor: "yellow",
                                        textColor: "yellow",
                                        // trailColor: "#eee",
                                        // strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>PHP</p>
                            </div>
                        </div>
                        <div className='skill_box'>
                            <div style={{ width: "130px", height: "130px" }}>

                                <CircularProgressbar value={66} text={`${50}%`}
                                    styles={buildStyles({
                                        pathColor: "green",
                                        textColor: "green",
                                        trailColor: "#eee",
                                        strokeLinecap: "butt"
                                    })} />
                                <p style={{ textAlign: 'center' }}>Java Core</p>
                            </div>
                        </div>
                    </div>
                    <div id="project" className='project' ref={ref3}>
                        <div className='project_box'>
                            <p className='project_title'>Personal Portfolio Website <span style={{ color: 'yellow' }}>(2022)</span></p>
                            <p className='project_title2'>Technologies Used: React JS, SCSS</p>
                            <p className='project_title3'> A Personal Portfolio website to showcase all my details and projects at one place.</p>
                        </div>

                        <div className='project_box'>
                            <p className='project_title'>Ecommerce Website <span style={{ color: 'yellow' }}>(2022)</span></p>
                            <p className='project_title2'>Technologies Used:Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap</p>
                            <p className='project_title3'> Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe.</p>
                        </div>










                    </div>

                </div>
            </div>
        </div >
    )
}
