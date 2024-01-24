import React, { useState } from "react";
import useFetch from "./UseFetch";
import { Link } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

import { useSelector} from "react-redux";


function Product() {
  const [data, fetchData] = useFetch("http://localhost:8080/product");
  const userRole = useSelector((state) => state.authentication.role);

  const getRandomImage = () => {
    // Replace 'placeholder' with your base URL for random images
    const baseUrl = 'https://source.unsplash.com/'; 
    const imageSize = '800x600'; // Set your preferred image size

     // Generate a random image URL
    return `${baseUrl}${imageSize}/?product=${Math.random()}`;
  };

  const getProductImage = (product) => {
    // Use getRandomImage() if product.images is not available
    return product.images && product.images.length > 0
      ? product.images[0] // Use the first image URL
      : getRandomImage();
  };
  
  return (
    <div className="container mt-3 h-100">
      <h2 className="mb-4">Product List</h2>
      {userRole === "ROLE_ADMIN" && (
      <Link to={`/product/addProduct`}>
        <button type="submit" className="btn btn-primary mb-3">
          Add Product
        </button>
      </Link>
      )}

      <div className="row">
        {data &&
          data.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="embed-responsive embed-responsive-4by3">
                  <img
                    src={getProductImage(product)}
                    alt={product.name}
                    className="card-img-top embed-responsive-item"
                    style={{height: '20em'}}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title pb-2" style={{ fontSize: '18px' }}>{product.name}</h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Product Description</th>
                        <td>:</td>
                        <td>{product.description}</td>
                      </tr>
                      {product.productPrices && product.productPrices.map((price) => (
                        <React.Fragment key={price.id}>
                          <tr>
                            <th scope="row">Product Price</th>
                            <td>:</td>
                            <td>{price.price}</td>
                          </tr>
                          <tr>
                            <th scope="row">Product Stock</th>
                            <td>:</td>
                            <td>{price.stock}</td>
                          </tr>
                          <tr>
                            <th scope="row">Store Name</th>
                            <td>:</td>
                            <td>{price.store.name}</td>
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
