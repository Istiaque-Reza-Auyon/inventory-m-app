import { useState } from 'react'
import './App.css'
import DenseAppBar from './components/AppBar'
import AddProductsForm from './components/AddProductsForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DenseAppBar/>
      <h1> Add Products</h1>
      <AddProductsForm/>
    </>
  )
}

export default App
