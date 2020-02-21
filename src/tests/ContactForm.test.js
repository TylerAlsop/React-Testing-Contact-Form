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

test("An input field has a placeholder of 'Enter Your First Name Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
  
    getByPlaceholderText(/Enter Your First Name Here/i);
  });

test("An input field has a placeholder of 'Enter Your Last Name Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);

    getByPlaceholderText(/Enter Your Last Name Here/i);
});

test("An input field has a placeholder of 'Enter Your E-mail Address Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    
    getByPlaceholderText(/Enter Your E-mail Address Here/i);
});

test("An input field has a placeholder of 'Optional'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    
    getByPlaceholderText(/Optional/i);
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