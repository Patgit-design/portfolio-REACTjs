import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
render() {
return (
<div className="condiv">
<h1 className="subtopic">My Education</h1>
<Widecard title="BeCode.org" where="Charleroi - Belgium" from="Jan 2021" to="Present"/>
<Widecard title="Institut pour l'architecure Saint-Luc" where="Brussels - Belgium" from="2001" to="2004"/>
</div>
)
}
}
export default Education