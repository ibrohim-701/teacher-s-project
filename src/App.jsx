import React from 'react'

import {Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Contect from './pages/Contect'
import About from './pages/About'
import Signup from './pages/Signup'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Login from './pages/Login'



const App = () => {
  return (
    <div>
      <Header/>
      

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contect/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      
    </Routes>
      

      <Footer/>

      
    </div>
  )
}

export default App