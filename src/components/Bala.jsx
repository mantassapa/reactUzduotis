import React from 'react'
import { seaPlaners } from '../info'
import { object } from 'prop-types';

const Bala = () => {
    // console.log(seaPlaners[0].id);
    // console.log(seaPlaners);
    // console.log(seaPlaners[0]);
    // console.log(Object.keys(seaPlaners));
    // console.log(Object.values(seaPlaners));


  return (
  <div className='Bala'>
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
                   return(<tr key={i}>
                        {Object.values(seaPlaners[index]).map((el,j)=>{
                            return(<th scope='col' key={j} style={{backgroundColor:seaPlaners[index].color}}>{el}</th>)
                        })}
                   </tr>)
                })}
            </tbody>
        </table>
    </div>
  )
  
}

export default Bala