import React from 'react'
import { seaPlaners } from '../../info'



const Tipas = () => {
    seaPlaners.sort(compareByName);
    let colid = 1
  return (
    <div className='Tipas'>Tipas:
        <table>
            <thead>
                <tr>
                {Object.keys(seaPlaners[0]).map((el, i)=>{
                    return(<th scope='col' key={i}>{el}:</th>)
                })}
                </tr>
            </thead>
            <tbody>
                {Object.keys(seaPlaners).map((index,i)=>{
                if(colid == 5) {
                    colid = 1
                  }
                   return(<tr key={i}>
                        {Object.values(seaPlaners[index]).map((el,j)=>{
                            return(<th id={`fouth_second${colid++}`} scope='col' key={j} style={{backgroundColor:seaPlaners[index].color}}>{el}</th>)
                        })}
                   </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}
function compareByName(a, b) {
    return a.type.localeCompare(b.type);
}

export default Tipas