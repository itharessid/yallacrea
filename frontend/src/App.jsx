import { useState } from 'react';
import About from './pages/About/apropos.jsx';
import Home from './pages/Home/acceuil';
import Contact from './pages/Contact/contac';
import Formation from './pages/Formation/formation';
import Createur  from './pages/Createur/createur';
import Headers from './Components/Headers';
import Footer from './Components/footer';
import Sidbar from './pages/Admin/sidbar/Adminsidbar';
import Dashbord from './pages/Admin/dashbord';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/createur" element ={<Createur/>} />
        <Route path="/formation" element={<Formation/>} />
        <Route path="/sidbar" element={<Sidbar />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
