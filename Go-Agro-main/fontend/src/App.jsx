import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Complaint } from './pages/Complaint'
import ShowAll from './pages/ShowAll'
import CreateReview from './pages/CreateReview'
import ShowReview from './pages/ShowReview'
import EditReview from './pages/EditReview'
import DeleteReview from './pages/DeleteReview'




const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route index path='/about' element={<About />} />
        <Route index path='/signup' element={<SignUp />} />
        <Route index path='/login' element={<Login />} />
        <Route index path='/compaint' element={<Complaint />} />
        <Route path='/reviews/show' element={<ShowAll />} />
        <Route path='/reviews/create' element={<CreateReview />} />
        <Route path='/reviews/details/:id' element={<ShowReview />} />
        <Route path='/reviews/edit/:id' element={<EditReview />} />
        <Route path='/reviews/delete/:id' element={<DeleteReview />} />


      </Routes>
    </div>
  )
}

export default App
