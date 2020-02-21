import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import ContactForm from '../components/ContactForm';
import 'mutationobserver-shim';

xtest("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

// test("First Name input has a max length", () => {
//   const { getByTestId } = render(<ContactForm />);

//   getByTestId(/maxLength/i);
// });

test("First Name input has a max length", () => {
    const { getByTestId } = render(<ContactForm />);
  
    getByTestId(/maxLength/i);
  });