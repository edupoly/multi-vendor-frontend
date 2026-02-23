import React from 'react';
import Stores from '../features/vendor/Stores';

const Home: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Welcome to the Multi-Vendor Store</h1>
          <p className="lead">Browse vendors, manage products, and shop with ease.</p>
        </div>
      </div>
      <Stores></Stores>
    </div>
  );
};

export default Home;
