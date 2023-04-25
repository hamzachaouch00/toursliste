import React from 'react'
import Post from './Post'
import tours from '../Const/Data'
import Carsl from './Carsl'

const Home = () => {
  return (
    <div>
    <Carsl/>
    <Post Data={tours}/>
    </div>
  )
}

export default Home
