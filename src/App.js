import React from 'react'
import LandingPage from './Components/LandingPage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
    <Routes>
<Route path='/landingPage' element={<LandingPage />} />
    </Routes>
      
    </Router>
  )
}

export default App