import React from 'react';
import './About.css';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      story: "translate(-20%, 0%) rotate(270deg)"
    };
  }

  componentDidMount = () =>{ 
    window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled >= 700) {
      this.setState({
        story: `translate(-63%, 0%) rotate(270deg)`
      });
    } else {
      this.setState({
        story: `translate(${(scrolled - 1016)/5}%, 0%) rotate(270deg)`
      });
    }
    console.log(scrolled);
  })};

  render() {

    let styling = this.state.story;

    return (
      <div className='aboutMe' id='Story'>
        <h1 className='story' style={{transform: styling}} >Story Time</h1>
        <p>Greetings dear reader! My name is Connor Mahan and I'm a front-end
          developer hailing from the great northern state of Montana. While 
          working as a sales rep for a small tech company in the Bay Area, I 
          came to realize that my favorite part of sales was helping customers
          solve their tech-related problems. Soon I was bugging the dev team
          trying to learn more about how our software worked and eventually asking for coding tips.
          <br></br> <br></br>
          The day shelter-in-place took effect, it seemed like a great opportunity
          to ramp up my studying. Codecademy offered a Web Development
          bootcamp that taught me the ins and outs of HTML, CSS, Javascript and
          eventually SQL and frameworks like React and Express.js.
          <br></br> <br></br>
          Since "Hello World", I've been hooked. I'm extremely motivated to continue
          learning and improving my skills as a developer. Thanks for taking the time
          to check out my portfolio. If you like what you see, please feel free to reach
          out. I'm currently looking for new opportunities and would be happy to connect!
          <br></br> <br></br>
          Cheers, <br></br> Connor
        </p>
        <div className='hireButtonContainer'>
          <a href='#contact' id='hirebutton'>
            <h6 className='hireMeButton'>Hire This Guy</h6>
          </a>
        </div>
      </div>
    )
  }
}

export default About;