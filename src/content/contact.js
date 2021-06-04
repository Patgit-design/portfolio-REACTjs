import React, { Component } from 'react';
import Social from '../components/Social';
import contactphone from '../img/phone.jpg';
class Contact extends Component {
render() {
return (
 
<div className="condiv-contact">
    <img src={contactphone} className="contact-phone" alt="contact" width="" height="" ></img>
<h1 className="subtopic">Contact Me</h1>
<h3 className="email">Email  :   patricia.corduant@gmail.com</h3>
<Social />
</div>

)
}
}
export default Contact