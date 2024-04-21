
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateTrack from "./pages/CreateTrack";
import Stepper from "./pages/Stepper";
import ShowTrack from "./pages/ShowTrack";
import DeleteTrack from "./pages/DeleteTrack";
import EditTrack from "./pages/EditTrack";
import { StatusProvider } from './pages/StepperContext';

const App = () => {
  return (
    <StatusProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracks/details/:id" element={<ShowTrack />} />
        <Route path="/tracks/edit/:id" element={<EditTrack />} />
        <Route path="/tracks/stepper/:id" element={<Stepper />} />
        <Route path="/tracks/create" element={<CreateTrack />} />
        <Route path="/tracks/delete/:id" element={<DeleteTrack />} />
      </Routes>
    </StatusProvider>
  );
};

export default App;
