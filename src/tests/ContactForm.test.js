import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import ContactForm from '../components/ContactForm';
import 'mutationobserver-shim';

xtest("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

xtest("First Name input has a max length", () => {
  const { getByText } = render(<ContactForm />);

  getByText(/maxLength/i);
});

xtest("All input fields have a placeholder", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
  
    getByPlaceholderText('');
  });

// xdescribe("There is a max length of 3 in the First Name input field", () => {
//     it("max length of 3", () => {
//         expect(input.maxLength).toBe(3))
//     })
// })

test("Submit has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/submit/i);
})

// test("Submit button fires when clicked", () => {
//     const { getByTestId } = render(<ContactForm />);

//     fireEvent.click(getByTestId(/submit/i));

// })