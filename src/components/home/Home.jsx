import React, { Component } from 'react'
import './home.css';
import homePicture from '../../images/home.svg';

export default class Home extends Component {
  render() {
    return (
      <div id='home-content' className='text-white d-flex flex-column justify-content-center align-items-center gap-3'>
        <img id='home-picture' className='mb-4' src={homePicture} alt="home-logo" />
        <h2 className='fs-1 fw-bolder text-uppercase mb-0'>Start Framework</h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className='lines'></div>
          <i className='fa-solid fa-star'></i>
          <div className='lines'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    )
  }
}
