import React from 'react'
import About from '../../Components/Aboutme/About'
import Contact from '../../Components/ContactUs/Contact'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Profile from '../../Components/Profile/Profile'
import Resume from '../../Components/Resume/Resume'
import '../Home/home.scss'
export default function Home() {
    return (
        <div className='home'>
            <div className='home_nav'>
                <Navbar />
            </div>
            <div className='home_profile'><Profile /></div>
            <div className='home_about'>
                <About />
            </div>
            <div className='home_resume'>
                <Resume />
            </div>
            <div className='home_contact'>
                <Contact />
            </div>
            <div className='home_footer'>
                <Footer />
            </div>
        </div>
    )
}
