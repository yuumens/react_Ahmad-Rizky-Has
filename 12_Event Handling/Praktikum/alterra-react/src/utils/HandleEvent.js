// export function handleInputChange(event,productName,setProductName) {
//   const { name, value } = event.target;
//   if (name === "pname") {
//     setProductName(value);
//     setIsProductNameValid(isProductNameValid(true));
//   } else if (name === "pCategory") {
//     setProductCategory(value);
//     setIsProductCategoryValid(isProductCategoryValid(true));
//   }
// }

export function isProductNameValid(productName) {
  return !!productName;
}

export function handleProductNameChange(
  event,
  setProductName,
  setIsProductNameValid,
  setProductNameError
) {
  const value = event.target.value;
  setProductName(value);

  if (value.trim() === "") {
    setIsProductNameValid(false);
  } else {
    setIsProductNameValid(true);
  }

  if (value.length > 25) {
    setProductNameError("Product Name must not exceed 25 characters.");
  } else {
    setProductNameError("");
  }
}

export function isProductCategoryValid(productCategory) {
  return !!productCategory;
}

export function handleProductCategoryChange(
  event,
  setProductCategory,
  setIsProductCategoryValid,
  setProductCategoryError
) {
  const value = event.target.value;
  setProductCategory(value);

  if (value === "") {
    setIsProductCategoryValid(false);
    setProductCategoryError("Please Select Product Category");
  } else {
    setIsProductCategoryValid(true);
    setProductCategoryError("");
  }
}

export function isProductImageValid(productImage) {
  return !!productImage;
}

export function handleProductImageChange(
  event,
  setProductImage,
  setIsProductImageValid
) {
  const value = event.target.value;
  setProductImage(value);

  if (value === "") {
    setIsProductImageValid(false);
  } else {
    setIsProductImageValid(true);
  }
}

export function isProductPriceValid(productPrice) {
  return !!productPrice;
}

export function handleProductPriceChange(
  event,
  setProductPrice,
  setIsProductPriceValid,
  setProductPriceError
) {
  const value = event.target.value;
  setProductPrice(value);

  if (value === "") {
    setIsProductPriceValid(false);
  } else {
    setIsProductPriceValid(true);
  }

  if (value.trim() === "" || isNaN(value) || parseFloat(value) <= 0) {
    setProductPriceError("Please enter a valid product price.");
  } else {
    setProductPriceError("");
  }
}

export function handleSubmit(
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
  setIsProductPriceValid
) {
  event.preventDefault();

  console.log("productName:", productName);
  console.log("productCategory:", productCategory);
  console.log("productImage:", productImage);

  if (!isProductNameValid(productName)) {
    alert("Please enter a valid product name");
    return;
  }

  // if (productName.length > 25) {
  //   alert("Product Name must not exceed 25 characters.");
  //   return;
  // }

  if (productName && productCategory && productImage && productPrice) {
    const product = {
      productName,
      productCategory,
      productImage,
      productPrice,
    };

    setProducts([...products, product]);
    // Clear form fields
    setProductName("");
    setProductCategory("");
    setProductImage("");
    setProductPrice("");

    setIsProductNameValid(true);
    setIsProductCategoryValid(true);
    setIsProductImageValid(true);
    setIsProductPriceValid(true);
  } else {
    setIsProductNameValid(false);
    setIsProductCategoryValid(false);
    setIsProductImageValid(false);
    setIsProductPriceValid(false);
  }
}

// const handleSubmit = (event) => {
//   event.preventDefault();
//   if (
//     productName &&
//     productCategory &&
//     productImage &&
//     productFeatures &&
//     productPrice
//   ) {
//     const product = {
//       productName,
//       productCategory,
//       productImage,
//       additionalDescription,
//       productFeatures,
//       productPrice,
//     };

//     setProducts([...products, product]);

//     // Clear form fields
//     setProductName("");
//     setProductCategory("");
//     setProductImage("");
//     setAdditionalDescription("");
//     setProductFeatures("");
//     setProductPrice("");
//     setIsProductNameValid(true); // Setelah submit, validasi Product Name direset
//   } else {
//     setIsProductNameValid(false); // Jika Product Name kosong, tampilkan pesan kesalahan
//   }
// };
