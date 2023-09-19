import React from 'react';
import './Home.css';
import BootstrapLogo from '../../assets/img/image9.png'

const Home = () => {
  return (
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="bootstrap-logo">
        <img src={BootstrapLogo} alt="" />
      </div>
      <h1>Create Product</h1>
      <p>
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.{" "}
      </p>
      <div className="forms">
        <form className="needs-validation" noValidate="">
          <div className="form-group">
            <label htmlFor="pname">Product Name: </label>
            <input
              type="text"
              className="form-control"
              id="pname"
              name="pname"
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
          <div className="form-group mt-2">
            <label htmlFor="pCategory">Product Category: </label>
            <select
              className="form-control text-dark"
              id="pCategory"
              name="pCategory"
              required=""
            >
              <option className="text-light" value="" selected="" disabled="">
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
              required=""
            />
            <div
              id="alertDivImage"
              className="alert alert-danger"
              style={{ display: "none" }}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="PFeatures">Product Features:</label>
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
          <div className="form-group mt-3">
            <label htmlFor="priceInput">Product Price: </label>
            <br />
            <input
              type="number"
              id="priceInput"
              name="priceInput"
              pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
              placeholder="$100"
              className="form-control"
              required=""
            />
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