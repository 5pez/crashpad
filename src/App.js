import React from "react";
import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

import PRODUCTS from "./products.json";

function App() {
  // console.log(PRODUCTS);
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App;
