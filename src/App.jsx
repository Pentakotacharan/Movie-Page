import React from 'react'
import Home from './kalki/home/Home'
import Backimg from './kalki/back/Backimg'
import Maincharacters from './kalki/maincharacter/Maincharacters'
import Heading from './kalki/heading/Heading'
import About from './kalki/about/About'
import Review from './kalki/review/Review'


const App = () => {
  return (
    <div>
      <Home/>
      <Backimg/>
      <Heading subtitle="About" title="Characters"/>  
      <Maincharacters/>
      <Heading subtitle="About" title="Movie"/>  
      <About/>
      <Heading subtitle="About" title="review"/>
      <Review/>
   
    </div>
  )
}

export default App