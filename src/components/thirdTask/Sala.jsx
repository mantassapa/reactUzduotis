import React from 'react'
import { seaPlaners } from '../../info'

const Sala = () => {
  return (
    <div>
        <h2>Sala:</h2>
        {Object.keys(seaPlaners).map((index, i)=>{
            if(seaPlaners[index].type==="animal"){
                return(<p key={i}>{seaPlaners[index].name}</p>)
            }
        })}
    </div>
  )
}

export default Sala