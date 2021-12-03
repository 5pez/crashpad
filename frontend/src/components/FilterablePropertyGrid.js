// I couldn't figure out how I wanted to handle swapping data between Filter and FilterablePropertyGrid,
// so I just made them both the same component.

import axios from "axios";
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

const maxPrice = 2000;

const FilterablePropertyGrid = (props) => {
  const [properties, setProperties] = useState(props.properties);
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState(maxPrice);

  const handleFilterChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handlePriceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };

  const resetSearchField = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (price <= maxPrice) {
      setProperties(
        properties.filter((property) => {
          return property.price <= price;
        })
      );
    }

    if (search.length > 0) {
      setProperties(
        properties.filter((property) => {
          return (
            property.description.toLowerCase().includes(search.toLowerCase()) ||
            property.address.toLowerCase().includes(search.toLowerCase()) ||
            property.city.toLowerCase().includes(search.toLowerCase()) ||
            property.state.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    }
    if (search.length === 0 && price === maxPrice) {
      setProperties(props.properties);
    }
    // console.log(search);
    // console.log(properties);
  }, [search, price]);

  return (
    <>
      <div className="flex flex-wrap justify-center m-4">
        <form
          onSubmit={submitHandler}
          className="content-center w-full max-w-lg"
        >
          <div className="flex items-center border-b border-teal-500 py-2">
            <label
              className="block text-gray-700 text-sm font-bold mr-2"
              htmlFor="search"
            >
              Search...
            </label>
            <input
              name="filter"
              value={search}
              onChange={handleFilterChange}
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              // bug here, if you change price, it'll change placeholder
              placeholder={
                placeholders[Math.floor(Math.random() * placeholders.length)]
              }
              aria-label="filter"
            />

            <button
              className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
              type="button"
              onClick={resetSearchField}
            >
              Clear
            </button>

            <label htmlFor="price">Pad price ${price}</label>
            <input
              className="form-control"
              type="range"
              name="price"
              min="0"
              max={maxPrice}
              step="50"
              id="price"
              value={price}
              onChange={handlePriceChange}
            ></input>
            {/* <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 py-1 px-2 rounded"
          type="submit"
        >
          Filter
        </button> */}
          </div>
        </form>
      </div>

      <div className="container my-2 mx-auto px-4 sm:px-12">
        <div className="flex flex-wrap -mx-1 sm:-mx-4">
          {properties.map((property) => (
            <div
              key={property._id}
              className="my-1 px-1 w-48 md:w-full lg:my-4 lg:px-4 lg:w-1/3"
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
