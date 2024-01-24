import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function AddOrder() {
  const navigate = useNavigate();
  const [newOrder, setNewOrder] = useState({
    customerId: "",
    orderDetails: [
      {
        productPriceId: "",
        quantity: "" 
      }
    ]
  });

  const [customerOptions, setCustomerOptions] = useState([]);
  const [productOptions, setProductOptions] = useState([]);

  const [errors, setErrors] = useState({
    customerId: "",
    productPriceId: "",  
    quantity: ""
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("http://localhost:8080/customer");
        const customers = await response.json();
        setCustomerOptions(customers.map(customer => ({ 
          id: customer.id, 
          name: customer.name 
        })));
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/product");
        const products = await response.json();
    
        setProductOptions(products.map(product => ({
          id: product.id,
          name: product.name,
          productPrices: product.productPrices,  
        })));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCustomers();
    fetchProducts();
  }, []);

  const validateForm = () => {
    const validationErrors = {
      customerId: newOrder.customerId === "" ? "Customer ID is required" : "",
      productPriceId: newOrder.orderDetails[0].productPriceId === "" ? "Product Price ID is required" : "",
      quantity: newOrder.orderDetails[0].quantity <= 0 ? "Quantity must be greater than 0" : ""
    };

    setErrors(validationErrors);

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleInputChange = (e) => {
    setNewOrder({
      ...newOrder,
      [e.target.name]: e.target.value
    });
  };

  const handleProductDetailChange = (e) => {
    setNewOrder({
      ...newOrder,
      orderDetails: [
        {
          ...newOrder.orderDetails[0],
          [e.target.name]: e.target.name === "productPriceId" ? e.target.value : e.target.value,
        },
      ],
    });
  };

  const handleAddOrder = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire('Error!', 'Please fill in all the required fields correctly.', 'error');
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newOrder),
      });

      if (response.status === 201) {
        Swal.fire('Success!', 'Order added successfully!', 'success').then(() => {
          navigate("/product");
        });
      } else {
        console.log("Request Payload:", JSON.stringify(newOrder));
        console.error("Failed to add order:", response.status, response.statusText);
        const responseBody = await response.text();
        console.error("Response body:", responseBody);
        Swal.fire('Error!', 'Failed to add order. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error adding order:", error);
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

      <h2 className="mb-4" style={{ marginTop: '1.5em' }}>Form Add Order</h2>

      <form onSubmit={handleAddOrder}>
        <div className="mb-3 text-black">
          <label htmlFor="customerId" className="form-label">
            Customer ID:
          </label>
          <select
            className={`form-select text-black ${errors.customerId && 'is-invalid'}`}
            id="customerId"
            name="customerId"
            value={newOrder.customerId}
            onChange={handleInputChange}
            style={{ color: 'black' }}
          >
            <option value="" disabled>Select Customer ID</option>
            {customerOptions.map(customer => (
              <option key={customer.id} style={{ color: 'black' }} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
          {errors.customerId && <div className="invalid-feedback">{errors.customerId}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="productPriceId" className="form-label">
            Product Price ID:
          </label>
          <select
            className={`form-select ${errors.productPriceId && 'is-invalid'}`}
            id="productPriceId"
            name="productPriceId"
            value={newOrder.orderDetails[0].productPriceId}
            onChange={handleProductDetailChange}
          >
            <option value="" disabled>Select Product Price ID</option>
            {productOptions.map(product => (
              product.productPrices.map(productPrice => (
                <option key={productPrice.id} value={productPrice.id}>
                  {product.name} - {productPrice.price} IDR 
                </option>
              ))
            ))}
          </select>
          {errors.productPriceId && <div className="invalid-feedback">{errors.productPriceId}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            className={`form-control ${errors.quantity && 'is-invalid'}`}
            id="quantity"
            name="quantity"
            value={newOrder.orderDetails[0].quantity}
            onChange={handleProductDetailChange}
          />
          {errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Add Order
        </button>
      </form>
    </div>
  );
}

export default AddOrder;
