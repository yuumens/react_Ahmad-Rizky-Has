export const editProduct = (product) => ({
  type: "EDIT_PRODUCT",
  payload: product,
});

export const createProduct = (product) => ({
  type: "CREATE_PRODUCT",
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: "DELETE_PRODUCT",
  payload: productId,
});
