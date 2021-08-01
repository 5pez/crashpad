import React from "react";
import "./App.css";
import FilterablePropertyTable from "./components/FilterablePropertyTable";

import PROPERTIES from "./properties.json";

function App() {
  // console.log(PropertyS);
  return <FilterablePropertyTable properties={PROPERTIES} />;
}

export default App;
