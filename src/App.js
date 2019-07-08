import React, {Component} from 'react';
import './App.css';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpg'


class App extends Component{

  state = { displayBio : false };

  toggleDisplayBio = () => {

    this.setState({displayBio : !this.state.displayBio});
  }

  render(){

    return (
    <div>
      <img src = {profile} alt = 'Satyendra' className="profile" />
      <h1>Hello!</h1>
      <p>My name is Satyendra. I'm a software engineer.</p>
      <p>I 'm alwayes looking forward to working on meaningful projects.</p>
      
      {
        this.state.displayBio ?  (
      <div>
      <p>I live in Pune, and code every day,</p>
      <p>My favourite language is JavaScript, and I think React.js is awesome</p>
      <p>Besides coding , I also love to write poems!</p>
      <button onClick = {this.toggleDisplayBio}>Show Less</button>
      
     </div>
      ): (<div>
            <button onClick = {this.toggleDisplayBio}>Read More</button>
          </div>)
      }
      <hr />
      <Projects /><hr />
      <SocialProfiles />
    </div>);
  }
}

export default App;
