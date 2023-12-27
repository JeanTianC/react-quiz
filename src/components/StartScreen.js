import React from 'react'

export default function StartScreen({numQuestions,dispatch}) {
  return (
    <div className='start' >
     <h2>Welcome to The React Quiz!</h2>
     <h3>{numQuestions} questions to test your react mastery</h3>
     
     <div>
     <button 
     className='btn btn-ui'
     onClick={()=>dispatch({type:"startBeginner"})}
     >Beginner level</button>

     <button 
     className='btn btn-ui'
     onClick={()=>dispatch({type:"start"})}
     >All level</button>
   
      <button 
      className='btn btn-ui'
      onClick={()=>dispatch({type:"startMastery"})}
      >Mastery level</button>
     </div>
</div>
  )
}
