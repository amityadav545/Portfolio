import React, { useState, useEffect } from 'react'
import '../Footer/footer.scss'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
    const [date, setdate] = useState('')

    useEffect(() => {
        var newDate = new Date()
        setdate(newDate.getFullYear());


    }, [])

    return (
        <div className='footer'>
            <div className='Details'>
                <h6>Address</h6>
                <p>Suhai Kanpurwa Siddharth Nagar</p>
                <p>Uttar pradesh India 272152</p>
            </div>

            <div className='Con_details'>
                <h6>Keep in Touch</h6>
                <p><PhoneForwardedIcon /><span><a href="tel:+916388131984 " style={{ textDecoration: 'none', color: 'white' }}>+916388131984</a></span></p>
                <p><EmailIcon /><span><a href="mailto:amitky545@gmail.com?subject = Feedback&body = Message " target="_blank" style={{ textDecoration: 'none', color: 'white' }}>amitky545@gmail.com</a></span></p>
            </div>
            <p>© {date} Copyright: amitkumarportfolio.com</p>
        </div >
    )
}
