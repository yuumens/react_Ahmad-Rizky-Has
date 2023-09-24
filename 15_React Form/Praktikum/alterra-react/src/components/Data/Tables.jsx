import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import './Table.css';

const Table = ({ products, onSaveEdit }) => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedProductName, setEditedProductName] = useState('');

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setEditedProductName(product.productName);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleSaveEdit = () => {
    if (editingProduct) {
      const updatedProduct = { ...editingProduct, productName: editedProductName };
      onSaveEdit(updatedProduct);
      setEditingProduct(null);
    }
  };

  return (
    <div>
<table id="productTable" className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Image</th>
          <th>Product Freshness</th>
          <th>Product Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>
              {editingProduct === product ? (
                <input
                  type="text"
                  value={editedProductName}
                  onChange={(e) => setEditedProductName(e.target.value)}
                />
              ) : (
                product.productName
              )}
            </td>
            <td>{product.productCategory}</td>
            <td>{product.productImage}</td>
            <td>{product.productFreshness}</td>
            <td>{product.productPrice}</td>
            <td>
              {editingProduct === product ? (
                <div className='d-grid gap-2 d-md-flex'>
                  <button type='button' className='btn btn-success' onClick={handleSaveEdit}>Save</button>
                  <button type='button' className='btn btn-secondary' onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <button type='button' className='btn btn-secondary' onClick={() => handleEditClick(product)}>Edit</button>
              )}
            </td>
            <td>
            <Link
              type="button"
              to={`/product-details/${product.id}`}
              state={{ productData: product }}
              className="btn custom-btn"
            >
              Detail
            </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    </div>
  );
};

export default Table;
