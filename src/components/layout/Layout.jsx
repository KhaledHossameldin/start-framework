import React, { Component } from 'react'
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

import './layout.css';

export default class Layout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div id='content'>
                    <Outlet />
                </div>
                <Footer />
            </>
        )
    }
}
