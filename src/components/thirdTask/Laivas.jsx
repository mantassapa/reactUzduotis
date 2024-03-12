import React from 'react'
import { seaPlaners } from '../../info'

const Laivas = () => {
  return (
    <div>
        <h2>Laivas:</h2>
        {Object.keys(seaPlaners).map((index, i)=>{
            if(seaPlaners[index].type==="car"){
                return(<p key={i}>{seaPlaners[index].name}</p>)
            }
        })}
    </div>
  )
}

export default Laivas