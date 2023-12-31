import React from 'react'
import { useQuiz } from '../contexts/QuizContext'

export default function FinishedScreen() {
 const {dispatch,points,maxPossiblePoints,highScore} = useQuiz()
  const percentage = points / maxPossiblePoints * 100
  return (
    <>
    <p className='result'>You scored <strong>{points}</strong> out of {maxPossiblePoints}({Math.ceil(percentage)}%)</p>
    <p className='highscore'>highScore:{highScore}</p>

    <button className='btn btn-ui'
    onClick={()=>dispatch({type:"restart"})}>
    Restart Quiz
    </button>
    </>
  )
}
