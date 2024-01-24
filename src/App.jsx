import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./pages/Home";

import RegisterAdmin from './pages/RegisterAdmin';
import RegisterCustomer from './pages/RegisterCustomer';
import PageContact from './pages/PageContact';
import PageAbout from './pages/PageAbout';
import PageReview from './pages/PageReview';

import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { setAuthenticated, setAuthId, setAuthUsername, setAuthEmail, setAuthRole } from './store/authSlice';
import PageBantuan from "./pages/PageBantuan";
import Login from "./pages/Login";
import PageStore from "./pages/PageStore";
import PageAddStore from "./pages/PageAddStore";
import PageUpdateStore from "./pages/PageUpdateStore";
import PageProduct from "./pages/PageProduct";
import PageAddProduct from "./pages/PageAddProduct";
import PageAddOrder from "./pages/PageOrder";
import PageCustomer from "./pages/PageCustomer";
import PageAddCustomer from "./pages/PageAddCustomer";
import PageUpdateCustomer from "./pages/PageUpdateCustomer";


function App() {
  
  const isLoggedIn = useSelector((state) => state.authentication.isAuthenticated);
  console.log(isLoggedIn)

  const dispatch = useDispatch();

  useEffect(() => {
    const initializeUserData = () => {
  
      //untuk admin
      const storedAdmin = localStorage.getItem('adminData');
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

      if (storedAdmin && isLoggedIn) {
        const user = JSON.parse(storedAdmin);

        dispatch(setAuthenticated(true));
        dispatch(setAuthId(user.id));
        dispatch(setAuthUsername(user.username));
        dispatch(setAuthEmail(user.email));
        dispatch(setAuthRole(user.role));
      }

      //untuk customer
      const storedCustomer = localStorage.getItem('customerData');
      const isLoggedInCs = localStorage.getItem('isLoggedIn') === 'true';

      if (storedCustomer && isLoggedInCs) {
        const customer = JSON.parse(storedCustomer);

        dispatch(setAuthenticated(true));
        dispatch(setAuthId(customer.id));
        dispatch(setAuthUsername(customer.username));
        dispatch(setAuthEmail(customer.email));
        dispatch(setAuthRole(customer.role));
      }
    };

    initializeUserData();
  }, [dispatch]);


  return (
    <>
      <Routes>
        <Route
          path={"/login"}
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />

        <Route
          path={"/addOrder"}
          element={isLoggedIn ? <PageAddOrder/> : <Login />}
        />


        <Route path="/" element={<Home />} />

        <Route path="/register/admin" element={<RegisterAdmin/>} />
        <Route path="/register/customer" element={<RegisterCustomer/>} />

        <Route path="/contact" element={<PageContact />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/review" element={<PageReview />} />
        <Route path="/bantuan" element={<PageBantuan />} />

        <Route path="/store" element={<PageStore />} />
        <Route path="/store/addStore" element={<PageAddStore />} />
        <Route path="/store/updateStore/:id" element={<PageUpdateStore />} />

        <Route path="/product" element={<PageProduct />} />
        <Route path="/product/addProduct" element={<PageAddProduct />} />

        {/* <Route path="/addOrder" element={<PageAddOrder />} /> */}

        <Route path="/customer" element={<PageCustomer />} />
        <Route path="/customer/addCustomer" element={<PageAddCustomer />} />
        <Route path="/customer/updateCustomer/:id" element={<PageUpdateCustomer />} />

      </Routes>
    </>
  );
}

export default App;
