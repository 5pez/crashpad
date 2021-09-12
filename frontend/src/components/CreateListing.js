import React, { Component } from "react";
import axios from "axios";

export default class CreateListing extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangePropertyAddress = this.onChangePropertyAddress.bind(this);
    this.onChangePropertyCity = this.onChangePropertyCity.bind(this);
    this.onChangePropertyState = this.onChangePropertyState.bind(this);
    this.onChangePropertyCountry = this.onChangePropertyCountry.bind(this);
    this.onChangePropertyPrice = this.onChangePropertyPrice.bind(this);
    this.onChangePropertyBedrooms = this.onChangePropertyBedrooms.bind(this);
    this.onChangePropertyBathrooms = this.onChangePropertyBathrooms.bind(this);
    this.onChangePropertyDescription =
      this.onChangePropertyDescription.bind(this);
    this.onChangePropertyImage = this.onChangePropertyImage.bind(this);
    this.onChangePropertyAmmenities =
      this.onChangePropertyAmmenities.bind(this);

    // Setting up state
    this.state = {
      propertyAddress: "",
      propertyCity: "",
      propertyState: "",
      propertyCountry: "",
      propertyPrice: "",
      propertyBedrooms: "",
      propertyBathrooms: "",
      propertyDescription: "",
      propertyImage: "",
      propertyAmmenities: "",
    };
  }
  onChangePropertyAddress(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyCity(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyState(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyCountry(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyPrice(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyBedrooms(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyBathrooms(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyDescription(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyImage(e) {
    this.setState({ name: e.target.value });
  }
  onChangePropertyAmmenities(e) {
    this.setState({ name: e.target.value });
  }
  //todo: fix this error PLEASE
  // render() {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-6 mt-5 mx-auto">
  //           <form noValidate onSubmit={this.onSubmit}>
  //             <h1 className="h3 mb-3 font-weight-normal">
  //               Create Listing
  //             </h1>
  //             <div className="form-group">
  //               <label htmlFor="address">Address</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 name="address"
  //                 placeholder="1234 Main St"
  //                 value={this.state.address}
  //                 onChange={this.onChangePropertyAddress}
  //               />
  //             </div>
  //             <div className="form-group">
  //               <label htmlFor="city">City</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 name="city"
  //                 placeholder="City"
  //                 value={this.state.city}
  //                 onChange={this.onChangePropertyCity}

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
    };
    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => console.log(res.data));

    this.setState({ name: "", email: "", rollno: "" });
  }

  render() {
    return (
      <>
        <h1 class="flex justify-center font-bold text-gray-800 text-2xl py-4">
          Create Listing
        </h1>
        <div class="flex justify-center h-screen">
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-address"
                >
                  Address
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-address"
                  type="text"
                  placeholder="1600 Pennsylvania Ave"
                ></input>
                {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
              </div>
              <div class="w-full md:w-1/4 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-bedrooms"
                >
                  Guest beds
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-bedrooms"
                  type="text"
                  placeholder="3"
                ></input>
              </div>
              <div class="w-full md:w-1/4 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-baths"
                >
                  Guest baths
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-baths"
                  type="text"
                  placeholder="2.5"
                ></input>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-description"
                >
                  Description
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-description"
                  type="text"
                  placeholder="Beautiful private island for 2!"
                ></input>
                <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-description"
                >
                  Ammenities
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-description"
                  type="text"
                  placeholder="coffee machine, washer/dryer, pool..."
                ></input>
                <p class="text-gray-600 text-xs italic">
                  Make sure these are comma separated
                </p>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-description"
                >
                  Image
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-description"
                  type="text"
                  placeholder="https://images.unsplash.com/photo-1449158..."
                ></input>
                <p class="text-gray-600 text-xs italic">Only links for now</p>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  City
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-city"
                  type="text"
                  placeholder="Austin"
                ></input>{" "}
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  State
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>Texas</option>
                    <option>Missouri</option>
                    <option>New Mexico</option>
                    <option>California</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Zip
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder="78701"
                ></input>
              </div>
              <div class="w-full md:w-full px-3 mb-6 md:mb-0 py-8">
                <button class="w-full bg-yellow-500 rounded px-24 py-4 text-lg font-semibold text-white mr-1 focus:ring-4 focus:ring-yellow-300 focus:ring-inset">
                  Create Listing
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
