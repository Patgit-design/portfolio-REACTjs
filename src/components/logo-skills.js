import React, { Component } from 'react';
import Git from '../img/git.png';
import Html from '../img/html5.png';
import Css from '../img/css3.png';
import Sass from '../img/sass-original.svg';
import Bootstrap from '../img/Bootstrap-Logo.png';
import Js from '../img/javascript-original.svg';
import Npm from '../img/npm-logo.png';
import Php from '../img/php-original.svg';
import Mysql from '../img/mySQL.png';
import Wp from '../img/WP.png';
import Figma from '../img/figma.png';
import Trello from '../img/Trello_logo.png';
import Node from '../img/node-js.svg';


class Logoskills extends Component {
    render() {
        return (
            <div class="logo-skills">
              <img src ={Git}  className="logo" alt = "git"  width = "auto" height = "40"></img>
             <img src ={Html}  className="logo" alt = "html5"  width = "80" height = "auto"></img>
             <img src ={Css}  className="logo" alt = "css3"  width = "50" height = "auto"></img>
             <img src ={Sass}  className="logo" alt = "sass"  width = "60" height = "auto"></img>
             <img src ={Bootstrap}  className="logo" alt = "bootstrap"  width = "auto" height = "40"></img>
             <img src ={Js}  className="logo" alt = "Js"  width = "50" height = "auto"></img>
             <img src ={Npm}  className="logo" alt = "Npm"  width = "70" height = "auto"></img>
             <img src ={Php}  className="logo" alt = "Php"  width = "70" height = "auto"></img>
             <img src ={Mysql}  className="logo" alt = "MySql"  width = "80" height = "auto"></img>
             <img src ={Wp}  className="logo" alt = "wordpress"  width = "auto" height = "50"></img>
             <img src ={Figma}  className="logo" alt = "Figma"  width = "50" height = "auto"></img>
             <img src ={Trello}  className="logo" alt = "Trello"  width = "auto" height = "40"></img>
             <img src ={Node}  className="logo" alt = "Node"  width = "70" height = "auto"></img>
            </div>
        )
    }
}
export default Logoskills