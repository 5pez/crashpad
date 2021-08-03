import React from "react";
import PropertyTable from "./PropertyTable";

const FilterablePropertyTable = (props) => {
  return (
    <div>
      <PropertyTable properties={props.properties} />
    </div>
  );
};
export default FilterablePropertyTable;
