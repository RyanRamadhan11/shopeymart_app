import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Loading from '../components/Loading';
import Accordion from '../components/Accordion/Accordion';

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setLoading(false);
    }, 3000);

  }, []);
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
      <div>
        <Navbar />
        <Hero />
        <Accordion />
        <Footer />
      </div>
      )};
    </>
  );
}

export default Home;
