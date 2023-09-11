import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './navbar.css';

export default class Navbar extends Component {

    clearActiveLinks = _ => {
        for (let i = 0; i < this.navbarLinks.length; i++) {
            this.navbarLinks[i].parentElement.classList.remove('active');
        }
    }

    chooseTab = e => {
        for (let i = 0; i < this.navbarLinks.length; i++) {
            if (e.target === this.navbarLinks[i]) {
                this.navbarLinks[i].parentElement.classList.add('active');
            } else {
                this.navbarLinks[i].parentElement.classList.remove('active');
            }
        }
    }

    componentDidMount() {
        this.navbar = document.querySelector('nav.navbar');
        this.navbarLinks = document.querySelectorAll('nav li.nav-item a.nav-link');
        window.addEventListener('scroll', _ => {
            if (window.scrollY >= 30) {
                this.navbar.style.paddingBlock = '0.5rem';
            } else {
                this.navbar.style.paddingBlock = '1.5rem';
            }
        });
    }

    render() {
        return (
            <nav className="navbar navbar-dark navbar-expand-lg fixed-top">
                <div className="container">
                    <Link onClick={this.clearActiveLinks} className="navbar-brand text-uppercase fs-2 fw-bolder text-white" to="">Start Framework</Link>
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
