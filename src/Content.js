import React,{ useState } from 'react'
export function Content(){
       const [num,setNum]=useState(0)
       return(
        <div>
            <center>
        <h1>Count : {num}</h1>
        <button onClick={()=>{setNum(num+1)}}>increment</button>
        <button onClick={()=>{setNum(num-1)}}>decrement</button>
        </center>
        </div>
       );
}























































