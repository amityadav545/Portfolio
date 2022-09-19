import React from 'react'
import './card.css'
export default function Card(props) {
    return (
        <div className="col-sm d-flex justify-content-center my-3">
            <div className="card  cardstyle" style={{ width: '18rem', borderBottom: '4px solid blue' }}>
                <img className="card-img-top" src={props.img2} alt={props.img2} />
                <div className="card-body">
                    <h5 className="card-title">{props.heading}</h5>
                    <p className="card-text">{props.college_name}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.pass_out}</li>
                    <li className="list-group-item">{props.percentage}</li>

                </ul>

            </div>
        </div >
    )
}
