import React from "react";
import "./App.css";
import FilterablePropertyTable from "./components/FilterablePropertyTable";
import Navbar from "./components/Navbar";

import PROPERTIES from "./properties.json";

function App() {
  return (
    <>
      <Navbar />
      <FilterablePropertyTable properties={PROPERTIES} />;
    </>
  );
}

export default App;
