import React from 'react';
import './Gallery.css';
import projects from './ProjectArray';

class Gallery extends React.Component {

  render(){
    return(
      <div className='galleryContainer'>
        <h1 className='galleryTitle' id='gallery'>Projects</h1>
        {
          this.props.projects.map((project) => {
            return (
              <div className='projectCard'>
                <img className='galleryImage' src={project.picSrc} alt='broken'></img>
                <h3 className='projectName'>{project.name}</h3>
                <a href={project.code} target='_blank' className='codeButton'>
                  <h4 className='cardButton'>View Code</h4>
                </a>
                <a href={project.link} target='_blank' className='appButton'>
                  <h4 className='cardButton'>View App</h4>
                </a>
              </div>
              );
          })
        }
      </div>
    )
  }
};

export default Gallery;