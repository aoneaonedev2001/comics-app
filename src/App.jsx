import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Navbar from './component/Navbar';
import Test from './page/Test';
const App = () => {
  return (
    <>
     <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
    </Routes>
    
    </>
    
  )
}

export default App