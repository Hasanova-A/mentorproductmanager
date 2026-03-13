import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductForm from './ProductForm';
import { useParams } from 'react-router-dom';
import { editProducts } from '../../tools/actions/productAction';

const ProductEdit = () => {


  const {id} = useParams();
  const data = useSelector(p=> p.data)
  const findData = data.find(p=> p.id == id)
  const dispatch = useDispatch();
  return (
    <>


    <div className="container">
      <h3>Product Edit</h3>
      <ProductForm editData={findData} formData={(fd)=> {dispatch(editProducts(findData.id, id))}} />
    </div>
    </>
  )
}

export default ProductEdit