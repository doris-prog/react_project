import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './Navbar';
import ProductCard from './ProductCard';

function App() {

  return (
    <>
      <Navbar />

      <header className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to Unforgetable Specations </h1>
          <p className="lead">Discover romantic and memorable holiday sites at unbeatable prices!</p>
          <a href="#" className="btn btn-light btn-lg">Come in and View Now</a>
        </div>
      </header>

      <main className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/20/300/200"
              productName="Product 1"
              price="19.99" />
          </div>
          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/1/300/200"
              productName="Product 2"
              price="29.99" />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/26/300/200"
              productName="Product 3"
              price="39.99" />
          </div>

          <div className="col-md-3 mb-4">
            <ProductCard
              imageUrl="https://picsum.photos/id/96/300/200"
              productName="Product 4"
              price="49.99" />
          </div>
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App
