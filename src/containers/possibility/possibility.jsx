import React from 'react';
import './possibility.css';
import possibilityImg from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className="gpt3-possibility section-padding" id='possibility'>
    <div className="gpt3-possibility-image">
      <img src={possibilityImg} alt="possibilityImg" />
    </div>
    <div className="gpt3-possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className=''></h1>

    </div>
    </div>
  )
}

export default Possibility