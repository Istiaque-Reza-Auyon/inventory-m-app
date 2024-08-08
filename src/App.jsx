import { useState } from 'react'
import './App.css'
import DenseAppBar from './components/AppBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DenseAppBar/>
    </>
  )
}

export default App
