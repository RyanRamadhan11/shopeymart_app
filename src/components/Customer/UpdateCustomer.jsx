import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import axios from "axios";

function UpdateCustomer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [newCustomer, setNewCustomer] = useState({
    id: "",
    name: "",
    address: "",
    mobilePhone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    address: "",
    mobilePhone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setNewCustomer({
      ...newCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const validationErrors = {
      id: newCustomer.id.trim() === "" ? "ID is required" : "",
      name: newCustomer.name.trim() === "" ? "Name is required" : "",
      address: newCustomer.address.trim() === "" ? "Address is required" : "",
      mobilePhone: newCustomer.mobilePhone.trim() === "" ? "Mobile Phone is required" : "",
      email: newCustomer.email.trim() === "" ? "Email is required" : "",
    };

    setErrors(validationErrors);

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleUpdateCustomer = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire('Error!', 'Please fill in all the required fields correctly.', 'error');
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8080/customer`, newCustomer);

      if (response.status === 200) {
        Swal.fire('Success!', 'Customer updated successfully!', 'success').then(() => {
          navigate("/customer");
        });
      } else {
        console.error("Failed to update customer:", response.statusText);

        // Set pesan alert jika gagal
        Swal.fire('Error!', 'Failed to update customer. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error updating customer:", error);

      // Set pesan alert jika terjadi error
      Swal.fire('Error!', 'ID Customer Not Found!', 'error');
    }
  };

  useEffect(() => {
    const fetchDataAndUpdateState = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/customer/${id}`);
        const fetchedData = response.data;

        setNewCustomer(fetchedData);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchDataAndUpdateState();
  }, [id]);

  return (
    <div className="container mt-5 h-100 text-white" style={{ paddingBottom: '10em' }}>
      <Link to={`/customer`}>
        <button type="submit" className="btn btn-secondary mb-3">
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
        </button>
      </Link>

      <h2 className="mb-4" style={{ marginTop: '1.5em' }}>Form Update Customer</h2>


      <form onSubmit={handleUpdateCustomer}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID:
          </label>
          <input
            disabled
            type="text"
            className={`form-control ${errors.id && 'is-invalid'}`}
            id="id"
            name="id"
            value={newCustomer.id}
            onChange={handleInputChange}
          />
          {errors.id && <div className="invalid-feedback">{errors.id}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && 'is-invalid'}`}
            id="name"
            name="name"
            value={newCustomer.name}
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
            value={newCustomer.address}
            onChange={handleInputChange}
          />
          {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="mobilePhone" className="form-label">
            Mobile Phone:
          </label>
          <input
            type="text"
            className={`form-control ${errors.mobilePhone && 'is-invalid'}`}
            id="mobilePhone"
            name="mobilePhone"
            value={newCustomer.mobilePhone}
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
            value={newCustomer.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Update Customer
        </button>
      </form>
    </div>
  );
}

export default UpdateCustomer;
