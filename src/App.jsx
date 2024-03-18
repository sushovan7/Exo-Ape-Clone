import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Hero from './components/Hero'

function App() {
  return (
 <div className='w-full'>
  <Navbar />
  <Landing />
  <Work />
  <Hero />
 </div>
  )
}

export default App