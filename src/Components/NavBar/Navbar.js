import React from 'react';
import "./Navbar.css";
import {FaArrowCircleUp} from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaAngellist } from 'react-icons/fa';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navbar: 'Navbar',
      text: 'text-top'
    };
  }

  componentDidMount = () =>{ 
    window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled >= 632) {
      this.setState({
        navbar: 'Navbar active',
        text: 'text-top active'
      });
    } else {
      this.setState({
        navbar: 'Navbar',
        text: 'text-top'
      });
    }
  })};


  render() {

    const scrollTop = () => {
      window.scrollTo({top: 0});
    };


    return (
      <div className={this.state.navbar} >
        <a className={this.state.text} id='home-button'>
          <h4 onClick={scrollTop} >Home</h4>
        </a>
        <a className={this.state.text} href='#Story'>
          <h4>About</h4>
        </a>
        <a className={this.state.text} href='#gallery'>
          <h4>Projects</h4>
        </a>
        <a className={this.state.text} href='#contact'>
          <h4>Hire Me!</h4>
        </a>
        <div className='socialLinks'>
          <a className={this.state.text} href='https://github.com/Connor406' target='_blank'><FaGithub /></a> 
          <a className={this.state.text} href='https://www.linkedin.com/in/connor-mahan406/' target='_blank'><FaLinkedin /></a>
          <a className={this.state.text} href='https://angel.co/u/connor-mahan' target='_blank'><FaAngellist /></a>
        </div>
        <div className='scrollToTop'>
          <h5 className='Top'><FaArrowCircleUp onClick={scrollTop} /></h5>
        </div>
      </div>
    )
  }
};

export default Navbar;