import React from 'react'

import '../components/Home.css';

export default function Homesection() {
    return (
        <>

            <div className="container-fluid m-0 pt-5 p-0 homebg "  >

                <ul className="circles ">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className='sectionhome'>
                    <div className="row  " style={{ margin: "auto", paddingRight: '25px', paddingLeft: '0' }} >
                        <div className="col-sm-5 pt-5 ">

                        </div>
                        <div className="col-sm-7      text-center   " >
                            <p className="homeheading text-center ">Thanks for getting in Touch</p>
                            <p className="homeheading2">Welcome to my Portfolio</p>
                            <p className="homeheading3">“Amit ’s my name, and developing’s my game!”.<br />I’m working as web developer in Infranix technologys private ltd Lucknow India.I have developed many website and apart from the I have been part of web design project, office work and as freelancer. .</p>
                            <div className="pt-lg-5 pb-lg-5 ">


                                <button type="button" className="btn btn-lg btn-outline-success mb-3" >Connect</button>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </>
    )
}
