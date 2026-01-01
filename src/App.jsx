import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import Navbar from './components/layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import Footer from './components/layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
