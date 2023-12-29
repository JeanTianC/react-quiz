import React from 'react'
import Options from "./Options"

export default function Question({question,dispatch,answer}) {

  return (
    <div>
   <Options question={question} dispatch={dispatch} answer={answer}/>
    </div>
  )
}
