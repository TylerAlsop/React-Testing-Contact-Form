import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import ContactForm from '../components/ContactForm';
import 'mutationobserver-shim';

///////////// Test(s) Empty Template /////////////

test("", () => {
    const {  } = render(<ContactForm />);
  
    (/yourtexthere/i);
});

///////////// ContactForm Render Test(s) /////////////

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
  });

///////////// First Name Input Field Test(s) /////////////

test("There is a label text of 'First Name*'", () => {
    const { getByText } = render(<ContactForm />);
  
    getByText("First Name*");
});

test("There is an Id of 'firstName", () => {
    const { getByTestId } = render(<ContactForm />);

    getByTestId("firstName");
});

test("An input field has a placeholder of 'Enter Your First Name Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
  
    getByPlaceholderText("Enter Your First Name Here");
});

///////////// First Name Input Field Test(s) /////////////

test("There is a label text of 'Last Name*'", () => {
    const { getByText } = render(<ContactForm />);
  
    getByText("Last Name*");
});

test("There is an Id of 'lastName", () => {
    const { getByTestId } = render(<ContactForm />);

    getByTestId("lastName");
});

test("An input field has a placeholder of 'Enter Your Last Name Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
  
    getByPlaceholderText("Enter Your Last Name Here");
});

///////////// Email Input Field Test(s) /////////////

test("There is a label text of 'Email*'", () => {
    const { getByText } = render(<ContactForm />);
  
    getByText("Email*");
});

test("There is an Id of 'email", () => {
    const { getByTestId } = render(<ContactForm />);

    getByTestId("email");
});

test("An input field has a placeholder of 'Enter Your E-mail Address Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    
    getByPlaceholderText("Enter Your E-mail Address Here");
});

///////////// Message Input Field Test(s) /////////////

test("There is a label text of 'Message'", () => {
    const { getByText } = render(<ContactForm />);
  
    getByText("Message");
});

test("There is an Id of 'message", () => {
    const { getByTestId } = render(<ContactForm />);

    getByTestId("message");
});

test("An input field has a placeholder of 'Optional'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    
    getByPlaceholderText("Optional");
});


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