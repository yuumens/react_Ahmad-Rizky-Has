import React, {useEffect, useState}  from 'react';
import './Home.css'
import BootstrapLogo from '../assets/img/image-9.png'
import Table from '../Data/Table';
import Article from '../../components/utils/Article';
import {generateRandomNumber} from '../../components/utils/GenerateRandomNumber' 
import { toggleLanguage } from '../../components/utils/ToggleLanguage';


const Home = () => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [additionalDescription, setAdditionalDescription] = useState('');
    const [productFeatures, setProductFeatures] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [products, setProducts] = useState([]);
    const [productImage, setProductImage] = useState('');

    const [language, setLanguage] = useState('en')

    const handleLanguageToggle = () => {
      toggleLanguage(language, setLanguage);
    };

    useEffect(() => {
      alert('Welcome');
    }, []);


const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'pname') {
      setProductName(value);
    } else if (name === 'pCategory') {
      setProductCategory(value);
    } else if (name === 'pformFile') {
      setProductImage(value);
    } else if (name === 'PFeatures') {
      setProductFeatures(value);
    } else if (name === 'productDescription'){
        setAdditionalDescription(value);
    }else if (name === 'priceInput') {
        setProductPrice(value);
    }
  };

  const generateRandomId = () => {
    let uniqueId;
    do {
      uniqueId = Math.floor(Math.random() * 1000);
    } while (products.some(product => product.id === uniqueId)); 

    return uniqueId;
  };
  
  
  const handleDelete = () => {
    if (products.length > 0) {
      const shouldDelete = window.confirm('Apakah Anda yakin ingin menghapus produk ini?');
      
      if (shouldDelete) {
        const updatedProducts = [...products];
        updatedProducts.pop();
        setProducts(updatedProducts);
      }
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      productName &&
      productCategory &&
      productFeatures &&
      productPrice
    ) {
      const uniqueId = generateRandomId();

      const product = {
        id: uniqueId,
        productName,
        productCategory,
        productFeatures,
        productPrice,
      };
  
      setProducts([...products, product]);
  
      setProductName('');
      setProductCategory('');
      setProductFeatures('');
      setProductPrice('');
    }
  };
  
  const handleSaveEdit = (editedProduct) => {
    const editedIndex = products.findIndex((product) => product.id === editedProduct.id);

    if (editedIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[editedIndex] = editedProduct;
      setProducts(updatedProducts);
    }
  };


  return (
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="bootstrap-logo">
        <img src={BootstrapLogo}alt="" />
      </div>
      <h1>{Article.title[language]}</h1>
        <p>
          {Article.description[language]}
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button onClick={handleLanguageToggle} className="btn btn-primary">
          {language === 'en' ? (
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Indonesia_flag_300.png" 
                  alt="English"
                  style={{ width: '24px', height: '16px', marginRight: '8px' }}
                />
                ID
              </span>
            ) : (
              <span>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Great_Britain_%28English_version%29.png"
                  alt="Indonesia"
                  style={{ width: '24px', height: '16px', marginRight: '8px' }}
                />
                EN
              </span>
            )}
          </button>
          <button onClick={generateRandomNumber} className="btn btn-primary"> Generate Random Number</button>
        </div>
      <div className="forms">
        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
          <div className="form-group mb-2">
            <label htmlFor="pname">Product Name: </label>
            <input
              type="text"
              className="form-control"
              id="pname"
              name="pname"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required=""
              min={6}
              max={50}
            />
            <div
              id="alertDivName"
              className="alert alert-danger"
              style={{ display: "none" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pCategory">Product Category: </label>
            <select
                className="form-control text-dark"
                id="pCategory"
                name="pCategory"
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
                required=""
            >
              <option className="text-light" defaultValue={"Choose"} disabled=""
                >
                Choose...
              </option>
              <option value="Mouse">Mouse</option>
              <option value="Keyboard">Keyboard</option>
              <option value="VGA">VGA</option>
              <option value="Processor">Processor</option>
            </select>
            <div
              id="alertDivCategory"
              className="alert alert-danger"
              style={{ display: "none" }}
            />
          </div>
          <div className="form-group mb-4 mt-2">
            <label htmlFor="pformFile" className="form-label">
              Image of Product
            </label>
            <input
                className="btn btn-primary btn-sm d-flex text-light"
                type="file"
                id="pformFile"
                name="pformFile"
                value={productImage}
                onChange={handleInputChange}
                required=""
            />
            <div
                id="alertDivImage"
                className="alert alert-danger"
                style={{ display: "none" }}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="PFeatures">Product Freshness:</label>
            <br />
            <input
                type="radio"
                name="PFeatures"
                value="Brand New"
                checked={productFeatures === 'Brand New'}
                onChange={() => setProductFeatures('Brand New')}
                required=""
            />{" "}
            Brand New
            <br />
            <input
                type="radio"
                name="PFeatures"
                value="Second Hand"
                checked={productFeatures === 'Second Hand'}
                onChange={() => setProductFeatures('Second Hand')}
                required=""
            />{" "}
            Second Hand
            <br />
            <input
                type="radio"
                name="PFeatures"
                value="Refurbished"
                checked={productFeatures === 'Refurbished'}
                onChange={() => setProductFeatures('Refurbished')}
                required=""
            />{" "}
            Refurbished
            <br />
            <div
                id="alertDivFeatures"
                className="alert alert-danger"
                style={{ display: "none" }}
            />
          </div>
          <div className="form-group mb-3 mt-3">
            <label htmlFor="descriptionInput"> Additional Description:</label>
            <br />
            <textarea
                className="form-control"
                name="productDescription"
                id=""
                cols={30}
                rows={10}
                value={additionalDescription}
                onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priceInput">Product Price: </label>
            <br />
            <input
                type="number"
                id="priceInput"
                name="priceInput"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                placeholder="$100"
                className="form-control"
                value={productPrice}
                onChange={handleInputChange}
                required=""
            />
            <div
                id="alertDivPrice"
                className="alert alert-danger"
                style={{ display: "none" }}
            />
          </div>
          <div className=" m-4 d-md-flex justify-content-md-center">
          <button type="submit" className="btn btn-primary btn-block d-grid col-6 mx-auto"  id="submitBtn">
            Submit
          </button>
        </div>
        </form>
        <div className="mt-5">
          <h1>List Product</h1>
          <Table products={products} onSaveEdit={handleSaveEdit} />
        </div>
        <div className="form-group">
        <button type="button" className="btn btn-danger" id="deleteBtn" onClick={handleDelete}>
            Delete
        </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home