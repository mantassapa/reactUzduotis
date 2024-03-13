import React from 'react'
import { seaPlaners } from '../../info'
import Laivas from './Laivas'
import Sala from './Sala'
import Valtis from './Valtis'

const Jura = () => {
  return (
    <div className='Jura'>
        <div>
        <h2>Jura:</h2>
        {Object.keys(seaPlaners).map((index, i)=>{
            if(seaPlaners[index].type==="fish"){
                return(<p key={i} style={{backgroundColor:seaPlaners[index].color}}>{seaPlaners[index].name}</p>)
            }
        })}
        </div>
        <Laivas/>
        <Sala/>
        <Valtis/>
    </div>
  )
}

export default Jura