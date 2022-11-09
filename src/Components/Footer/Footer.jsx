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
                <p><PhoneForwardedIcon /><span>+916388131984</span></p>
                <p><EmailIcon /><span>amitky545@gmail.com</span></p>
            </div>
            <p>© {date} Copyright: amitkumarportfolio.com</p>
        </div>
    )
}
