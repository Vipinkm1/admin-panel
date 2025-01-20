import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import About from './Components/Pages/About';
import Dashboard from './Components/Pages/Dashboard';
import Home from './Components/Layout/Home';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Home/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/about' element={<About/>}/>
        </Route>
   
      </Routes>
     </BrowserRouter>
     </>
 
  )
}

export default App
