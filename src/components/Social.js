import React, { Component } from 'react';
import Github from '../img/github.svg';
import Insta from '../img/instagram.png';
import Fb from '../img/facebook.svg';
import Linkedin from '../img/linkedin.svg';

class Social extends Component {
    render() {
        return (
            <div class="social">
               <a href="https://github.com/Patgit-design" ><img src ={Github}  className="social-logo" alt = "github"  width = "50" height = "50"></img></a>
             <a href="https://www.instagram.com/patgitdesign" ><img src ={Insta}  className="insta" alt = "instagram"  width = "50" height = "50"></img></a>
             <a href="https://www.facebook.com/Patgit-Design-108918744739400" ><img src ={Fb}  className="social-logo" alt = "facebook"  width = "50" height = "50"></img></a>
             <a href="https://Linkedin.com/in/patricia-corduant" ><img src ={Linkedin}  className="social-logo" alt = "linkedin"  width = "50" height = "50"></img></a>
            </div>
        )
    }
}
export default Social

