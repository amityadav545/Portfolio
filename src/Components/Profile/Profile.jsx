import React from 'react'
import '../Profile/profile.scss'
import mouseimg from '../images/mouse.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Typical from 'react-typical'
import amitimg from '../images/amit yadav-1.jpg'
export default function Profile() {
    return (
        <div className='Profile'>
            <img className='mouseimg' src={mouseimg} alt={mouseimg} />
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
                <div className='User_Position'>
                    {" "}
                    <h2 style={{ color: 'gold' }}>
                        {" "}
                        <Typical

                            steps={['Full Stack Developer', 3000, 'Back End Developer', 3000, 'Front End developers', 3000]}
                            loop={Infinity}

                        />
                    </h2>
                </div>
                <div className='User_content'>Full stack web  developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency.
                    Strong professional with a BSC willing to be an asset for an organization.</div>

                <div className='Button'>
                    <button className='Hire_me'><a style={{ color: 'black', textDecoration: 'none' }} href='#contact'>Hire Me</a></button>
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
