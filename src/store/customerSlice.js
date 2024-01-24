
// customerSlice.js

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'; // Import SweetAlert

import { setAuthenticated } from "./authSlice";
import { useNavigate } from "react-router-dom";


import {
  setAuthId,
  setAuthUsername,
  setAuthEmail,
  setAuthRole,
} from "./authSlice";

const initialIsLoggedIn =
  localStorage.getItem("isLoggedIn") === "true" || false;

const initialCustomerData = JSON.parse(localStorage.getItem("customerData")) || {};

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    id: initialCustomerData.id || "",
    username: initialCustomerData.username || "",
    email: initialCustomerData.email || "",
    role: initialCustomerData.role || "",
    isLoggedIn: initialIsLoggedIn,
    loading: false,
    error: null,
    password: initialCustomerData.password || "",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.id = "";
      state.username = "";
      state.email = "";
      state.role = "";
      state.isLoggedIn = false;
      localStorage.removeItem("customerData");
      localStorage.removeItem("isLoggedIn");
    },
    updateCustomerData: (state, action) => {
      const {id, username, email, role, password} = action.payload;
      state.id = id;
      state.username = username;
      state.email = email;
      state.role = role;
      state.password = password;
    },
    setPassword: (state, action) => {
        state.password = action.payload
    }
  },
});

export const {
  setUsername,
  setId,
  setEmail,
  setRole,
  setLoggedIn,
  setLoading,
  setError,
  clearError,
  logout,
  updateCustomerData,
  setPassword,
} = customerSlice.actions;

export default customerSlice.reducer;

// Selectors
export const selectLoading = (state) => state.customer.loading;

// Thunk for asynchronous login
export const loginCustomer = (email, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    // Replace the URL with the appropriate endpoint for customers
    const response = await axios.get("http://localhost:3001/customers");
    const customers = response.data;

    const customer = customers.find(
      (customer) => customer.email === email && customer.password === password
    );

    console.log(customer, "customer data");
    if (customer) {
      const { id, username, email, role } = customer;

      dispatch(setAuthId(id));
      dispatch(setAuthUsername(username));
      dispatch(setAuthEmail(email));
      dispatch(setAuthRole(role));

      dispatch(setAuthenticated(true));

      localStorage.setItem("customerData", JSON.stringify(customer));
      localStorage.setItem("isLoggedIn", true);
      console.log("Login successful!");

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back, ' + username,
        showConfirmButton: true,
        timer: 3000
      });
    } else {
      dispatch(setError("Invalid credentials"));
      console.log("Login failed: Invalid credentials");

      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid credentials. Please try again.',
        showConfirmButton: true,
        timer: 3000
      });

      // Navigasi ke halaman login setelah menampilkan pesan kesalahan
      const navigate = useNavigate();
      navigate('/');
    }
  } catch (error) {
    dispatch(setError("Error during login"));
    console.error("Error during login:", error);

    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred during login. Please try again later.',
      showConfirmButton: true,
      timer: 2000
    });

    // Navigasi ke halaman login setelah menampilkan pesan kesalahan
    const navigate = useNavigate();
    navigate('/');
  } finally {
    dispatch(setLoading(false));
  }
};


export const updateCustomer = (id, updatedData) => async (dispatch) => {
  try {
      const response = await axios.put(`http://localhost:3000/customers/${id}`, updatedData);
      const updatedCustomer = response.data;

      dispatch(updateCustomerData(updatedCustomer));
      localStorage.setItem("customerData", JSON.stringify(updatedCustomer));
      console.log("Customer data updated successfully!");
  } catch (error) {
      console.error("Error updating customer data:", error);
  }
};


