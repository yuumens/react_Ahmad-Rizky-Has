const initialState = {
  products: [
    {
      id: "1",

      productName: "John",

      productCategory: "Doe",

      productFreshness: "Doe",

      productPrice: "Doe",

      productImage: "Doe",

      additionalDescription: "Doe",
    },
    {
      id: "2",

      productName: "John",

      productCategory: "Doe",

      productFreshness: "Doe",

      productPrice: "Doe",

      productImage: "Doe",

      additionalDescription: "Doe",
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      const newProduct = action.payload;
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case "EDIT_PRODUCT":
      const updatedProduct = action.payload;
      const updatedProducts = state.products.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      );
      return {
        ...state,
        products: updatedProducts,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default productReducer;
