import React from 'react'
import { useState } from 'react'

function First() {

    const [count, setCount] = useState(0);

  return (
    <div>
         <button style={{backgroundColor:"yellowgreen"}} onClick={()=>{if(count > 0){setCount(count - 1 )}}} disabled={count ===0}>Substraction</button>
      <h1>{count}</h1>
    <button style={{backgroundColor:"yellowgreen"}} onClick={() => {if(count < 10){setCount(count + 1)}}} disabled={count === 10}>Addition</button>  

    </div>
  )
}

export default First;