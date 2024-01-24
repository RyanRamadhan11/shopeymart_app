import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AddCustomer from '../components/Customer/AddCustomer';

function PageAddCustomer() {
  return (
    <div>
      <Navbar />
      <AddCustomer />
      <Footer />
    </div>
  );
}

export default PageAddCustomer;
