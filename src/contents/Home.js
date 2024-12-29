import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/chandu.jpg';
import Social from '../components/Social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <h3>
            <ReactTypingEffect className="typingeffect" text={['I am Chandana B S','I am a web developer']} speed={40} eraseDelay={800}/>
            </h3>
            <Social />
            </div>
            )
        }
    }
    
    export default Home