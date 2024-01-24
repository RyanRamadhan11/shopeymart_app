
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAdmin, selectLoading } from "../store/adminSlice";
import { Link } from 'react-router-dom';
import Logo1 from '../assets/images/online.png';

import Loading from '../components/Loading'; // Import your loading component

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);

  const validateForm = () => {
    const validationErrors = {
      username: username.trim() === "" ? "Username is required" : "",
      password: password.trim() === "" ? "Password is required" : "",
    };

    setErrors(validationErrors);

    return Object.values(validationErrors).every(error => error === "");
  };

  const handleLogin = async () => {
    try {
      if (!validateForm()) {
        // Display error message if form is not valid
        return;
      }

      if (location.pathname.startsWith("/")) {
        await dispatch(loginAdmin(username, password));
      }

      navigate('/');
    } catch (error) {
      console.error("Login failed:", error);
      // Handle error, if needed
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="nav" style={{ backgroundColor: '', padding: '0.5em' }}>
          <div className="container" style={{padding: '2em'}}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-12">
                <div className="card" style={{ borderRadius: '1rem', marginLeft: '7em' }}>
                  <div className="row container-fluid">
                    <div className="col-md-6 col-lg-6 d-none d-md-block py-5 px-5">
                      <img src={Logo1} alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', paddingTop: '2em' }} />
                    </div>
                    <div className="col-md-6 col-lg-6 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i className="fas fa-shopping-cart fa-2x mx-4 mb-3" style={{ color: 'black' }}></i>
                            <span className="h1 fw-bold mb-3">Shopeymart App</span>
                          </div>

                          <h5 className="fw-normal mb-3 pb-3 text-center" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
                          <div className="mb-3">
                            <label htmlFor="inputUsername" className="form-label">
                              Username 
                            </label>
                            <input
                              type="text" 
                              className={`form-control ${errors.username && 'is-invalid'}`}
                              id="inputUsername"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)} 
                            />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                          </div>

                          <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">
                              Password
                            </label>
                            <input
                              type="password"
                              className={`form-control ${errors.password && 'is-invalid'}`}
                              id="inputPassword"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                          </div>

                          <div className="mb-3 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="rememberMe"
                              defaultChecked
                            />
                            <label className="form-check-label" htmlFor="rememberMe">
                              Remember me
                            </label>
                          </div>

                          <div className="mb-3">
                            <a href="#!" className="text-decoration-none" style={{color: 'blue'}}>
                              Forgot password?
                            </a>
                          </div>

                          <button
                            type="button"
                            className="btn btn-warning btn-block mb-3 fw-bold"
                            onClick={handleLogin}
                          >
                            Sign in
                          </button>

                          <p className=" pb-lg-2" style={{ color: '#393f81', paddingTop: '1.5em' }}>
                            Don't have an account ? 
                            <Link to="/register/admin" className="mx-2" style={{color: 'blue'}}>
                              Register here
                            </Link>
                          </p>

                          <Link to="#!" className="small text-muted">Terms of use. </Link>
                          <Link to="#!" className="small text-muted">Privacy policy</Link>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
