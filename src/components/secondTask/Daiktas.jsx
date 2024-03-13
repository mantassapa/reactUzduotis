import React from 'react'
import { seaPlaners } from '../../info'

const Daiktas = ({idLyg}) => {
    // console.log(Object.values(seaPlaners[0].id));
    // return(<div>{idLyg}</div>)
    if(idLyg===0){
        return (<div className='Daiktas'>
            {Object.keys(seaPlaners).map((index, i)=>{
            if(seaPlaners[index].id%2==0){
                return(<h3 key={i} style={{backgroundColor:seaPlaners[index].color}}>{seaPlaners[index].id}:{seaPlaners[index].name}</h3>)
            }
        })}
        </div>)
    }
    if(idLyg===1){
        return (<div className='Daiktas'>
            {Object.keys(seaPlaners).map((index, i)=>{
            if(seaPlaners[index].id%2!=0){
                return(<h3 key={i} style={{backgroundColor:seaPlaners[index].color}}>{seaPlaners[index].id}:{seaPlaners[index].name}</h3>)
            }
        })}
        </div>)
    }

}

export default Daiktas