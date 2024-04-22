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
import Dashboard from './pages/Dashboard'
import FarmerRequest from './pages/FarmerRequest'
import ShopownerRequest from './pages/ShopownerRequest'


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
        <Route index path='/lists/show' element={<ShowListings />} />
        <Route index path='/lists/create' element={<CreateList />} />
        <Route index path='/lists/details/:id' element={<ShowList />} />
        <Route index path='/lists/edit/:id' element={<EditList />} />
        <Route index path='/lists/delete/:id' element={<DeleteList />} />
        <Route index path='/dashboard' element={<Dashboard />} />
        <Route index path='/farmerRequest' element={<FarmerRequest />} />
        <Route index path='/shopRequest' element={<ShopownerRequest />} />

      </Routes>
    </div>
  )
}

export default App;
