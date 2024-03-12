import React from 'react'
import { seaPlaners } from '../../info'

const Valtis = () => {
  return (
    <div>
        <h2>valtis:</h2>
        {Object.keys(seaPlaners).map((index, i)=>{
            if(seaPlaners[index].type==="man"){
                return(<p key={i}>{seaPlaners[index].name}</p>)
            }
        })}
    </div>
  )
}

export default Valtis