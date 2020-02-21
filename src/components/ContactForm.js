import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
    console.log(data);

  };



  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            data-testid="firstName"
            placeholder="Enter Your First Name Here"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            data-testid="lastName"
            placeholder="Enter Your Last Name Here"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" >
            Email*
          </label>
          <input 
            name="email" 
            data-testid="email"
            placeholder="Enter Your E-mail Address Here" 
            ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            name="message" 
            data-testid="message"
            placeholder="Optional" 
            ref={register({ required: false })} />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
