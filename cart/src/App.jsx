import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    
     <>
     <Cart/>
     </>
  )
}

export default App
