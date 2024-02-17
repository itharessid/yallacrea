import React from 'react';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Creator from './Pages/creator/creator';
//import Admin from './Pages/Admin/admin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<Creator/>}/>
          <Route path='/dashboard' element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
