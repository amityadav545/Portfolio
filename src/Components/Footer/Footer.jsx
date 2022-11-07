import React, { useState, useEffect } from 'react'
import '../Footer/footer.scss'
export default function Footer() {
    const [date, setdate] = useState('')

    useEffect(() => {
        var newDate = new Date()
        setdate(newDate.getFullYear());


    }, [])

    return (
        <div className='footer'>
            <p>© {date} Copyright: amitkumarportfolio.com</p>
        </div>
    )
}
