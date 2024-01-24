import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function AddStore() {
  const navigate = useNavigate();
  const [newStore, setNewStore] = useState({
    noSiup: "",
    name: "",
    address: "",
    mobilePhone: "",
  });
  const [errors, setErrors] = useState({
    noSiup: "",
    name: "",
    address: "",
    mobilePhone: "",
  });

  const handleInputChange = (e) => {
    setNewStore({
      ...newStore,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const validationErrors = {
      noSiup: newStore.noSiup.trim() === "" ? "NoSiup is required" : "",
      name: newStore.name.trim() === "" ? "Store Name is required" : "",
      address: newStore.address.trim() === "" ? "Address is required" : "",
      mobilePhone: newStore.mobilePhone.trim() === "" ? "Mobile Phone is required" : "",
    };

    setErrors(validationErrors);

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleAddStore = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire('Error!', 'Please fill in all the required fields correctly.', 'error');
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStore),
      });

      if (response.ok) {
        Swal.fire('Success!', 'Store added successfully!', 'success').then(() => {
          navigate("/store");
        });
      } else {
        console.error("Failed to add store:", response.statusText);
        Swal.fire('Error!', 'Failed to add store. Please try again.', 'error');
      }
    } catch (error) {
      console.error("Error adding store:", error);
      Swal.fire('Error!', 'An error occurred. Please try again.', 'error');
    }
  };

  return (
    <div className="container mt-5 h-100 text-white" style={{ paddingBottom: '10em' }}>
      <Link to={`/store`}>
        <button type="submit" className="btn btn-secondary mb-3">
          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
        </button>
      </Link>

      <h2 className="mb-4" style={{ marginTop: '1.5em' }}>Form Add Store</h2>

      <form onSubmit={handleAddStore}>
        <div className="mb-3">
          <label htmlFor="noSiup" className="form-label">
            NoSiup:
          </label>
          <input
            type="text"
            className={`form-control ${errors.noSiup && 'is-invalid'}`}
            id="noSiup"
            name="noSiup"
            value={newStore.noSiup}
            onChange={handleInputChange}
          />
          {errors.noSiup && <div className="invalid-feedback">{errors.noSiup}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Store Name:
          </label>
          <input
            type="text"
            className={`form-control ${errors.name && 'is-invalid'}`}
            id="name"
            name="name"
            value={newStore.name}
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
            value={newStore.address}
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
            value={newStore.mobilePhone}
            onChange={handleInputChange}
          />
          {errors.mobilePhone && <div className="invalid-feedback">{errors.mobilePhone}</div>}
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Add Store
        </button>
      </form>
    </div>
  );
}

export default AddStore;
