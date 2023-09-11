import React, { Component } from 'react'

import './portfolio.css';

import firstPicture from '../../images/portfolio/1.png';
import secondPicture from '../../images/portfolio/2.png';
import thirdPicture from '../../images/portfolio/3.png';

export default class Portfolio extends Component {

  openModal = image => {
    this.modal.querySelector('img').setAttribute('src', image);
    this.modal.classList.replace('d-none', 'd-flex');
  }
  
  hideModal = _ => this.modal.classList.replace('d-flex', 'd-none');

  componentDidMount = _ => this.modal = document.querySelector('div#image-modal');

  render() {
    return (
      <div id='white-content' className='d-flex flex-column justify-content-center align-items-center gap-3 pb-4'>
        <div onClick={_ => this.hideModal()} id="image-modal" className='position-fixed top-0 bottom-0 start-0 end-0 bg-primary bg-opacity-25 d-none justify-content-center align-items-center'>
          <img src={firstPicture} alt="modal" />
        </div>
        <h2 className='fs-1 fw-bolder text-uppercase mb-0'>Portfolio Component</h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className='colored-lines'></div>
          <i className='fa-solid fa-star'></i>
          <div className='colored-lines'></div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div onClick={_ => this.openModal(firstPicture)} className='portfolio-item position-relative rounded-3 overflow-hidden'>
                <img src={firstPicture} alt="house" className="img-fluid" />
                <div className="portfolio-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div onClick={_ => this.openModal(secondPicture)} className='portfolio-item position-relative rounded-3 overflow-hidden'>
                <img src={secondPicture} alt="pie" className="img-fluid" />
                <div className="portfolio-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div onClick={_ => this.openModal(thirdPicture)} className='portfolio-item position-relative rounded-3 overflow-hidden'>
                <img src={thirdPicture} alt="circus" className="img-fluid" />
                <div className="portfolio-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div onClick={_ => this.openModal(firstPicture)} className='portfolio-item position-relative rounded-3 overflow-hidden'>
                <img src={firstPicture} alt="house" className="img-fluid" />
                <div className="portfolio-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div onClick={_ => this.openModal(secondPicture)} className='portfolio-item position-relative rounded-3 overflow-hidden'>
                <img src={secondPicture} alt="pie" className="img-fluid" />
                <div className="portfolio-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div onClick={_ => this.openModal(thirdPicture)} className='portfolio-item position-relative rounded-3 overflow-hidden'>
                <img src={thirdPicture} alt="circus" className="img-fluid" />
                <div className="portfolio-overlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
