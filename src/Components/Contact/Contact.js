import React from 'react';
import './Contact.css';
import { MdAirplanemodeActive, MdPlace } from "react-icons/md";
import { FaAngellist, FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Resume from './Resume.pdf';


class Contact extends React.Component{
  render(){
    return(
      <div id='contact' className='contactContainer'>
        <h1>Drop a line</h1>
        <div className='contactInfo'>
          <h2>Mahan406@gmail.com</h2>
          <h2><MdPlace /> San Francisco, CA</h2>
          <h2 id='relocate'><MdAirplanemodeActive /> Willing to relocate for the right opportunity!</h2>
          <a href={Resume} target='_blank' className='resume'>
            <h2><FaDownload /> Check out my resume</h2>
          </a>
        </div>
        <div className='logos'>
          <a href='https://angel.co/u/connor-mahan' target='_blank'>
            <h3><FaAngellist /></h3>
          </a>
          <a href='https://github.com/Connor406' target='_blank'>
            <h3><FaGithub /></h3>
          </a>
          <a href='https://www.linkedin.com/in/connor-mahan406/' target='_blank'>
            <h3><FaLinkedin /></h3>
          </a>
        </div>
      </div>
    );
  }
};

export default Contact;