import { useState } from 'react'
import './App.css'
import DenseAppBar from './components/AppBar'
import AddProductsForm from './components/AddProductsForm'
import ProductTable from './components/ProductTable'
import Box from '@mui/material/Box'
import Shelf from './components/Shelf'

function App() {
  return (
    <>

      <DenseAppBar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginRight: "1vw" }}>
          <h2>Add Products</h2>
          <AddProductsForm />
          <h2>Products</h2>
          <ProductTable />
        </Box>
        <Box>
          <Shelf />
        </Box>
      </Box>
    </>
  )
}

export default App
