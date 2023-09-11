import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div id='content' className='text-white d-flex flex-column justify-content-center align-items-center gap-3'>
                <h2 className='fs-1 fw-bolder text-uppercase mb-0'>About Component</h2>
                <div className="d-flex justify-content-center align-items-center gap-3">
                    <div className='lines'></div>
                    <i className='fa-solid fa-star'></i>
                    <div className='lines'></div>
                </div>
                <div className="container">
                    <div className="row g-4 px-5 fw-bold">
                        <div className="col-md-6">
                            <div>
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div>
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
