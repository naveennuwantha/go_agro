import { Route, Routes } from 'react-router-dom'
import { NavBar } from './components/navbar/NavBar'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { SignUp } from './pages/SignUp'
import { Login } from './pages/Login'
import { Complaint } from './pages/Complaint'
import ShowListings from './pages/ShowListings'
import CreateList from './pages/CreateList'
import ShowList from './pages/ShowList'
import EditList from './pages/EditList'
import DeleteList from './pages/DeleteList'

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
        <Route index path='/listings/show' element={<ShowListings />} />
        <Route index path='/listings/create' element={<CreateList />} />
        <Route index path='/listings/details/:id' element={<ShowList />} />
        <Route index path='/listings/edit/:id' element={<EditList />} />
        <Route index path='/listings/delete/:id' element={<DeleteList />} />

      </Routes>
    </div>
  )
}

export default App
