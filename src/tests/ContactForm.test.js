import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import ContactForm from '../components/ContactForm';
import 'mutationobserver-shim';

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});

// test("First Name input has a max length", () => {
//   const { getByText } = render(<ContactForm />);

//   getByText(/maxLength/i);
// });

test("An input field has a placeholder of 'bill'", () => {
    const { getAllByPlaceholderText } = render(<ContactForm />);
  
    getAllByPlaceholderText(/bill/i);
  });


test("Submit has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/submit/i);
})





// xdescribe("There is a max length of 3 in the First Name input field", () => {
//     it("max length of 3", () => {
//         expect(input.maxLength).toBe(3))
//     })
// })



// test("Submit button fires when clicked", () => {
//     const { getByTestId } = render(<ContactForm />);

//     fireEvent.click(getByTestId(/submit/i));

// })