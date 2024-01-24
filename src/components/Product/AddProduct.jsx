import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function AddProduct() {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    productName: "",
    description: "",
    price: "",
    stock: "",
    storeId: "" // Change storeId to an empty string
  });
  
  
  const [storeOptions, setStoreOptions] = useState([]);

  const [errors, setErrors] = useState({
    productName: "",
    description: "",
    price: "",
    stock: "",
    storeId: ""
  });

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const response = await fetch("http://localhost:8080/store");
        const stores = await response.json();
        setStoreOptions(stores.map(store => ({ id: store.id, name: store.name })));
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    fetchStores();
  }, []);

  const validateForm = () => {
    const validationErrors = {
      productName: newProduct.productName.trim() === "" ? "Product Name is required" : "",
      description: newProduct.description.trim() === "" ? "Description is required" : "",
      price: newProduct.price === "" ? "Price is required" : (isNaN(newProduct.price) ? "Price must be a number" : ""),
      stock: newProduct.stock === "" ? "Stock is required" : (isNaN(newProduct.stock) ? "Stock must be a number" : ""),
      storeId: newProduct.storeId.id === "" ? "Store ID is required" : ""
    };

    setErrors(validationErrors);

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.name === "storeId" ? { id: e.target.value } : e.target.value,
    });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      Swal.fire('Error!', 'Please fill in all the required fields correctly.', 'error');
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
        
        // body: JSON.stringify({
        //   productName: newProduct.productName,
        //   description: newProduct.description,
        //   price: newProduct.price,
        //   stock: newProduct.stock,
        //   storeId: {
        //     id: newProduct.storeId.id
        //   }
        // }),
      });
  
      if (response.status === 201) {
        Swal.fire('Success!', 'Product added successfully!', 'success').then(() => {
          navigate("/product");
        });
      } else {
        console.log("Request Payload:", JSON.stringify(newProduct));
  
        console.error("Failed to add product:", response.status, response.statusText);
        const responseBody = await response.text();
        console.error("Response body:", responseBody);
  
        console.error("Failed to add product:", response.statusText);
        Swal.fire('Error!', 'Failed to add product. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire('Error!', 'An error occurred. Please try again.', 'error');
    }
  };
  
  return (
    <div className="container mt-5 h-100 text-white" style={{ paddingBottom: '10em' }}>
      <Link to={`/product`}>
        <button type="submit" className="btn btn-secondary mb-3">
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
        </button>
      </Link>

      <h2 className="mb-4" style={{ marginTop: '1.5em' }}>Form Add Product</h2>

      <form onSubmit={handleAddProduct}>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.productName && 'is-invalid'}`}
            id="productName"
            name="productName"
            value={newProduct.productName}
            onChange={handleInputChange}
          />
          {errors.productName && <div className="invalid-feedback">{errors.productName}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
            type="text"
            className={`form-control ${errors.description && 'is-invalid'}`}
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleInputChange}
          />
          {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price:
          </label>
          <input
            type="number"
            className={`form-control ${errors.price && 'is-invalid'}`}
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          {errors.price && <div className="invalid-feedback">{errors.price}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock:
          </label>
          <input
            type="number"
            className={`form-control ${errors.stock && 'is-invalid'}`}
            id="stock"
            name="stock"
            value={newProduct.stock}
            onChange={handleInputChange}
          />
          {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="storeId" className="form-label">
            Store ID:
          </label>
          <select
            className={`form-select ${errors.storeId && 'is-invalid'}`}
            id="storeId"
            name="storeId"
            value={newProduct.storeId.id}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select Store ID</option>
            {storeOptions.map(store => (
              <option key={store.id} value={store.id}>
                {store.name}
              </option>
            ))}
          </select>
          {errors.storeId && <div className="invalid-feedback">{errors.storeId}</div>}
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
