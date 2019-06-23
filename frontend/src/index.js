import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
const GloableStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.form-control label,
.form-control input,
.form-control textarea {
  width: 100%;
  display: block;
}

.form-control label {
  margin-bottom: 0.5rem;
}

.form-control {
  margin-bottom: 1rem;
}

.form-actions button,
.btn {
  background: #5101d1;
  font: inherit;
  border: 1px solid #5101d1;
  border-radius: 3px;
  padding: 0.25rem 1rem;
  margin-right: 1rem;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.26);
  color: white;
  cursor: pointer;
}

.form-actions button:hover,
.form-actions button:active,
.btn:hover,
.btn:active {
  background: #6219d6;
  border-color: #6219d6;
}

`;
import App from "./App";

ReactDOM.render(
  <>
    <Reset />
    <GloableStyle />
    <App />
  </>,
  document.getElementById("root")
);
