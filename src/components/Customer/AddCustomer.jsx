import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function AddCustomer() {
  const navigate = useNavigate();
  const [newData, setNewData] = useState({
    name: "",
    address: "",
    mobilePhone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    address: "",
    mobilePhone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const validationErrors = {
      name: newData.name.trim() === "" ? "Name is required" : "",
      address: newData.address.trim() === "" ? "Address is required" : "",
      mobilePhone: newData.mobilePhone.trim() === "" ? "Mobile Phone is required" : "",
      email: newData.email.trim() === "" ? "Email is required" : "",
    };

    setErrors(validationErrors);

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleAddCustomer = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire('Error!', 'Please fill in all the required fields correctly.', 'error');
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (response.ok) {
        Swal.fire('Success!', 'Customer added successfully!', 'success').then(() => {
          navigate("/customer");  // Update the route based on your needs
        });
      } else {
        console.error("Failed to add customer:", response.statusText);
        Swal.fire('Error!', 'Failed to add customer. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error adding customer:", error);
      Swal.fire('Error!', 'An error occurred. Please try again.', 'error');
    }
  };

  return (
    <div className="container mt-5 h-100 text-white" style={{ paddingBottom: '10em' }}>
      <Link to={`/customer`}>
        <button type="submit" className="btn btn-secondary mb-3">
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
        </button>
      </Link>

      <h2 className="mb-4" style={{ marginTop: '1.5em' }}>Form Add Customer</h2>

      <form onSubmit={handleAddCustomer}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && 'is-invalid'}`}
            id="name"
            name="name"
            value={newData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className={`form-control ${errors.address && 'is-invalid'}`}
            id="address"
            name="address"
            value={newData.address}
            onChange={handleInputChange}
          />
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="mobilePhone" className="form-label">
            Mobile Phone:
          </label>
          <input
            type="number"
            className={`form-control ${errors.mobilePhone && 'is-invalid'}`}
            id="mobilePhone"
            name="mobilePhone"
            value={newData.mobilePhone}
            onChange={handleInputChange}
          />
          {errors.mobilePhone && <div className="invalid-feedback">{errors.mobilePhone}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            id="email"
            name="email"
            value={newData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Add Customer
        </button>
      </form>
    </div>
  );
}

export default AddCustomer;
