import { BrowserRouter } from 'react-router-dom'
import './App.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
function App() {

  useEffect(() => {
     AOS.init()
  }, [])
  
  return (
      <BrowserRouter>
       <h1>Hello</h1>
      </BrowserRouter>
  )

}

export default App
