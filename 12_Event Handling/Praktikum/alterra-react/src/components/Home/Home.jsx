import React, { useState} from 'react';
import './Home.css';
import BootstrapLogo from '../../assets/img/image9.png'
import { handleProductNameChange, handleSubmit, handleProductCategoryChange, handleProductImageChange, handleProductPriceChange } from '../../utils/HandleEvent';
import Article from '../../utils/Article';
import { generateRandomNumber } from '../../utils/GenerateRandomNumber';
import { toggleLanguage } from '../../utils/ToggleLanguage';

const Home = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  
  const [isProductNameValid, setIsProductNameValid] = useState(true);
  const [isProductCategoryValid, setIsProductCategoryValid] = useState(true);
  const [isProductImageValid, setIsProductImageValid] = useState(true);
  const [isProductPriceValid, setIsProductPriceValid] = useState(true);

  const [products, setProducts] = useState([]);
  const [language, setLanguage] = useState('en')

  const [productNameError, setProductNameError] = useState('');
  const [productCategoryError, setProductCategoryError] = useState('');
  const [productPriceError, setProductPriceError] = useState('');

  const handleLanguageToggle = () => {
    toggleLanguage(language, setLanguage);
  };

  
  return (
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="bootstrap-logo align-items-center">
        <img src={BootstrapLogo} alt="" />
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
        <form className="needs-validation" noValidate="" onSubmit={(event) => handleSubmit(
          event,
          productName,
          productCategory,
          productImage,
          productPrice,
          products,
          setProducts,
          setProductName,
          setProductCategory,
          setProductImage,
          setProductPrice,
          setIsProductNameValid,
          setIsProductCategoryValid,
          setIsProductImageValid,
          setIsProductPriceValid)}>
          <div className="form-group mt-4">
            <label htmlFor="pname">Product Name: </label>
            <input
              type="text"
              className="form-control"
              id="pname"
              name="pname"
              value={productName}
              onChange={(e) => handleProductNameChange(e,setProductName,setIsProductNameValid,setProductNameError)} 
              required=""
              min={6}
              max={50}
            />
            {productNameError && <div className="error text-danger">{productNameError}</div>}
            <div
              id="alertDivName"
              className="alert alert-danger"  
              style={{ display: 'none' }}
            >
        </div>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="pCategory">Product Category: </label>
            <select
              className={`form-control text-dark ${isProductCategoryValid ? '' : 'is-invalid'}`}
              id="pCategory"
              name="pCategory"
              value={productCategory}
              onChange={(e) => handleProductCategoryChange(e,setProductCategory,setIsProductCategoryValid,setProductCategoryError)} 
              required=""
            >
              <option className="text-light" value="" disabled="">
                Choose...
              </option>
              <option value="Mouse">Mouse</option>
              <option value="Keyboard">Keyboard</option>
              <option value="VGA">VGA</option>
              <option value="Processor">Processor</option>
            </select>
            {productCategoryError && <div className="error text-danger">{productCategoryError}</div>}
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
              className = {`btn btn-primary btn-sm d-flex text-light ${isProductImageValid ? '' : 'is-invalid'}`}
              type="file"
              id="pformFile"
              name="pformFile"
              value={productImage}
              onChange={(e) => handleProductImageChange(e,setProductImage,setIsProductImageValid)} 
              required=""
            />
            <div className="invalid-feedback">
                {isProductImageValid ? null : 'Please Input File'}
            </div>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="PFeatures">Product Freshness:</label>
            <br />
            <input
              type="radio"
              name="PFeatures"
              defaultValue="Brand New"
              required=""
            />{" "}
            Brand New
            <br />
            <input
              type="radio"
              name="PFeatures"
              defaultValue="Second Hand"
              required=""
            />{" "}
            Second Hand
            <br />
            <input
              type="radio"
              name="PFeatures"
              defaultValue="Refurbished"
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
          <div className="form-group mt-3">
            <label htmlFor="descriptionInput"> Additional Description:</label>
            <br />
            <textarea
              className="form-control"
              name=""
              id=""
              cols={30}
              rows={10}
              defaultValue={""}
            />
          </div>
          <div className="form-group mt-3 mb-3">
            <label htmlFor="priceInput">Product Price: </label>
            <br />
            <input
              type="number"
              id="priceInput"
              name="priceInput"
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder="$100"
              className = {`form-control ${isProductPriceValid ? '' : 'is-invalid'}`}
              value={productPrice}
              onChange={(e) => handleProductPriceChange(e,setProductPrice,setIsProductPriceValid,setProductPriceError)} 
              required=""
            />
            {productPriceError && <div className="error text-danger">{productPriceError}</div>}
            <div
              id="alertDivPrice"
              className="alert alert-danger"
              style={{ display: "none" }}
            />
          </div>
          <div className=" m-4 d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              id="submitBtn"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home