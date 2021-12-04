import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

export { default as CreateListing } from "./components/CreateListing";
export { default as FilterablePropertyGrid } from "./components/FilterablePropertyGrid";
export { default as Login } from "./components/Login";
export { default as Navbar } from "./components/Navbar";
export { default as PropertyCard } from "./components/PropertyCard";
export { default as PropertyPage } from "./components/PropertyPage";
export { default as Register } from "./components/Register";
export { default as Privacy } from "./components/Privacy";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
