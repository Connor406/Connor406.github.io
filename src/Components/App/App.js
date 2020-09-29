import React from 'react';
import './App.css';
import NavBar from '../NavBar/Navbar';
import Headline from '../Headline/Headline';
import About from '../About/About';
import Gallery from '../Projects/Gallery';
import projects from '../Projects/ProjectArray';
import Contact from '../Contact/Contact';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      projects: projects
    };
  }
  render(){
    return (
      <div className="App">
        <div className='overlay'>
          <NavBar />
          <Headline />
        </div>
        <div className='bgwhite'>
        <About />
        <Gallery projects={this.state.projects} />
        <Contact />
        </div>
      </div>
    );
  }
}

export default App;
