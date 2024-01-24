import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AddOrder from '../components/Order/AddOrder';

function PageAddOrder() {
  return (
    <div>
      <Navbar />
      <AddOrder />
      <Footer />
    </div>
  );
}

export default PageAddOrder;
