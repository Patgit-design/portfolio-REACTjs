import React from 'react';
import './App.css';
import Home from './content/Home';
import About from './content/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Education from './content/education';
import Skills from './content/skills';
import Contact from './content/contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/education">
                    <Education />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </div>
        </Router>
    )
}
export default App;

