import React from "react";
import { useState, useEffect } from "react";

const placeholders = [
  "Cabin",
  "House",
  "Flat",
  "Condo",
  "Austin, TX",
  "San Francisco, CA",
];

export default function Filter(props) {
  const [properties, setProperties] = useState(props.properties);
  const [search, setSearch] = useState("");

  const handleFilterChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length > 0) {
      setProperties(
        properties.filter((property) => {
          return property.description.match(search);
        })
      );
    }
    if (search.length === 0) {
      setProperties(props.properties);
    }
    console.log(search);
    console.log(properties);
  }, [search]);

  // let handleInputChange = (e) => {
  //   let { name, value } = e.target;
  //   this.setState({
  //     ...this.state,
  //     inputs: {
  //       [name]: value,
  //     },
  //   });
  // };
  // let resetInputFields = () => {
  //   this.setState({ inputs: {} });
  // };

  return (
    <form class="content-center w-full max-w-lg">
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
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 py-1 px-2 rounded"
          type="submit"
        >
          Filter
        </button>
        <button
          class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
          // onClick={() => setSearch("")}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
