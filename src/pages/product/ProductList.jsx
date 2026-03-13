import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducts, getProducts } from '../../tools/actions/productAction'
import { Link } from 'react-router-dom'





const ProductList = () => {


    const dispatch = useDispatch()


    const products = useSelector(state => state.products)


    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>

            <div className="container">
                <Link to="/product/add">Add</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                            <th scope="col">description</th>
                            <th scope="col">delete</th>
                            <th scope="col">edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, count) => (
                            <tr key={count}>
                                <th scope="row">{count +1}</th>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td><button onClick={()=> {dispatch(deleteProducts(item.id))}}>X</button></td>
                                <td><Link to={`/prouct/edit/${item.id}`}>Edit</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList