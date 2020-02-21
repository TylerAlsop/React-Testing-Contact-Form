import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import ContactForm from '../components/ContactForm';
import 'mutationobserver-shim';

///////////// Empty Test Template /////////////

test("", () => {
    const {  } = render(<ContactForm />);
  
    (/yourtexthere/i);
});

///////////// ContactForm Render Test(s) /////////////

test("renders ContactForm without crashing", () => {
  render(<ContactForm />);
});


///////////// Placeholder Text Test(s) /////////////


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

///////////// Submit Test(s) /////////////


///////////// Submit Test(s) /////////////


test("Submit has id", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/submit/i);
})



///////////// Incorrect Syntax / Couldn't Out How Test(s) /////////////


// test("First Name input has a max length", () => {
//   const { getByText } = render(<ContactForm />);

//   getByText(/maxLength/i);
// });


// xdescribe("There is a max length of 3 in the First Name input field", () => {
//     it("max length of 3", () => {
//         expect(input.maxLength).toBe(3))
//     })
// })



// test("Submit button fires when clicked", () => {
//     const { getByTestId } = render(<ContactForm />);

//     fireEvent.click(getByTestId(/submit/i));

// })