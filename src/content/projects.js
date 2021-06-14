import React, { Component } from 'react';
import Pomodo from '../img/pomodoro-start.png';
import ChicKebab from '../img/Chic Kebab.png';
import Turlututu from '../img/turlututu.png';
import Pendu from '../img/pendu.png';
import Clicker from '../img/virus.png';
class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <h2 className="projects_title">Here some links of projects</h2>
                <div className="projects">
                    <p className="description">First project in React</p>
                    <img src={Pomodo} className="pomodoro" alt="pomodoro-project"></img>
                    <a className="link-project" href="https://admiring-chandrasekhar-8ca532.netlify.app/" >One Pomodoro Timer</a>
                </div>
                <div className="projects">
                    <p className="description">Cookie Clicker</p>
                    <img src={Clicker} className="virus" alt="cookie=clicker-project"></img>
                    <a className="link-project" href="https://shinyami.github.io/CookieClicker/" >Cookie Clicker</a>
                </div>
                <div className="projects">
                    <p className="description">Hangman Game to learn JS</p>
                    <img src={Pendu} className="hangman" alt="hangman-project"></img>
                    <a className="link-project" href="https://patgit-design.github.io/Hangman" >Hangman</a>
                </div>
                <div className="projects">
                    <p className="description">Fake site for a fake restaurant to learn Bootstrap</p>
                    <img src={ChicKebab} className="ChicKebab" alt="chickebab-project"></img>
                    <a className="link-project" href="https://naudar79.github.io/restaurant-css-framework-2/" >Chic Kebab Restaurant</a>
                </div>
                <div className="projects">
                    <p className="description">Copy of a web page in html/CSS</p>
                    <img src={Turlututu} className="turlututu" alt="turlututu-project"></img>

                    <a className="link-project" href="https://patgit-design.github.io/turlututu" >Projet turlututu</a>
                </div>

            </div>
        )
    }
}
export default Projects