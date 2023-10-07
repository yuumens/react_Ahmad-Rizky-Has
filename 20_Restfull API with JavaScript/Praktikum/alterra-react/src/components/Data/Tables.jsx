import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Table.css';
import axios from 'axios';

const Table = () => {
  const [editingProduct, setEditingProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    productName: '',
    productCategory: '',
    productFreshness: '',
    productPrice: '',
  });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://65209e90906e276284c494cd.mockapi.io/product')
      .then((response) => {
        setProducts(response.data);
        console.log("Data Produk Sukses Di Ambil")
      })
      .catch((error) => {
        console.error('Gagal mengambil data produk:', error);
      });
  }, []);

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setEditedProduct({
      productName: product.productName,
      productCategory: product.productCategory,
      productFreshness: product.productFreshness,
      productPrice: product.productPrice,
    });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await axios.put(`https://65209e90906e276284c494cd.mockapi.io/product/${editingProduct.id}`, editedProduct);

      if (response.status === 200) {
        alert("Data Produk Sukses Di Edit");

        const updatedProducts = products.map((product) => {
          if (product.id === editingProduct.id) {
            return { ...product, ...editedProduct };
          }
          return product;
        });
        setProducts(updatedProducts);

        setEditingProduct(null);
      }
    } catch (error) {
      console.error('Gagal mengubah data produk:', error);
    }
  };

  const handleDeleteProduct = (productId) => {
    axios.delete(`https://65209e90906e276284c494cd.mockapi.io/product/${productId}`)
      .then((response) => {
        alert("Data Berhasil Di Hapus");
        if (response.status === 204) {
          const updatedProducts = products.filter((product) => product.id !== productId);
          setProducts(updatedProducts);
        }
      })
      .catch((error) => {
        alert("Gagal Menghapus Data");
        console.error('Gagal Menghapus Data:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  return (
    <div>
      <table id="productTable" className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Category</th>
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
                    name="productName"
                    value={editedProduct.productName}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.productName
                )}
              </td>
              <td>
                {editingProduct === product ? (
                  <input
                    type="text"
                    name="productCategory"
                    value={editedProduct.productCategory}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.productCategory
                )}
              </td>
              <td>
                {editingProduct === product ? (
                  <input
                    type="text"
                    name="productFreshness"
                    value={editedProduct.productFreshness}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.productFreshness
                )}
              </td>
              <td>
                {editingProduct === product ? (
                  <input
                    type="text"
                    name="productPrice"
                    value={editedProduct.productPrice}
                    onChange={handleInputChange}
                  />
                ) : (
                  product.productPrice
                )}
              </td>
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
                <button type='button' className='btn btn-danger' onClick={() => handleDeleteProduct(product.id)}>Delete</button>
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
