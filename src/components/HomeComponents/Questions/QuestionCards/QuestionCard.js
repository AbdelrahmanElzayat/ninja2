import React from 'react'
import './QuestionCard.css'

const QuestionCard = (props) => {
  return (
    <div className='QuestionCard'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  )
}

export default QuestionCard