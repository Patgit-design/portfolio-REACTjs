import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="education">My Education</h1>
<a class = "link-education" href = "https://becode.org"><Widecard title="BeCode.org" where="Charleroi - Belgium" from="Jan 2021" to="Present"/></a>
<a class = "link-education" href = "http://www.stluc-bruxelles-esa.be/"><Widecard title="Institut pour l'architecture Saint-Luc" where="Brussels - Belgium" from="2001" to="2004"/></a>
</div>
)
}
}
export default Education