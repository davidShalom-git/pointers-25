import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Technical from './Component/Technical';
import Non_Tech from './Component/Non_Tech';
import PPT from './Events/PPT';
import Code from './Events/Code';
import Web from './Events/Web';
import Quiz from './Events/Quiz';
import IPL from './Events/IPL';
import ESports from './Events/ESports';
import Story from './Events/Story';
import Google from './Events/Google';



const App = () => {
  return (
    <>
    
    <Router>
      <Routes>
    
        <Route path='/' element={<Home />} />
        <Route path='/technical' element={<Technical />} />
        <Route path='/nont' element={<Non_Tech />} />
        <Route path='/PPT' element={<PPT />} />
        <Route path='/code' element={<Code />} />
        <Route path='/web' element={<Web />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/ipl' element={<IPL />} />
        <Route path='/esports' element={<ESports />} />
        <Route path='/story' element={<Story />} />
        <Route path='/google' element={<Google />} />
        <Route path='/google' element={<Google />} />
      </Routes>
    </Router>
    
    
    </>
  )
}

export default App
