import React from 'react'
import Options from "./Options"
import { useQuiz } from '../contexts/QuizContext'

export default function Question() {
const {questions,index} = useQuiz()
const question = questions.at(index)
  return (
    <div>
   <Options question={question}/>
    </div>
  )
}
