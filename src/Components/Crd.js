import React from 'react'
import Delete from './Delete'
import Edit from './Edit'

const Crd = ({element}) => {
  return (
    <div className='carde'>
      <img src={element.image} alt='404'/>
      <div>
      <h4>{element.name}</h4>
      <p>{element.info}</p>
      <p>{element.price} $</p>
      <div className='cardbt'>
      <Delete/>
      <Edit element={element}/>
      </div>
    </div>
    </div>
    
  )
}

export default Crd
