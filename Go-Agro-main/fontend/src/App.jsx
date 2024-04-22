import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import CreateTrack from "./pages/CreateTrack";
import ShowTrack from "./pages/ShowTrack";
import DeleteTrack from "./pages/DeleteTrack";
import EditTrack from "./pages/EditTrack";



const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/tracks/details/:id" element={<ShowTrack />} />
        <Route path="/tracks/edit/:id" element={<EditTrack />} />
        <Route path="/tracks/create" element={<CreateTrack />} />
        <Route path="/tracks/delete/:id" element={<DeleteTrack />} />
    </Routes>
  )
}

export default App
