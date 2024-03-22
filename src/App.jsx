import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import Hero from './components/Hero'
import Images from './components/Images'
import News from './components/News'
import Footer from './components/Footer'


function App() {
  return (
 <div className='w-full'>
  <Navbar />
  <Landing />
  <Work />
  <Hero />
  <Images />
  <News />
  <Footer />
 </div>
  )
}

export default App