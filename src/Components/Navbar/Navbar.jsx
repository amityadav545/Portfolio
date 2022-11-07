import React from 'react'
import '../Navbar/navbar.scss'
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
export default function Navbar() {
    return (
        <div className='Navbar'>
            <div className='navbar_title'><a style={{ color: 'white', textDecoration: 'none' }} href="mailto:amitky545@gmail.com?subject = Feedback&body = Message " target="_blank">amitky545@gmail.com</a></div>
            <div className='navbar_title2'>

                <ul>
                    <li>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}> <HomeIcon /></Link>
                    </li>
                    <li>
                        <a href='#resume' style={{ color: " white" }}><ArticleIcon /></a></li>

                    <li>
                        <a href='#contact' style={{ color: " white" }}><ContactsIcon /></a></li>
                    <li>
                        <a href='#about' style={{ color: " white" }}><InfoIcon /></a></li>
                </ul>
            </div>
        </div>
    )
}
