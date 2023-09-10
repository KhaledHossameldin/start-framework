import React, { Component } from 'react'

import './footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className='text-white'>
                <div id='social-info' className='p-5'>
                    <div className="container">
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className='text-center'>
                                    <h3 className='text-uppercase fw-bolder'>Location</h3>
                                    <p>2215 John Daniel Drive</p>
                                    <p>Clark, MO 65243</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='text-center'>
                                    <h3 className='text-uppercase fw-bolder'>Around The Web</h3>
                                    <div>
                                        <i className="mx-1 fa-brands fa-facebook border rounded-circle p-2"></i>
                                        <i className="mx-1 fa-brands fa-twitter border rounded-circle p-2"></i>
                                        <i className="mx-1 fa-brands fa-linkedin-in border rounded-circle p-2"></i>
                                        <i className="mx-1 fa-solid fa-globe border rounded-circle p-2"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='text-center'>
                                    <h3 className='text-uppercase fw-bolder'>About Freelancer</h3>
                                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='bottom-footer' className='py-4 text-center'>
                    <p className='mb-0'>Copyright © Khaled Hossameldin 2023</p>
                </div>
            </footer>
        )
    }
}
