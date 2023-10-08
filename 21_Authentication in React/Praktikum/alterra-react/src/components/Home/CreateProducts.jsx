import React, { useEffect, useState } from 'react';
import './CreateProducts.css';
import BootstrapLogo from '../assets/img/image-9.png';
import Article from '../utils/Article';
import { generateRandomNumber } from '../utils/GenerateRandomNumber';
import { toggleLanguage } from '../utils/ToggleLanguage';
import { useForm, Controller } from 'react-hook-form';
import { Navigate, useNavigate  } from 'react-router-dom';
import Tables from '../Data/Tables';
import axios from 'axios';
import auth from '../utils/auth';

const CreateProducts = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [products, setProducts] = useState([]);
  const [language, setLanguage] = useState('en');
  const navigate = useNavigate();

  const productNameRegex = /^[A-Za-z0-9\s\-']+$/;

  useEffect(() => {
    const isUserLoggedIn = auth.isLoggedIn();
    if (!isUserLoggedIn ) {
      navigate('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLanguageToggle = () => {
    toggleLanguage(language, setLanguage);
  };
  
  const sendAPIData = async (data) =>{
      try {
    const response = await axios.post('https://65209e90906e276284c494cd.mockapi.io/product', data);

    if (response.status === 201) {
      alert('Data produk berhasil disimpan');
    }
  } catch (error) {
    alert('Gagal menyimpan data produk');
  }
};

  const onSubmit = (data) => {
    
    const {
      productName,
      productCategory,
      productImage,
      productFreshness,
      additionalDescription,
      productPrice,
    } = data;
    
    const uniqueId = generateRandomId();
    
    const product = {
      id: uniqueId,
      productName,
      productCategory,
      productImage,
      productFreshness,
      additionalDescription,
      productPrice,
    };
    // console.log(data)
    console.log("Product Name : ", productName)
    console.log("Product Category : ", productCategory)
    console.log("Product Image : ", productImage)
    console.log("Product Freshness : ", productFreshness)

    sendAPIData(product);
    setProducts([...products, product]);
    reset(); // Reset form fields
  };

  const generateRandomId = () => {
    let uniqueId;
    do {
      uniqueId = Math.floor(Math.random() * 1000);
    // eslint-disable-next-line no-loop-func
    } while (products.some((product) => product.id === uniqueId));

    return uniqueId;
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="bootstrap-logo">
            <img src={BootstrapLogo}alt="" />
          </div>
            <div className="titlecontainer">
              <h1>{Article.title[language]}</h1>
              <p>
                {Article.description[language]}
              </p>
            </div>
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
          <form className="needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-3 mt-3">
              <label htmlFor="productName">Product Name :</label>
              <Controller
                name="productName"
                control={control}
                rules={{
                  required: 'Product Name is required',
                  pattern: {
                    value: productNameRegex,
                    message: 'Invalid Product Name',
                  },
                }}
                defaultValue="" // Tambahkan defaultValue di sini
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className={`form-control ${errors.productName ? 'is-invalid' : ''} mt-1`}
                    placeholder="Product Name"
                  />
                )}
              />
              {errors.productName && (
                <div className="invalid-feedback">{errors.productName.message}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="productCategory">Product Category :</label>
              <Controller
                name="productCategory"
                control={control}
                rules={{
                  required: 'Product Category is required',
                }}
                defaultValue=""
                render={({ field }) => (
                  <select
                    {...field}
                    className={`form-select ${errors.productCategory ? 'is-invalid' : ''} mt-1`}
                    required=""
                  >
                    <option className="text-light" value="" disabled>
                      Choose...
                    </option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keyboard">Keyboard</option>
                    <option value="VGA">VGA</option>
                    <option value="Processor">Processor</option>
                  </select>
                )}
              />
              {errors.productCategory && (
                <div className="invalid-feedback">{errors.productCategory.message}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="productImage">Product Image :</label>
              <Controller
                name="productImage"
                control={control}
                rules={{
                  required: 'Product Image is required',
                  validate: {
                    validImageFormat: (value) => {
                      if (!value || !value[0]) return true;
                      const allowedFormats = ['jpeg', 'jpg', 'png', 'gif']; 
                      const fileName = value[0].name;
                      if (!fileName) return true; 
                      const fileExtension = fileName.split('.').pop().toLowerCase();
                      return allowedFormats.includes(fileExtension);
                    },
                  },
                }}
                defaultValue="" 
                render={({ field }) => (
                  <input
                    {...field}
                    type="file"
                    className={`form-control file-upload ${errors.productImage ? 'is-invalid' : ''} mt-1 `}
                    accept="image/*"
                  />
                )}
              />
              {errors.productImage && (
                <div className="invalid-feedback">{errors.productImage.message}</div>
              )}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="productFreshness">Product Freshness:</label>
              <Controller
                name="productFreshness"
                control={control}
                rules={{ required: 'Product Freshness is required' }}
                defaultValue={''}
                render={({ field }) => (
                  <div className="form-check mt-1">
                    <input
                      {...field}
                      type="radio"
                      className="form-check-input"
                      // id="brandNew"
                      value="Brand New"
                    />{' '}
                    Brand New
                    <br />
                    <input
                      {...field}
                      type="radio"
                      className="form-check-input"
                      // id="secondHand"
                      value="Second Hand"
                    />{' '}
                    Second Hand
                    <br />
                    <input
                      {...field}
                      type="radio"
                      className="form-check-input"
                      // id="refurbished"
                      value="Refurbished"
                    />{' '}
                    Refurbished
                  </div>
                )}
              />
              {errors.productFreshness && (
                <p className="error-message text-danger fs-6 mt-1">{errors.productFreshness.message}</p>
              )}
            </div>
            <div className="form-group mb-3">
            <label htmlFor="descriptionInput" className='mb-1'>Additional Description:</label>
              <br />
              <Controller
                name="additionalDescription"
                control={control}
                rules={{ required: 'Additional Description is required' }}
                defaultValue=""
                render={({ field }) => (
                  <textarea
                  className={`form-control ${errors.additionalDescription ? 'is-invalid' : ''}`}
                    name="productDescription"
                    id=""
                    cols={30}
                    rows={10}
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.additionalDescription && (
                <div className="invalid-feedback">{errors.additionalDescription.message}</div>
              )}
            </div>
            <div className="form-group mb-5">
            <label htmlFor="priceInput">Product Price: </label>
              <br />
              <Controller
                name="productPrice"
                control={control}
                rules={{ required: 'Product Price is required' }}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="number"
                    id="priceInput"
                    name="priceInput"
                    placeholder="$100"
                    className={`form-control ${errors.productPrice ? 'is-invalid' : ''}`}
                    value={field.value}
                    onChange={field.onChange}
                    required=""
                  />
                )}
              />
              {errors.productPrice && (
                <div className="invalid-feedback">{errors.productPrice.message}</div>
              )}
            </div>
            {/* ... Field lainnya ... */}
              <div className=" m-4 d-md-flex justify-content-md-center">
                <button type="submit" className="btn btn-primary btn-block d-grid col-6 mx-auto"  id="submitBtn">
                Submit
                </button>
              </div>
          </form>
          <div className="mt-5">
          <h1>List Product</h1>
          <Tables />
        </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
