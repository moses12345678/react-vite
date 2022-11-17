import { useState } from "react";

const Calcul=()=>{
    const [count,setcount] = useState(0)
    
   

    return <div>
        <h2>
            add two number
        </h2>
        <button onClick={()=>{
            setcount((count)=>count+1)
            if(count>12){
                alert("its full")
            }
            }}>
    click me</button>
        <p>{count}</p>
    </div>
}

export default Calcul;