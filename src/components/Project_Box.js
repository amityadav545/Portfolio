import React, { useEffect } from 'react'
import './card.css';
export default function Project_Box(props) {
    useEffect(() => {

    })
    return (
        <div className='col-sm-4 d-flex justify-content-center '>
            <div className="card my-4 cardbox showv">
                <video src="video.mp4" controls></video>
                <div className="card-body">
                    <h5 className="card-title">{props.project_name}</h5>
                    <p className="card-text">{props.project_dic}</p>
                    <a href="/" className="btn btn-primary">Live Demo</a>
                </div>
            </div>
        </div>
    )
}
