import React, { useState } from 'react';

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

  <h1>List Product</h1>
  return (
    <table id="productTable" className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Product Category</th>
          <th>Product Features</th>
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
            <td>{product.productFeatures}</td>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
