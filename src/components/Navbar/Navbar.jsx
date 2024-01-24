import React from "react";
import Logo from "../../assets/images/cart.png";
import "../../App.css";
import { Link, useNavigate } from 'react-router-dom'; 
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticated } from "../../store/authSlice";
import Swal from 'sweetalert2'; // Import SweetAlert
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';

function Navbar() {

  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const username = useSelector((state) => state.authentication.username);
  const role = useSelector((state) => state.authentication.role);

  console.log('isAuthenticated:', isAuthenticated);
  console.log('username:', username);
  console.log('role:', role);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Hapus data dari localStorage
        localStorage.removeItem('adminData');
        localStorage.removeItem('isLoggedIn');

        localStorage.removeItem('customerData');
        localStorage.removeItem('isLoggedIn');

        dispatch(setAuthenticated(false));
        Swal.fire({
          icon: 'success',
          title: 'Logout Successful!',
          text: 'You have been logged out.',
          showConfirmButton: true,
          timer: 2000
        }).then(() => {
          navigate("/login"); 
        });
      }
    });
  };

  return (
    <header className="site-header">
      <div className="row container-fluid d-flex justify-content-between">
        <div className="col-md-5 logo-container" >
          <Link to="/" id="branding">
            <img style={{ width: '60px', height: '80px', paddingBottom: '26px' }} src={Logo} alt="" className="logo" />
            <div className="logo-copy" style={{ padding: '0 30px' }}>
              <h1 className="site-title">SHOPEYMART APP</h1>
              <small className="site-description text-white">E-Commerce</small>
            </div>
          </Link>
        </div>

        <div className="col-md-7">
          <div className="row">
            <div className="col-md-10 main-navigation mt-2">
                <button type="button" className="menu-toggle">
                <FaBars />
                </button>
                <ul className="menu">
                  <li className="menu-item current-menu-item">
                    <Link to="/" style={{color: 'black'}}>Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/about" style={{color: 'black'}}>About</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/store" style={{color: 'black'}}>Store</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/customer" style={{color: 'black'}}>Customer</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/product" style={{color: 'black'}}>Product</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/review" style={{color: 'black'}}>Product reviews</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/contact" style={{color: 'black'}}>Contact</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/bantuan" style={{color: 'black'}}>Bantuan</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="/addOrder" style={{paddingLeft: '15px', paddingBottom: '2px', color: 'black'}} className="cart-icon">
                      <FaShoppingCart style={{paddingBottom: '1px'}}/> <span style={{paddingLeft: '4px', color: 'black'}}>Order</span>
                    </Link>
                  </li>
                </ul>
            </div>
            <div className="col-md-2 mt-2 px-5">
              {isAuthenticated ? (
                  <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-black fw-bold">
                  {username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item disabled className="text-black">Role: {role}</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} className="white text-white">
                      <Button variant="danger" className="w-100">
                        Logout
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-warning mt1" style={{ color: 'black', fontWeight: 'bold' }} type="submit">
                      LOGIN
                    </button>
                  </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
