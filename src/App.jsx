import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Navbar from './component/Navbar';
import Test from './page/Test';
import PredaterEp1 from './page/predater/PredaterEp1';
import PredaterEp2 from './page/predater/PredaterEp2';
import PredaterEp3 from './page/predater/PredaterEp3';
import GodzillaEp1 from './page/godzilla/GodzillaEp1';
import GodzillaEp2 from './page/godzilla/GodzillaEp2';
import GodzillaEp3 from './page/godzilla/GodzillaEp3';
import SpidermanEp1 from './page/spiderman/SpidermanEp1';
import SpidermanEp2 from './page/spiderman/SpidermanEp2';


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
        
        <Route path="/godzilla1" element={<GodzillaEp1/>}></Route>
        <Route path="/godzilla2" element={<GodzillaEp2/>}></Route>
        <Route path="/godzilla3" element={<GodzillaEp3/>}></Route>

        <Route path="/spiderman1" element={<SpidermanEp1/>}></Route>
        <Route path="/spiderman2" element={<SpidermanEp2/>}></Route>
        
    </Routes>
    
    </>
    
  )
}

export default App