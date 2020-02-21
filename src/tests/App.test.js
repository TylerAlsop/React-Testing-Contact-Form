import React from "react";
import { render, getByText } from "@testing-library/react";
import App from '../App';
import 'mutationobserver-shim';

xtest("renders App without crashing", () => {
  render(<App />);
});