import React, { Component } from 'react';

import '../css/Profilepage.css';

import me from '../img/me.png';

class Profilepage extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className='profilepage-wrapper'>
        <img className='profilepage-image rellax-1-5' src={me} />
        {/* <img className='profilepage-image rellax-3' src={me} /> */}
        <div className='profilepage-text-container'>
          <h1 className='profilepage-title'>CLEAN DESIGNS</h1>
          <h1 className='profilepage-title'>&amp; CONCISE CODE</h1>
          <p className='profilepage-text' style={{ marginTop: 18 }}>Experienced &amp; passionate individual</p>
          <p className='profilepage-text' style={{ marginBottom: 18 }}>looking for <span>design or development work.</span></p>
          <p className='profilepage-text' style={{ marginTop: 18 }}>Can work alone or alongside your team</p>
          <p className='profilepage-text' style={{ marginBottom: 18 }}><span>I'm also available for freelance.</span></p>
        </div>
        <div className='profilepage-footer'>
          <p className='profilepage-footer-text'>2019 &copy; Jason Ellul</p>
          <a href='mailto:jason.j.ellul@gmail.com' className='profilepage-footer-text'>Contact me</a>
        </div>
      </div>
    )
  }
}


export default Profilepage;