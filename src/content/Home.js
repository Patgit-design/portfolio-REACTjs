import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/medailloncv.png';


class Home extends Component {
    render() {
        return (
            <div className="condiv-home">

                <ReactTypingEffect className="typingeffect" text={['I am Corduant Patricia', 'I am a web developer']} speed={200} eraseDelay={500} />

                <div>
                    <img src={profilepic} id="profil" className="profilepic" alt="me" width="300" height="300" ></img>
                </div>
                          

            </div>
            

        )
        
    }
}
export default Home


