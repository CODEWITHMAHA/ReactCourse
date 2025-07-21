import React from 'react'

const InterviewOne = () => {
    const students = [];
  return (
    <>
      <h1>Interview Question</h1>
         
         <pre>
            <p>students.length && "No Students Found"</p>
            <p>Number of Students:students.length</p>
            <p>What will be the result?</p>
            <p style={{color:'red'}}>Ans:</p>
         </pre>

      <p>{students.length && "No Students Found"}</p>
      <p>Number of Students:{students.length}</p>

      {/*React does not render `false` , `null` , `undefined` or `NaN` in the DOM.
          These Values , when used in jsx, will result in nothing being displayed.
          However, `0` and empty Strings (`""`) are exceptions.
      */}
      {/* 1. `0` is rendered in the DOM because it is considered a valid react node.
              This means that if `0` is the result it will appear in your UI.
          2.`Empty Strings ("")` are also considered vlaid react node and are rendered as well.
      */}
          <h1>Solutions</h1>
         <h3>1.****How to get this "No Students Found"****</h3>
         <p><span style={{color:'red'}}>Ans: </span>students.length === 0  && "No Students Found"</p>
         <p>{students.length === 0  && "No Students Found"}</p>
         <p>Number of Students:{students.length}</p>
        

         <h3>2.****How to get this "No Students Found"****</h3>
         <p><span style={{color:'red'}}>Ans: </span>!students.length  && "No Students Found"</p>
         <p>{!students.length  && "No Students Found"}</p>
         <p>Number of Students:{students.length}</p>


         <h3>3.****How to get this "No Students Found"****</h3>
         <p><span style={{color:'red'}}>Ans: </span>Boolean(!students.length)  && "No Students Found"</p>
         <p>{Boolean(!students.length) && "No Students Found"}</p>
         <p>Number of Students:{students.length}</p>

    </>
  )
}

export default InterviewOne
