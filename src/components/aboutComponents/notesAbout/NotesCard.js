import React from 'react'
import './NotesAbout.css'
const NotesCard = (props) => {
  return (
    <div className='NotesCard'>
            {props.children}
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
    </div>
  )
}

export default NotesCard