import React from "react";
const placeholders = [
  "Cabin",
  "House",
  "Flat",
  "Condo",
  "Austin, TX",
  "San Francisco, CA",
];

export default function Filter() {
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
          name="filterText"
          // value={this.state.inputs.filterText}
          // onChange={handleInputChange}
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder={
            placeholders[Math.floor(Math.random() * placeholders.length)]
          }
          aria-label="filterText"
        />
        <button
          class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 py-1 px-2 rounded"
          type="button"
        >
          Filter
        </button>
        <button
          class="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          type="button"
          // onclick={resetInputFields}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
