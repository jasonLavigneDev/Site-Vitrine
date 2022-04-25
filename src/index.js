import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './style/index.scss';
import App from './App';
console.log("je sert a rien")

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);