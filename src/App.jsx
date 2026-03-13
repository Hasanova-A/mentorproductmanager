import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductList from './pages/product/productList'
import ProductAdd from './pages/product/ProductAdd'
import ProductEdit from './pages/product/ProductEdit'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
       <Route path='/product/list' element={<ProductList/>} />
        <Route path='/product/add' element={<ProductAdd/>} />
         <Route path='/product/edit/:id' element={<ProductEdit/>} />
    </Routes>
    </BrowserRouter>

   
    </>
  )
}

export default App