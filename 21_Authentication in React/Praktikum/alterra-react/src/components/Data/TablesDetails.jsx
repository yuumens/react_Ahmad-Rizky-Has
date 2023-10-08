import React from 'react';
import { useLocation } from 'react-router-dom';
import './TableDetails.css';

function TableDetails() {
  // Dapatkan lokasi saat ini (termasuk state) dari URL
  const location = useLocation();
  const { productData } = location.state || {};

  if (!productData) {
    return <div>Data not found</div>;
  }

  return (
    <div className="product-details">
      <h2>Product Detail</h2>
      <div className="product-details-content">
        <p>ID: {productData.id}</p>
        <p>Product Name: {productData.productName}</p>
        <p>Product Category: {productData.productCategory}</p>
        <p>Product Image: {productData.productImage}</p>
        <p>Product Features: {productData.productFreshness}</p>
        <p>Additional Description: {productData.additionalDescription}</p>
        <p>Product Price: {productData.productPrice}</p>
      </div>
    </div>
  );
}

export default TableDetails;
