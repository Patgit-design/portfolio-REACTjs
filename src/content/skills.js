import React, { Component } from 'react'
import Logoskills from '../components/logo-skills'
class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'PHP', 'REACT JS', 'NODE JS', 'AND EVERY TOOLS TO DISCOVER >>>']
        };
    }
    render() {
        return (
            <div className="condiv skills">
                <h1 className="skills">
                    My skills and the tools I play with</h1>
                <ul class = "list-skills">
                    {this.state.myskills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                <Logoskills />

            </div>
        )
    }
}
export default Skills