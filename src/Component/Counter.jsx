// import React from "react";

import { useEffect, useState } from "react"

export default function Counter (){
    const [num,setNum] = useState(5);

    useEffect(()=>{
        console.log("useEffect")
    },[num])
    return (
        <div className="App">
            <h1>Counter {num}</h1>
            <button onClick={()=>setNum(num+5)}>Increment</button>
            <button onClick={()=>setNum(num-5)}>Decrement</button>
        </div>
    )
};
