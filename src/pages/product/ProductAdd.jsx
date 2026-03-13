import { useDispatch } from "react-redux"
import ProductForm from "./ProductForm";
import { addProducts } from "../../tools/actions/productAction";


const ProductAdd = () => {


  const dispatch = useDispatch();
  return (
    <>


    <div className="container">
      <h3>Add Product</h3>
      <ProductForm formData={(fd)=> {dispatch(addProducts(fd))}} />
    </div>
    </>
  )
}

export default ProductAdd