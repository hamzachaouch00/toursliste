import React from 'react'
import Crd from './Crd'

const Post = ({Data}) => {
  return (
    <div className='cards'>
      {Data.map((element)=><Crd element={element}/>)}
    </div>
  )
}

export default Post
