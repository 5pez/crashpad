import React from "react";
import SearchBar from "./SearchBar";
import PropertyTable from "./PropertyTable";

const FilterablePropertyTable = (props) => {
  console.log(props);
  return (
    <div>
      <SearchBar />
      <PropertyTable properties={props.properties} />
    </div>
  );
};
export default FilterablePropertyTable;
