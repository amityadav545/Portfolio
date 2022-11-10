import React, { useContext, useEffect } from 'react'
import '../Profile/profile.scss'
import mouseimg from '../images/mouse.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Typed from "react-typed"
import amitimg from '../images/amit yadav-1.png'
import Ncontext from '../../NContext';

export default function Profile() {

    const context = useContext(Ncontext);
    const { Handlescroll1 } = context;




    return (


        <div className='Profile'>

            <a href='tel:+916388131984' style={{ zIndex: "200000" }}> <img className='mouseimg' src={mouseimg} alt={mouseimg} /></a>
            <div className='profile_left'>

                <ul>
                    <li><a href='https://www.instagram.com/amit___545/' target="_blank"><InstagramIcon /></a></li>
                    <li> <a href='https://www.linkedin.com/in/amit-kumar-yadav-81a682224/' target="_blank"><LinkedInIcon /></a></li>
                    <li><a href='https://www.facebook.com/545amit' target="_blank"><FacebookIcon /></a></li>
                    <li><a href="mailto:amitky545@gmail.com?subject = Feedback&body = Message " target="_blank"><AttachEmailIcon /></a></li>

                </ul>
                <div className='User_Name'>
                    <h1>Amit kumar yadav</h1>
                </div>
                <div className='User_Position' >

                    <h2 style={{ color: 'gold' }}>

                        <Typed
                            strings={[
                                " Full Stack Developer",
                                "Front End Developer",
                                "Back End Developer",
                            ]}
                            typeSpeed={30}
                            backSpeed={20}
                            loop
                        />
                    </h2>
                </div>
                <div className='User_content'>I am always ready to work on new and exciting technologies emerging nowadays.
                    I have good work experience as a MERN Stack Developer in startup(s) and UI/UX Designer where I was core member of
                    the development team and done quite some contribution to open source as well.</div>

                <div className='Button'>
                    <button className='Hire_me'><a style={{ color: 'black', textDecoration: 'none' }} onClick={Handlescroll1}>Explore</a></button>
                    <button className='get_resume'> Resume</button>
                </div>
            </div>

            <div className='profile_right'>
                <div className='user_pic'>
                    <img src={amitimg} alt={amitimg} style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                </div>
            </div>
        </div >


    )
}
