import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ formData, editData }) => {
    const [title, setTitle] = useState(editData ? editData.title : "")
    const [descriiption, setDescription] = useState(editData ? editData.descriiption : "")


    const navigate = useNavigate();


    const addData = (e) => {
        e.preventDefault();
        formData({ id: Date.now(), title, descriiption });
        navigate('/');
    }
    return (
        <>
            <div className="container">
                <form onSubmit={addData}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input value={title} onChange={e=> setTitle(e.target.value)}  className="form-control" />
                    </div>
                    <div className="mb-3">
                         <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                        <input value={descriiption} onChange={e=> setDescription(e.target.value)}  className="form-control" />
                    </div>
                    <button >{editData ? "Edit" : "Add"}</button>
                </form>

            </div>
        </>
    )
}

export default ProductForm