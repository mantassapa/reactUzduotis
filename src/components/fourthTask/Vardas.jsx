import React from 'react'
import { seaPlaners } from '../../info'


const Vardas = () => {
    seaPlaners.sort(compareByName);
    let colid = 1
  return (
    <div className='Tipas'>Vardas:
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
                            return(<th id={`fouth_Third${colid++}`} scope='col' key={j}>{el}</th>)
                        })}
                   </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
}
function compareByName(a, b) {
    return a.name.localeCompare(b.name);
}

export default Vardas