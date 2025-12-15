import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Home from './Pages/Home'; 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="App">
        <Routes>
        
          <Route path="/" element={<Home />} /> 
          
          
          {/* <Route path="/signup" element={<SignupPage />} />   */}


          {/* <Route path="/login" element={<LoginPage />} />  */}
         
         {/* <Route path="/dashboard" element={<Dashboard />} /> */}

         {/* <Route path="/AdminDashboard" element={<AdminDashboard />} /> organization */}

        </Routes>
      </div>
    
    </>
  )
}

export default App
