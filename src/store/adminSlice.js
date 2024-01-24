// adminSlice.js

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthenticated } from "./authSlice";
import Swal from 'sweetalert2'; // Import SweetAlert

import {  setAuthId, setAuthUsername, setAuthEmail, setAuthRole, } from "./authSlice";
import { useNavigate } from "react-router-dom";

const initialIsLoggedIn =
  localStorage.getItem("isLoggedIn") === "true" || false;

const initialAdminData = JSON.parse(localStorage.getItem("adminData")) || {};

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    id: initialAdminData.id || "",
    username: initialAdminData.username || "",
    email: initialAdminData.email || "",
    role: initialAdminData.role || "",
    isLoggedIn: initialIsLoggedIn,
    loading: false, // Added loading state
    error: null,    // Added error state
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
      localStorage.removeItem("adminData");
      localStorage.removeItem("isLoggedIn");
    },
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
} = adminSlice.actions;

export default adminSlice.reducer;

// Selectors
export const selectLoading = (state) => state.admin.loading;



//ini make endpoint shopeymart

export const loginAdmin = (username, password) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const response = await axios.post("http://localhost:8080/api/auth/login", {
      username,
      password,
    });

    // const admin = response.data; // Sesuaikan dengan respons dari backend
    const admin = response.data.data; // Access the data key from the response

    console.log(admin, "admin data");
    if (admin) {
      const { id, username, email, role, token } = admin;

      dispatch(setAuthId(id));
      dispatch(setAuthUsername(username));
      dispatch(setAuthEmail(email));
      dispatch(setAuthRole(role));

      console.log(admin.token)
      console.log(admin.username)
      console.log(admin.token)

      dispatch(setAuthenticated(true));

      localStorage.setItem("adminData", JSON.stringify(admin));
      localStorage.setItem("isLoggedIn", true);
      console.log("Login successful!");
      console.log(admin, "admin data");

      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome back, ' + username,
        showConfirmButton: false,
        timer: 1500
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

    const navigate = useNavigate();
    navigate('/');
  } finally {
    dispatch(setLoading(false));
  }
};


