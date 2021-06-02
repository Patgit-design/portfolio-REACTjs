import React, { Component } from 'react';
import Pomodo from '../img/pomodoro-start.png';
class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <div className="projects">
                    <h2 className="projects_title">Here some links of projects</h2>
                   <img src={Pomodo} className="pomodoro" alt="pomodoro-project"></img>
                   <a className ="link-project" href="https://admiring-chandrasekhar-8ca532.netlify.app/" >One Pomodoro Timer</a>
                </div>
                
            </div>
        )
    }
}
export default Projects