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

test("There is a label text of 'First Name'", () => {
    const { queryByLabelText } = render(<ContactForm />);
  
    queryByLabelText(/First Name/i);
});

test("There is an Id of 'firstName", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/firstName/i);
});

test("An input field has a placeholder of 'Enter Your First Name Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
  
    getByPlaceholderText(/Enter Your First Name Here/i);
});

///////////// First Name Input Field Test(s) /////////////

test("There is a label text of 'Last Name'", () => {
    const { queryByLabelText } = render(<ContactForm />);
  
    queryByLabelText(/Last Name/i);
});

test("There is an Id of 'lastName", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/lastName/i);
});

test("An input field has a placeholder of 'Enter Your Last Name Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
  
    getByPlaceholderText(/Enter Your Last Name Here/i);
});

///////////// Email Input Field Test(s) /////////////

test("There is a label text of 'Email'", () => {
    const { queryByLabelText } = render(<ContactForm />);
  
    queryByLabelText(/Email/i);
});

test("There is an Id of 'email", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/email/i);
});

test("An input field has a placeholder of 'Enter Your E-mail Address Here'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    
    getByPlaceholderText(/Enter Your E-mail Address Here/i);
});

///////////// Message Input Field Test(s) /////////////

test("There is a label text of 'Message'", () => {
    const { queryByLabelText } = render(<ContactForm />);
  
    queryByLabelText(/Message/i);
});

test("There is an Id of 'message", () => {
    const { queryByTestId } = render(<ContactForm />);

    queryByTestId(/message/i);
});

test("An input field has a placeholder of 'Optional'", () => {
    const { getByPlaceholderText } = render(<ContactForm />);
    
    getByPlaceholderText(/Optional/i);
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