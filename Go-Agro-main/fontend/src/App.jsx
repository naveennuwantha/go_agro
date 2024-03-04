import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'




const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route index path='/about' element={<About/>} />
        <Route index path='/signup' element={<SignUp/>} />
        <Route index path='/login' element={<Login/>} />
     
    

      </Routes>
    </div>
  )
}

export default App