import React from 'react'
import '../Aboutme/about.scss'
import aboutimg from '../images/about img.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext } from 'react';
import Ncontext from '../../NContext';
export default function About() {

    const context = useContext(Ncontext);
    const { Handlescroll1 } = context;
    const { ref6 } = context



    AOS.init();
    return (
        <div className='About_container' ref={ref6}>
            <div className='About_title'>

                <p style={{ fontSize: '40px' }}>ABOUT ME</p>
                <p>Why Choose Me ?</p>
                <div className='bdr'></div>
            </div>
            <div className='About_content' data-aos="zoom-in">
                <div className='About_content_left'>
                    <img src={aboutimg} alt={aboutimg} style={{ height: '100%', width: '100%', }} />
                </div>
                <div className='About_content_right'>
                    <p style={{ fontSize: '14px', lineHeight: '30px' }}>Hi! My name is AMIT KUMAR YADAV. I am a Web Developer, and I'm very passionate and dedicated to my work. With experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success.
                        I enjoy every step of the design process, from discussion and collaboration.</p>
                    <p style={{ borderBottom: '2px solid gold', width: 'fit-content', fontSize: '20px', color: 'red' }}>Here are a Few Highlights:</p>
                    <ul>
                        <li>Full Stack web</li>
                        <li>Interactive Front End as per the design</li>
                        <li>Redux for State Mnanagement</li>
                        <li>Building REST API</li>
                        <li>Managing database</li>

                    </ul>

                    <div className='Button'>
                        <button className='Hire_me'><a style={{ color: 'black', textDecoration: 'none' }} onClick={Handlescroll1} >Explore</a></button>
                        <button className='get_resume'>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
