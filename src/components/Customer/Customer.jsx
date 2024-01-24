import React from "react";
import useFetch from "./UseFetch";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import axios from "axios";
import { useSelector } from "react-redux";

function Customer() {
  const [data, fetchData] = useFetch("http://localhost:8080/customer");
  const userRole = useSelector((state) => state.authentication.role);

  const getRandomImage = () => {
    const baseUrl = 'https://source.unsplash.com/'; 
    const imageSize = '800x600';
    return `${baseUrl}${imageSize}/?customer=${Math.random()}`;
  };

  const getCustomerImage = () => {
    return getRandomImage();
  };

  const deleteCustomer = async (id) => {
    try {
      // Tampilkan SweetAlert untuk konfirmasi penghapusan
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You sure will delete this customer!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi, lakukan penghapusan
        await axios.delete(`http://localhost:8080/customer/${id}`);
        // Setelah penghapusan berhasil, perbarui data dengan memanggil fetchData
        fetchData();

        // Tampilkan SweetAlert untuk konfirmasi penghapusan berhasil
        Swal.fire('Deleted!', 'Your customer has been deleted.', 'success');
      }
    } catch (error) {
      console.log('Error deleting customer:', error.response?.data || error.message);
      // Tampilkan SweetAlert untuk informasi penghapusan gagal
      Swal.fire('Error!', 'Failed to delete the customer.', 'error');
    }
  }
  

  return (
    <div className="container mt-3 h-100">
      <h2 className="mb-4">Customer List</h2>
      {userRole === "ROLE_ADMIN" && (
        <Link to={`/customer/addCustomer`}>
          <button type="submit" className="btn btn-primary mb-3">
            Add Customer
          </button>
        </Link>
      )}

      <div className="row">
        {data &&
          data.map((customer) => (
            <div key={customer.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={getCustomerImage()}
                  alt={customer.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title pb-2" style={{ fontSize: '18px' }}>{customer.name}</h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Address</th>
                        <td>:</td>
                        <td>{customer.address}</td>
                      </tr>
                      <tr>
                        <th scope="row">Phone</th>
                        <td>:</td>
                        <td>{customer.mobilePhone}</td>
                      </tr>
                      <tr>
                        <th scope="row">Email</th>
                        <td>:</td>
                        <td>{customer.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {userRole === "ROLE_ADMIN" && (
                <div className="card-footer d-flex justify-content-center ">
                  <Link to={`/customer/updateCustomer/${customer.id}`}>
                    <button type="submit" className="btn btn-success mt-3 mb-3 mr-2 mx-3">Update</button>
                  </Link>
                  <button type="submit" className="btn btn-danger mt-3 mb-3 mx-3" onClick={()=> deleteCustomer(customer.id)}>Delete</button>
                </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Customer;
