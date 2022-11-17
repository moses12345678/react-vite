import React from "react"

const Post=(props)=>{
    return <li onClick={()=>{alert("cool i kown react")}}>{props.name} you are the best</li>
}
const ListPlayer =()=>{
    const players = ["moussa","karim","adama","rene","bakar"]

    return (
        <div>
            <h2>this is the list of a player</h2>
            <ul>
                {players.map((player)=><Post name={player}/>)}
            </ul>
        </div>)
}
export default ListPlayer;
