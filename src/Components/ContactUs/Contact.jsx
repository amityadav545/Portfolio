import React, { useState } from 'react'
import '../ContactUs/contact.scss'
import SendIcon from '@mui/icons-material/Send';
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {
    const [first, setfirst] = useState("")

    const handleChange = (event) => {
        setfirst(event.target.value);

    }
    AOS.init();
    return (
        <div className='Contact' id="contact">
            <div className='Contact_title'>

                <p style={{ fontSize: '40px' }}>CONTACT US</p>
                <p>Lets Keep In Touch</p>
                <div className='bdr'></div>
            </div>
            <div className='Contact_form' data-aos="zoom-in">
                <form >
                    <label>
                        Name
                        <input type="text" value={first} onChange={handleChange} placeholder="Enter your full Name" />
                    </label>

                    <label>
                        Email
                        <input type="email" value={first} onChange={handleChange} placeholder='enter your Email' />
                    </label>
                    <label>
                        Requirement
                        <textarea rows="6" value={first} onChange={handleChange} placeholder="Your Requirment" />
                    </label>

                    <button type='submit'><SendIcon /></button>
                </form>

            </div>
        </div>
    )
}
