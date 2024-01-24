// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice";
import adminReducer from "./adminSlice";
import authenticationReducer from "./authSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    admin: adminReducer,
    authentication: authenticationReducer,
  },
});

export default store;
