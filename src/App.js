import React from "react";
import "./App.css";
import FilterablePropertyGrid from "./components/FilterablePropertyGrid";
import Navbar from "./components/Navbar";

import PROPERTIES from "./properties.json";

function App() {
  return (
    <>
      <Navbar />
      <FilterablePropertyGrid properties={PROPERTIES} />
    </>
  );
}

export default App;
