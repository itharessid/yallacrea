import { useState } from 'react';
import About from './pages/About/apropos';
import Home from'./pages/Home/acceuil';
import Contact from './pages/Contact/contac';
import Headers from './Components/Headers';
import  Footer from './Components/footer';


import{BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   
   <>
  <Headers/>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contac" element={<Contact/>}></Route>
   </Routes>
   </BrowserRouter>
   <Footer/>
   </>
     
  
  )
}

export default App
