import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './navbar.css';

let navbarLinks;

export default class Navbar extends Component {

    clearActiveLinks = _ => {
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].parentElement.classList.remove('active');
        }
    }

    chooseTab = e => {
        for (let i = 0; i < navbarLinks.length; i++) {
            if (e.target === navbarLinks[i]) {
                navbarLinks[i].parentElement.classList.add('active');
            } else {
                navbarLinks[i].parentElement.classList.remove('active');
            }
        }
    }

    componentDidMount = _ => navbarLinks = document.querySelectorAll('nav li.nav-item a.nav-link');

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg py-4 fixed-top">
                <div className="container">
                    <Link onClick={this.clearActiveLinks} className="navbar-brand text-uppercase fs-2 fw-bolder" to="">Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-3">
                                <Link onClick={this.chooseTab} className="nav-link text-uppercase text-white fw-bold" aria-current="page" to="about">About</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link onClick={this.chooseTab} className="nav-link text-uppercase text-white fw-bold" to="portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link onClick={this.chooseTab} className="nav-link text-uppercase text-white fw-bold" to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
