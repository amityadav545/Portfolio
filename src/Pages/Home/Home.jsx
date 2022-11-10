import React, { useContext, useState, useEffect } from 'react'
import About from '../../Components/Aboutme/About'
import Contact from '../../Components/ContactUs/Contact'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Profile from '../../Components/Profile/Profile'
import Resume from '../../Components/Resume/Resume'
import topimg from '../../Components/images/rocket.png'
import '../Home/home.scss'
import Ncontext from '../../NContext'
export default function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [lass, setlass] = useState('topbox');

    const context = useContext(Ncontext);
    const { topScrollevent } = context;
    const { ref7 } = context;
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position >= 500) {
            setlass('topbox2')
        }
        else {
            setlass('topbox')
        }

    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    return (


        <div className='home' ref={ref7}>
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
            <div className={lass} onClick={topScrollevent}>
                <img className='topbox_int' src={topimg} alt={topimg} />
            </div>
        </div>

    )
}
