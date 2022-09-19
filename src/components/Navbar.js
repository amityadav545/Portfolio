import React from 'react'
import { Outlet, Link } from "react-router-dom";
import logoimg from '../components/logo.png'
import '../components/navbar.css';
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: 'rgb(87 95 255)' }}>
                <div className="container-fluid">
                    <div className="navbar-brand" >
                        <img src={logoimg} alt="" width="50" height="50" />
                    </div>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3 my-1 my-lg-0">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3 my-1 my-lg-0">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/education">Education</Link>
                            </li>

                            <li className="nav-item mx-3 my-1 my-lg-0">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/project">Project</Link>
                            </li>

                            <li className="nav-item mx-3 my-1 my-lg-0">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/skill">Skill</Link>
                            </li>

                            <li className="nav-item mx-3 my-1 my-lg-0">
                                <Link style={{ color: 'white', textDecoration: 'none' }} to="/contact_us">Contact Us</Link>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>
            <Outlet />
        </div>

    )
}
