import React from 'react'

export default function FinishedScreen({dispatch,points,maxPossiblePoints,highScore}) {
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
