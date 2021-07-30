import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = (props) => {
  console.log(props);
  return (
    <div>
      <SearchBar />
      <ProductTable products={props.products} />
    </div>
  );
};
export default FilterableProductTable;
