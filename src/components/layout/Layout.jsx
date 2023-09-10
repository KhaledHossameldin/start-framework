import React, { Component } from 'react'
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

export default class Layout extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Outlet />
                <Footer />
            </>
        )
    }
}
