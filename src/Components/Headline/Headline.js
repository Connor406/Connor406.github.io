import React from 'react';
import './Headline.css';

class Headline extends React.Component{
  render(){
    return (
      <div className='headline'>
        <div className='intro-container'>
          <h1 className='intro-fun'>Fun</h1>
          <h1 className='intro-meets'>meets functional.</h1>
          <div className='button-container'>
            <a href='#gallery'>
              <h3 className='button-projects'>View Projects</h3>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Headline;