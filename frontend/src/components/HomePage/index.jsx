import React from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from 'antd';
// import logo from '../../assets/logo.svg';

import blueglow from '../../assets/blueglow.png';
import righthome from '../../assets/righthome.png';
import logo1 from '../../assets/LOGI-removebg-preview.png';

import './style.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <img src={righthome} alt="pill" className="righthome" />
      <img src={blueglow} alt="pill" className="blueglow" />
      <div className="home-nav">
<div className='LOGO'>
<img src={logo1} alt="logo" className="logo" />
        
<p>HomeCare.ai</p>
</div>
        
        {/* <div className="links">
          <NavLink to="/">
            <h4>Features</h4>
          </NavLink>
          <NavLink to="/">
            <h4>Pricing</h4>
          </NavLink>
          <NavLink to="/">
            <h4>About</h4>
          </NavLink>
          <NavLink to="/">
            <h4>Team</h4>
          </NavLink>
        </div> */}
        <NavLink to="/">
          <Button className="beginnew" size="large">
              Back to Home
            </Button>
        </NavLink>
      </div>
      <div className="content">
        <h1> Telemedicine </h1>
        <p>
          Telemedicine is a general term that covers all of the ways you and your doctor can use technology to communicate without being in the same room. 
          It includes phone calls, video chats, emails, and text messages.
          In a digital world affected by COVID 19, telemedicine is more necessary than ever to improve the quality and accessibility of medical care to distant users 
        </p>
        <div className="buttons">
          <NavLink to="/main">
            <Button className="begin" size="large">
              Let's Begin
            </Button>
          </NavLink>
          {/* <NavLink to="/main">
            <Button className="view" size="large">
              View Info
            </Button>
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
