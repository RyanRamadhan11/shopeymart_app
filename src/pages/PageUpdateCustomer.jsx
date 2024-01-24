import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import UpdateCustomer from '../components/Customer/UpdateCustomer';

function PageUpdateCustomer() {
  return (
    <div>
      <Navbar />
      <UpdateCustomer />
      <Footer />
    </div>
  );
}

export default PageUpdateCustomer;
