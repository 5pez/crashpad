// I couldn't figure out how I wanted to handle swapping data between Filter and FilterablePropertyGrid,
// so I just made them both the same component.

import React from "react";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import PropertyCard from "./PropertyCard";
// import Filter from "./Filter";

const placeholders = [
  "Cabin",
  "House",
  "Condo",
  "Austin",
  "San Francisco",
  "nature",
  "downtown",
];

const FilterablePropertyGrid = (props) => {
  const [properties, setProperties] = useState(props.properties);
  const [search, setSearch] = useState("");

  const handleFilterChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const resetSearchField = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // todo: add price filters
  useEffect(() => {
    if (search.length > 0) {
      setProperties(
        properties.filter((property) => {
          return (
            property.description.match(search) ||
            property.category.match(search) ||
            property.address.match(search) ||
            property.city.match(search) ||
            property.state.match(search)
          );
        })
      );
    }
    if (search.length === 0) {
      setProperties(props.properties);
    }
    // console.log(search);
    // console.log(properties);
  }, [search]);

  return (
    <>
      <div class="flex flex-wrap justify-center m-4">
        <form onSubmit={submitHandler} class="content-center w-full max-w-lg">
          <div class="flex items-center border-b border-teal-500 py-2">
            <input
              name="filter"
              value={search}
              onChange={handleFilterChange}
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder={
                placeholders[Math.floor(Math.random() * placeholders.length)]
              }
              aria-label="filter"
            />
            {/* <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 py-1 px-2 rounded"
          type="submit"
        >
          Filter
        </button> */}
            <button
              class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
              onClick={resetSearchField}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div class="container my-2 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
          {properties.map((property) => (
            <div
              key={property._id}
              class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <LazyLoad>
                <PropertyCard properties={property} />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default FilterablePropertyGrid;
