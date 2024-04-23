import React from 'react'

const QuestionCardDark = (props) => {
  return (
<div className='QuestionCardDark'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div> 
     )
}

export default QuestionCardDark