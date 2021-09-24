import React, { Component } from "react";
import axios from "axios";

///TODO: Redo this component with hooks
// use npm package Multer for image upload

export default class CreateListing extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangePropertyCategory = this.onChangePropertyCategory.bind(this);
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
    this.onChangePropertyZip = this.onChangePropertyZip.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      category: "",
      address: "",
      city: "",
      state: "",
      country: "",
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      description: "",
      image: "",
      ammenities: "",
      zip: 0,
    };
  }
  onChangePropertyCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }
  onChangePropertyAddress(e) {
    this.setState({ address: e.target.value });
  }
  onChangePropertyCity(e) {
    this.setState({ city: e.target.value });
  }
  onChangePropertyState(e) {
    this.setState({ state: e.target.value });
  }
  onChangePropertyCountry(e) {
    this.setState({ country: e.target.value });
  }
  onChangePropertyPrice(e) {
    this.setState({ price: e.target.value });
  }
  onChangePropertyBedrooms(e) {
    this.setState({ bedrooms: e.target.value });
  }
  onChangePropertyBathrooms(e) {
    this.setState({ bathrooms: e.target.value });
  }
  onChangePropertyDescription(e) {
    this.setState({ description: e.target.value });
  }
  onChangePropertyImage(e) {
    this.setState({ image: e.target.value });
  }
  onChangePropertyAmmenities(e) {
    this.setState({ ammenities: e.target.value });
  }
  onChangePropertyZip(e) {
    this.setState({ zip: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const propertyObject = {
      category: this.state.category,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      price: this.state.price,
      bedrooms: this.state.bedrooms,
      bathrooms: this.state.bathrooms,
      description: this.state.description,
      image: this.state.image,
      ammenities: this.state.ammenities,
      zip: this.state.zip,
    };
    if (
      axios
        .post(
          "http://localhost:4000/properties/create-property",
          propertyObject
        )
        .then((res) => console.log(res.data))
    )
      alert("Successfully created property");
    else alert("Error creating property");

    console.log(`Property successfully sent!`);

    this.setState({
      category: "",
      address: "",
      city: "",
      state: "",
      country: "",
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      description: "",
      image: "",
      ammenities: "",
      zip: 0,
    });
  }

  render() {
    return (
      <>
        <h1 class="flex justify-center font-bold text-gray-800 text-2xl py-4">
          Create Listing
        </h1>
        <div class="flex justify-center h-screen">
          <form onSubmit={this.onSubmit} class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-address"
                >
                  Category
                </label>
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-category"
                  value={this.state.category}
                  onChange={this.onChangePropertyCategory}
                >
                  <option value="None">---</option>
                  <option value="Cabin">Cabin</option>
                  <option value="Condo">Condo</option>
                  <option value="House">House</option>
                  <option value="Other">Other</option>
                </select>
              </div>
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
                  placeholder="1234 Main St."
                  type="text"
                  value={this.state.address}
                  onChange={this.onChangePropertyAddress}
                ></input>
                {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
              </div>
              <div class="w-full md:w-1/4 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-price"
                >
                  Price ($ USD)
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-price"
                  type="number"
                  min="0"
                  placeholder="80"
                  value={this.state.price}
                  onChange={this.onChangePropertyPrice}
                ></input>
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
                  type="number"
                  min="0"
                  placeholder="2"
                  value={this.state.bedrooms}
                  onChange={this.onChangePropertyBedrooms}
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
                  type="number"
                  min="0"
                  placeholder="1.5"
                  value={this.state.bathrooms}
                  onChange={this.onChangePropertyBathrooms}
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
                  value={this.state.description}
                  onChange={this.onChangePropertyDescription}
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
                  value={this.state.ammenities}
                  onChange={this.onChangePropertyAmmenities}
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
                  value={this.state.image}
                  onChange={this.onChangePropertyImage}
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
                  value={this.state.city}
                  onChange={this.onChangePropertyCity}
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
                    value={this.state.state}
                    onChange={this.onChangePropertyState}
                  >
                    // That's a lot of states!
                    <option value="---">---</option>
                    <option value="Alabama">Alabama</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Arkansas">Arkansas</option>
                    <option value="California">California</option>
                    <option value="Colorado">Colorado</option>
                    <option value="Connecticut">Connecticut</option>
                    <option value="Delaware">Delaware</option>
                    <option value="District of Columbia">
                      District of Columbia
                    </option>
                    <option value="Florida">Florida</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Guam">Guam</option>
                    <option value="Hawaii">Hawaii</option>
                    <option value="Idaho">Idaho</option>
                    <option value="Illinois">Illinois</option>
                    <option value="Indiana">Indiana</option>
                    <option value="Iowa">Iowa</option>
                    <option value="Kansas">Kansas</option>
                    <option value="Kentucky">Kentucky</option>
                    <option value="Louisiana">Louisiana</option>
                    <option value="Maine">Maine</option>
                    <option value="Maryland">Maryland</option>
                    <option value="Massachusetts">Massachusetts</option>
                    <option value="Michigan">Michigan</option>
                    <option value="Minnesota">Minnesota</option>
                    <option value="Mississippi">Mississippi</option>
                    <option value="Missouri">Missouri</option>
                    <option value="Montana">Montana</option>
                    <option value="Nebraska">Nebraska</option>
                    <option value="Nevada">Nevada</option>
                    <option value="New Hampshire">New Hampshire</option>
                    <option value="New Jersey">New Jersey</option>
                    <option value="New Mexico">New Mexico</option>
                    <option value="New York">New York</option>
                    <option value="North Carolina">North Carolina</option>
                    <option value="North Dakota">North Dakota</option>
                    <option value="Northern Marianas Islands">
                      Northern Marianas Islands
                    </option>
                    <option value="Ohio">Ohio</option>
                    <option value="Oklahoma">Oklahoma</option>
                    <option value="Oregon">Oregon</option>
                    <option value="Pennsylvania">Pennsylvania</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Rhode Island">Rhode Island</option>
                    <option value="South Carolina">South Carolina</option>
                    <option value="South Dakota">South Dakota</option>
                    <option value="Tennessee">Tennessee</option>
                    <option value="Texas">Texas</option>
                    <option value="Utah">Utah</option>
                    <option value="Vermont">Vermont</option>
                    <option value="Virginia">Virginia</option>
                    <option value="Virgin Islands">Virgin Islands</option>
                    <option value="Washington">Washington</option>
                    <option value="West Virginia">West Virginia</option>
                    <option value="Wisconsin">Wisconsin</option>
                    <option value="Wyoming">Wyoming</option>
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
                  type="number"
                  min="0"
                  maxLength="5"
                  placeholder="78701"
                  value={this.state.zip}
                  onChange={this.onChangePropertyZip}
                ></input>
              </div>
              <div class="w-full md:w-full px-3 mb-6 md:mb-0 py-8">
                <button
                  type="submit"
                  class="w-full bg-yellow-500 rounded px-24 py-4 text-lg font-semibold text-white mr-1 focus:ring-4 focus:ring-yellow-300 focus:ring-inset"
                >
                  Create Listing
                  {/* sanity check listing */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}
