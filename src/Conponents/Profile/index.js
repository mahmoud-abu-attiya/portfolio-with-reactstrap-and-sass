import React from 'react';
import './style.scss';

const Profile = ()=> {
    return(
      <div className='container'>
        <div className='row'>
        <div className='Profile col-12 col-sm-6'>
          <h2>my profile</h2>
          <div className='info d-inline-block'>
            <div className='items'>name</div>
            <div className='items'>birthday</div>
            <div className='items'>phone</div>
            <div className='items'>address</div>
            <div className='items'>email</div>
            <div className='items'>website</div>
          </div>
          <div className='info-answer d-inline-block'>
            <div className='items'>Mahmoud Abu-Attiya</div>
            <div className='items'>10/6/2000</div>
            <div className='items'>+1 22 333 444</div>
            <div className='items'>Egypt</div>
            <div className='items'>mahmoud@gmail.com</div>
            <div className='items'><a href='/'>www.mahmoud.com</a></div>
          </div>
        </div>
  
        <div className='skills  col-12 col-sm-6'>
          <h2>some skills</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consequatur expedita nesciunt hic eveniet quisquam mollitia quo? Soluta quibusdam animi cumque voluptatem earum?</p>
          <h4>sass</h4>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}}>75%</div>
          </div>
          <h4>react.js</h4>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>90%</div>
          </div>
          <h4>bootstrap</h4>
          <div className="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}}>60%</div>
          </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;
