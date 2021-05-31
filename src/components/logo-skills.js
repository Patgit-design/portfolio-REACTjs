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
              <img src ={Git}  className="git" alt = "git"  width = "auto" height = "40"></img>
             <img src ={Html}  className="html5" alt = "html5"  width = "80" height = "auto"></img>
             <img src ={Css}  className="css3" alt = "css3"  width = "50" height = "auto"></img>
             <img src ={Sass}  className="sass" alt = "sass"  width = "60" height = "auto"></img>
             <img src ={Bootstrap}  className="Bootstrap" alt = "bootstrap"  width = "auto" height = "40"></img>
             <img src ={Js}  className="Js" alt = "Js"  width = "50" height = "auto"></img>
             <img src ={Npm}  className="Npm" alt = "Npm"  width = "70" height = "auto"></img>
             <img src ={Php}  className="Php" alt = "Php"  width = "70" height = "auto"></img>
             <img src ={Mysql}  className="MySql" alt = "MySql"  width = "80" height = "auto"></img>
             <img src ={Wp}  className="wordpress" alt = "wordpress"  width = "auto" height = "50"></img>
             <img src ={Figma}  className="Figma" alt = "Figma"  width = "50" height = "auto"></img>
             <img src ={Trello}  className="Trello" alt = "Trello"  width = "auto" height = "40"></img>
             <img src ={Node}  className="Node" alt = "Node"  width = "70" height = "auto"></img>
            </div>
        )
    }
}
export default Logoskills