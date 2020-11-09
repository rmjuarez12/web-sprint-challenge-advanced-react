import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  //-- Arrange
  render(<CheckoutForm />);

  //-- Act
  //- Get the header element by text
  const checkoutHeader = screen.getByText(/checkout form/i);

  //-- Assert
  //- Check for the header text to be in the DOM
  expect(checkoutHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  //-- Arrange
  render(<CheckoutForm />);

  //-- Act
  //- Get the input fields by label
  const firstNameField = screen.getByLabelText(/first name/i);
  const lastNameField = screen.getByLabelText(/last name/i);
  const addressField = screen.getByLabelText(/address/i);
  const cityField = screen.getByLabelText(/city/i);
  const stateField = screen.getByLabelText(/state/i);
  const zipField = screen.getByLabelText(/zip/i);

  //- Simulate a change event
  fireEvent.change(firstNameField, { target: { value: "Richard" } });
  fireEvent.change(lastNameField, { target: { value: "Rodriguez" } });
  fireEvent.change(addressField, { target: { value: "12345 sw 10 street" } });
  fireEvent.change(cityField, { target: { value: "Miami" } });
  fireEvent.change(stateField, { target: { value: "FL" } });
  fireEvent.change(zipField, { target: { value: "33194" } });

  //- Simulate a click event
  const button = screen.getByRole("button", { name: /checkout/i });
  fireEvent.click(button);

  //- Get the text that is in the success message
  const successMessage = screen.getByText(/you have ordered some plants!/i);

  //-- Assert
  //- Ensure the change events work as expected
  expect(firstNameField).toHaveValue("Richard");
  expect(lastNameField).toHaveValue("Rodriguez");
  expect(addressField).toHaveValue("12345 sw 10 street");
  expect(cityField).toHaveValue("Miami");
  expect(stateField).toHaveValue("FL");
  expect(zipField).toHaveValue("33194");

  expect(successMessage).toHaveTextContent(
    /You have ordered some plants! Woo-hoo!/
  );
});
