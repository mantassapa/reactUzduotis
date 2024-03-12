import React from 'react'
import Gyventojai from './Gyventojai'

const Pasaulis = (color) => {
    // console.log(color.color);
  return (
    <div className='Pasaulis'>Pasaulis:
        <Gyventojai color={color}/>
    </div>
  )
}

export default Pasaulis