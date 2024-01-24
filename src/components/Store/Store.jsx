import React, { useState } from "react";
import useFetch from "./UseFetch";
import { Link } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';

import { useSelector} from "react-redux";

import store1 from '../../assets/images/store.avif'


function Store() {
  const [data, fetchData] = useFetch("http://localhost:8080/store");
  const userRole = useSelector((state) => state.authentication.role);

  const getRandomImage = () => {
    // Replace 'placeholder' with your base URL for random images
    const baseUrl = 'https://source.unsplash.com/'; 
    const imageSize = '800x600'; // Set your preferred image size

     // Generate a random image URL
    return `${baseUrl}${imageSize}/?store=${Math.random()}`;
  };

  const getProductImage = (store) => {
    // Use getRandomImage() if product.images is not available
    return store.images && store.images.length > 0
      ? product.images[0] // Use the first image URL
      : getRandomImage();
  };

  const deleteStore = async (id) => {
    try {
      // Tampilkan SweetAlert untuk konfirmasi penghapusan
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You sure will delete this store!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });
  
      if (result.isConfirmed) {
        // Jika pengguna mengonfirmasi, lakukan penghapusan
        await axios.delete(`http://localhost:8080/store/${id}`);
        // Setelah penghapusan berhasil, perbarui data dengan memanggil fetchData
        fetchData();
  
        // Tampilkan SweetAlert untuk konfirmasi penghapusan berhasil
        Swal.fire('Deleted!', 'Your store has been deleted.', 'success');
      }
    } catch (error) {
      console.log('Error deleting store:', error.response?.data || error.message);
      // Tampilkan SweetAlert untuk informasi penghapusan gagal
      Swal.fire('Error!', 'Failed to delete the store.', 'error');
    }
  }
  
  return (
    <div className="container mt-3 h-100">
      <h2 className="mb-4">Store List</h2>
      {userRole === "ROLE_ADMIN" && (
      <Link to={`/store/addStore`}>
        <button type="submit" className="btn btn-primary mb-3">
          Add Store
        </button>
      </Link>
      )}

      <div className="row">
        {data &&
          data.map((store) => (
            <div key={store.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="embed-responsive embed-responsive-4by3">
                  <img
                    src={getProductImage(store)}
                    alt={store.title}
                    className="card-img-top embed-responsive-item"
                    style={{height: '20em'}}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title pb-2" style={{fontSize: '15px'}}>noSiup - {store.noSiup}</h5>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Store Name</th>
                        <td>:</td>
                        <td>{store.name}</td>
                      </tr>
                      <tr>
                        <th scope="row">Address Store</th>
                        <td>:</td>
                        <td>{store.address}</td>
                      </tr>
                      <tr>
                        <th scope="row">Mobile Phone</th>
                        <td>:</td>
                        <td>{store.mobilePhone}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {userRole === "ROLE_ADMIN" && (
                <div className="card-footer d-flex justify-content-center ">
                  <Link to={`/store/updateStore/${store.id}`}>
                    <button type="submit" className="btn btn-success mt-3 mb-3 mr-2 mx-3">Update</button>
                  </Link>
                  <button type="submit" className="btn btn-danger mt-3 mb-3 mx-3" onClick={()=> deleteStore(store.id)}>Delete</button>
                </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Store;
