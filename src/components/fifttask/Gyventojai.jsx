import React from 'react'
import { seaPlaners } from '../../info'

const Gyventojai = (color) => {
    let count = 0
  return (
    <div className='Gyventojai'>
        <table>
            <thead>
                <tr>
                <th scope='col'>{Object.keys(seaPlaners[0])[2]}:</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(seaPlaners).map((index,i)=>{
                if(seaPlaners[index].color===color.color.color){
                    ++count
                    return(<tr key={i}>
                            <th scope='col'>{Object.values(seaPlaners[index])[2]}</th>
                    </tr>)
                }
                })}
                {Object.keys(seaPlaners).map((index,i)=>{
                    if(count===0){
                    return(<tr key={i}>
                        <th scope='col'>{Object.values(seaPlaners[index])[2]}</th>
                   </tr>)
                }
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Gyventojai