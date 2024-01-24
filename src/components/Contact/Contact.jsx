import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/logo.png';

function Contact() {
    return (
        <div id="site-content">
            <main className="main-content">
                <div className="container">
                    <div className="page">
                        <div className="breadcrumbs">
                            <Link to="/">Home</Link>
                            <span>Contact</span>
                        </div>

                        <div className="content">
                            <div className="row">
                                <div className="col-md-4">
                                    <h2>My Contact</h2>
                                    <ul className="contact-detail">
                                        <li>
                                            <i class="bi bi-house-gear-fill"></i>
                                            <Link style={{ paddingLeft: '0.8em', color: 'blue' }} to="tel:+61590912831"> Jln. Ragunan, Jakarta Selatan</Link>
                                        </li>
                                        <li>
                                        <i className="bi bi-telephone"></i>
                                            <Link style={{ paddingLeft: '0.8em', color: 'blue'  }} to="tel:+61590912831"> +61 590 912 831</Link>
                                        </li>
                                        <li>
                                        <i className="bi bi-envelope-open-heart-fill"></i>
                                            <Link style={{ paddingLeft: '1em', color: 'blue'  }} to="mailto:mootix@gmail.com">mootix@gmail.com</Link>
                                        </li>
                                    </ul>
                                    <div className="contact-form">
                                        <input type="text" className="name" placeholder="Name..." />
                                        <input type="text" className="email" placeholder="Email..." />
                                        <input type="text" className="website" placeholder="Website..." />
                                        <textarea className="message mb-4" placeholder="Message..."></textarea>
                                        <input type="submit" value="Send Message " />
                                    </div>
                                </div>
                                <div className="col-md-7 col-md-offset-1">
                                    <iframe
                                        title="Location Map"
                                        width="100%"
                                        height="400"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.682401964608!2d106.81924461476935!3d-6.303036295436334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7343b84ab75%3A0x95d4c61b63d32002!2sRagunan%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1642758573612!5m2!1sen!2sid"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Contact;
