import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import env from "react-dotenv";

const ItemList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`https://6657b1bb5c361705264599c7.mockapi.io/products/data`)
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  },[])

  function deleteProduct (id){
      axios.delete(`https://6657b1bb5c361705264599c7.mockapi.io/products/data/${id}`)
      .then((() => setProducts(products.filter(product => product.id !== id))))
      .catch(console.log("Error"))
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Product List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add Product</Link>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Promotion</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.promotion}</td>
              <td>
                <Link to={`/edit/${product.id}`} className="btn btn-warning mr-2">Edit</Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
