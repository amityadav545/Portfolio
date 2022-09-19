import React from 'react'

export default function Contact() {
    return (
        <div className='container '>

            <h1 className='mt-4 mb-4 '>Get in touch with Us</h1>

            <p>Crowds are the most difficult thing for me these days because I have to walk with my head down and my eyes averted. There's still that part of me that wants to hold my head up, make eye contact and smile. (c)</p>
            <div className='row  p-3 m-3 '>
                <div className='col-sm-6'>
                    <div>
                        <p style={{ color: 'black' }}><strong style={{ color: '#ff8f3c' }}>Location</strong>:
                            Lucknow Up India</p>
                        <p style={{ color: 'black' }}><strong style={{ color: '#ff8f3c' }}>Phone</strong>:
                            +916388131984</p>
                        <p style={{ color: 'black' }}><strong style={{ color: '#ff8f3c' }}>Twitter</strong>:
                            @rainbowTwitter</p>
                        <p style={{ color: 'black' }}><strong style={{ color: '#ff8f3c' }}>Facebook</strong>:
                            @rainbowFacebook</p>
                        <p style={{ color: 'black' }}><strong style={{ color: '#ff8f3c' }}>Instagram</strong>:
                            @rainbowInstagram</p>
                        <p style={{ color: 'black' }}><strong style={{ color: '#ff8f3c' }}>Whatsapp</strong>:
                            @rainbowWhatsapp</p>
                    </div>

                </div>
                <div className='col-sm-6'>
                    <form>
                        <div className="form-group my-3">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group my-3">

                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group my-3">

                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Subject" />
                        </div>
                        <div className="form-group my-3">

                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your msg here"></textarea>
                        </div>
                        <div className="form-group form-check my-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
