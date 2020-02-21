import React from "react";
import { render, getByText } from "@testing-library/react";
import App from "../App";
import ContactForm from '../components/ContactForm';
import 'mutationobserver-shim';

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

test("First Name input has a max length", () => {
  const { gitByTestId } = render(<ContactForm />);

  getByTestID(/maxLength/i);
});