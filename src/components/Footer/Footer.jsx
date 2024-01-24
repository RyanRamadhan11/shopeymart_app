import React from "react";
import { FaFacebook, FaTwitter, FaGoogle, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: 'rgb(95, 35, 1) ', paddingBottom: '30px'}}>
      <div className="container-fluid" style={{padding: '5em 5em 5em 5em'}}>
        <div className="row">
          <div className="col-md-4">
            <div className="widget">
              <h3 className="widget-title">About Us</h3>
              <p style={{textAlign: 'justify'}}>
              Shopeymart adalah platform penjualan online yang menyediakan berbagai produk kebutuhan sehari-hari. 
              Aplikasi ini dirancang untuk memudahkan pengguna dalam berbelanja secara online, memberikan pengalaman
              berbelanja yang lebih baik.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Help Center</h3>
              <ul className="no-bullet" >
                <li> <a href="#" style={{marginTop: '2em'}}>Shopeymart</a></li>
                <li><a href="#" style={{marginTop: '2em'}}>+62-1234-5678</a></li>
                <li><a href="#" style={{marginTop: '2em'}}>Jln.Dahlan 76</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Join Us</h3>
              <ul className="no-bullet">
                <li><a href="#">Lantai 40 EnigmaCamp</a></li>
                <li><a href="#">Jln. Dahlan 76 Ragunan</a></li>
                <li><a href="#">Dolorem respequem</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">Social Media</h3>
              <ul className="no-bullet">
                <li><a href="#"><FaFacebook /> Facebook</a></li>
                <li><a href="#"><FaTwitter /> Twitter</a></li>
                <li><a href="#"><FaGoogle /> Google+</a></li>
                <li><a href="#"><FaPinterest /> Pinterest</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="widget">
              <h3 className="widget-title">News letter</h3>
              <form action="#" className="subscribe-form">
                <input type="text" placeholder="Email Address" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="colophon text-center">
        Copyright 2024 || Shopeymart, Designed by Ryan Ramadhan || Enigmacamp. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
