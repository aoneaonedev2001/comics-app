import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Navbar from './component/Navbar';
import Test from './page/Test';
import PredaterEp1 from './page/predater/PredaterEp1';
import PredaterEp2 from './page/predater/PredaterEp2';
import PredaterEp3 from './page/predater/PredaterEp3';
const App = () => {
  return (
    <>
     <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
        <Route path="/predater1" element={<PredaterEp1/>}></Route>
        <Route path="/predater2" element={<PredaterEp2/>}></Route>
        <Route path="/predater3" element={<PredaterEp3/>}></Route>
    </Routes>
    
    </>
    
  )
}

export default App