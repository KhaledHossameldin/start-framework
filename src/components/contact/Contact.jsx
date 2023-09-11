import React, { Component } from 'react'

import './contact.css';

export default class Contact extends Component {

  handleTyping(e) {
    if (e.target.value === '') {
      e.target.previousSibling.style.bottom = '25%';
    } else {
      e.target.previousSibling.style.bottom = '100%';
    }
  }

  render() {
    return (
      <div id='white-content' className='w-50 d-flex flex-column mx-auto gap-3 pb-4'>
        <h2 className='fs-1 fw-bolder text-uppercase mb-0 align-self-center'>Contact Section</h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
          <div className='colored-lines'></div>
          <i className='fa-solid fa-star'></i>
          <div className='colored-lines'></div>
        </div>
        <form className='d-flex flex-column gap-5'>
          <div className='position-relative'>
            <label htmlFor="userName" className="position-absolute z-n1">userName : </label>
            <input onInput={this.handleTyping} id='userName' type="text" placeholder='userName' className="form-control" />
          </div>
          <div className='position-relative'>
            <label htmlFor="userAge" className="position-absolute z-n1">userAge : </label>
            <input onInput={this.handleTyping} id='userAge' type="number" className="form-control" placeholder='userAge' />
          </div>
          <div className='position-relative'>
            <label htmlFor="userEmail" className="position-absolute z-n1">userEmail : </label>
            <input onInput={this.handleTyping} id='userEmail' type="email" className="form-control" placeholder='userEmail' />
          </div>
          <div className='position-relative'>
            <label htmlFor="userPassword" className="position-absolute z-n1">userPassword : </label>
            <input onInput={this.handleTyping} id='userPassword' type="password" className="form-control" placeholder='userPassword' />
          </div>
        </form>
        <button className='text-white fw-medium align-self-start'>Send Message</button>
      </div>
    )
  }
}
