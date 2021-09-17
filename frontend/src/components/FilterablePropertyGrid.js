import React from "react";
import LazyLoad from "react-lazyload";
import PropertyCard from "./PropertyCard";
import Filter from "./Filter";

const FilterablePropertyGrid = (props) => {
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap justify-center">
        <Filter />
      </div>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {props.properties.map((property) => (
          <div
            key={property.id}
            class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          >
            <LazyLoad>
              <PropertyCard properties={property} />
            </LazyLoad>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FilterablePropertyGrid;
