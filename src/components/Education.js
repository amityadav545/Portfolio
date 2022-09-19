import React from 'react'
import mypic from '../components/amit yadav-1.jpg';
import upboard from '../components/Up-board-logo-_5ed78d4bf3de4.jpeg';
import aktuboard from '../components/aktu.jpeg';
import iulboard from '../components/Integral-University.jpeg';
import '../components/Education.css';
import Card from './Card';
import About from './About';
import Navbar from './Navbar';
export default function Education() {
    return (
        <>

            <div className='container-fluid m-0 p-0  pb-3 educationcontainer'>
                <div className='educationsection'>
                    <div className="mx-4 my-5" style={{ height: '200px', width: '200px', border: '5px solid rgb(187, 189, 169)', borderRadius: '50%' }}>
                        <img src={mypic} alt="network error" style={{ height: '100%', width: '100%', borderRadius: '50%' }} />
                    </div>
                    <div className='mx-4 my-5'>
                        <h1>AMIT KUMAR YADAV</h1>
                        <p>Trainee Software Developer</p>
                        <p>+916388131984</p>
                        <p>yaduvanshiamit545@gmail.com</p>
                    </div>
                </div>

                <div className="container-fluid  ">
                    <div className="row m-0 p-0   ">
                        <Card img2={upboard} heading={<>10<sup>th</sup>(high School)</>} college_name="Vikas Inter College Kheshraha Siddharth Nagar UP" pass_out="2014" percentage="80%" />
                        <Card img2={upboard} heading={<>12<sup>th</sup>(high School)</>} college_name="Vikas Inter College Kheshraha Siddharth Nagar UP" pass_out="2016" percentage="75%" />
                        <Card img2={iulboard} heading="Diploma in CSE" college_name="Integral University Lucknow UP" pass_out="2019" percentage="75%" />
                        <Card img2={aktuboard} heading="B.tech in CSE" college_name="Maharana Pratap Engineering College Kanpur UP " pass_out="2022" percentage="70%" />



                    </div>
                </div>

                <About />

            </div>
        </>
    )
}
