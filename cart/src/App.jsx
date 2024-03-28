import { useState } from 'react'
import './App.css'
import Cart from './Cart'
import Footer from "./Footer"


function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     <Cart/>
     <Footer/>
     </>
  )
}

export default App
