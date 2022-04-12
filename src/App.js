import React from 'react'
// css
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
// library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// components
import Navbar from './components/Navbar/Navbar'
import CardDetails from './components/Card/CardDetails'
// pages
import Home from './Pages/home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

export default App
