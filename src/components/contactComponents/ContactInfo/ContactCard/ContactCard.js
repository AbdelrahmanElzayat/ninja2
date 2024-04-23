import React from 'react'
import './ContactCard.css'
const ContactCard = (props) => {
  return (
    <div className="ContactCard">
      <div className="ContactCard_content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="ContactCard_icon">
        {props.children}
      </div>
    </div>
  );
}

export default ContactCard