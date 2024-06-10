import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';

const AddProduct = () => {

  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [promotion, setPromotion] = useState("")
  const navigate = useNavigate()

  function handleSubmit(event){
    event.preventDefault()
    const newProduct = {title, price, promotion}
    axios.post(`https://6657b1bb5c361705264599c7.mockapi.io/products/data`, newProduct)
    .then(() => {
      navigate('/')
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Promotion</label>
          <input
            type="text"
            className="form-control"
            value={promotion}
            onChange={(event) => setPromotion(event.target.value)}
          />
        </div>
        <button type="submit"  className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
