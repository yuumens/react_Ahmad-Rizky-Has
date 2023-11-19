import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CreateProducts from "../CreateProducts";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { MemoryRouter } from "react-router-dom";

test("Input Product Name can accept and display text input", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProducts />
      </MemoryRouter>
    </Provider>
  );

  const productNameInput = screen.getByLabelText("Product Name :");

  fireEvent.change(productNameInput, { target: { value: "Test Product" } });

  expect(productNameInput.value).toBe("Test Product");
});

test("Selected Product Category and Freshness options are displayed correctly", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProducts />
      </MemoryRouter>
    </Provider>
  );
  const productCategorySelect = screen.getByLabelText("Product Category :");
  const brandNewRadioSelect = screen.getByLabelText("Brand New");
  const refurbishedRadioSelect = screen.getByLabelText("Refurbished");

  fireEvent.change(productCategorySelect, { target: { value: "Mouse" } });
  fireEvent.click(brandNewRadioSelect);

  expect(productCategorySelect.value).toBe("Mouse");
  expect(brandNewRadioSelect.checked).toBe(true);
  expect(refurbishedRadioSelect.checked).toBe(false);
});

test("Product Name is required when empty and  not contain special characters", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProducts />
      </MemoryRouter>
    </Provider>
  );

  const productNameInputs = screen.getByLabelText("Product Name :");

  fireEvent.change(productNameInputs, {
    target: { value: "~!@#$%^&*(){}|:;" },
  });

  expect(screen.getByTestId("product-name-error")).toBeInTheDocument();
});

test("Product Name must not exceed 25 characters", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProducts />
      </MemoryRouter>
    </Provider>
  );

  const productNameInputs = screen.getByLabelText("Product Name :");

  fireEvent.change(productNameInputs, {
    target: { value: "Ini Contoh Nama Produk Dengan 25 Karakter" },
  });

  expect(
    screen.queryByText("Product name must not exceed 25 characters")
  ).not.toBeInTheDocument();
});

test("All form fields must not be empty", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <CreateProducts />
      </MemoryRouter>
    </Provider>
  );

  const productCategoryInputs = screen.getByLabelText("Product Category :");
  const brandNewRadioSelect = screen.getByLabelText("Brand New");

  fireEvent.change(productCategoryInputs, { target: { value: "sneaker" } });
  fireEvent.click(brandNewRadioSelect);

  expect(
    screen.queryByText("Product Category is required")
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText("This Condition is Required")
  ).not.toBeInTheDocument();
});
