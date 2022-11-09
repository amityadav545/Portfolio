import React, { useContext, useState } from 'react'
import '../ContactUs/contact.scss'
import SendIcon from '@mui/icons-material/Send';
import AOS from "aos";
import "aos/dist/aos.css";
import Ncontext from '../../NContext';
import { ClassNames } from '@emotion/react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [req, setReq] = useState("")
    const context = useContext(Ncontext);
    const { ref5 } = context

    const handleChange = (event) => {
        setName(event.target.value);

    }
    const handleChange2 = (event) => {
        setEmail(event.target.value);

    }
    const handleChange3 = (event) => {
        setReq(event.target.value);

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const Name = data.get('name');
        const Email = data.get('email');
        const Requirement = data.get('requirement');

        if (Name != "" && Email != "" && Requirement != "") {
            alert("thank you for Contact Us")
        }


    };
    AOS.init();
    return (
        <div className='Contact' ref={ref5}>
            <div className='Contact_title'>

                <p style={{ fontSize: '40px' }}>CONTACT US</p>
                <p>Lets Keep In Touch</p>
                <div className='bdr'></div>
            </div>
            <div className='Contact_form' data-aos="zoom-in">
                <form onSubmit={handleSubmit}>
                    <label>
                        <p style={{ textAlign: 'start', width: '90%' }}>Name</p>
                        <input name='name' type="text" value={name} onChange={handleChange} placeholder="Enter your full Name" required />
                    </label>

                    <label>
                        <p style={{ textAlign: 'start', width: '90%' }}>   Email</p>
                        <input name='email' type="email" value={email} onChange={handleChange2} placeholder='enter your Email' required />
                    </label>
                    <label>
                        <p style={{ textAlign: 'start', width: '90%' }}> Requirement</p>
                        <textarea name='requirement' rows="6" value={req} onChange={handleChange3} placeholder="Your Requirment" required />
                    </label>

                    <button type='submit'><SendIcon /></button>
                </form>

            </div>
        </div>
    )
}
