import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import properties from "../properties.json";
import LazyLoad from "react-lazyload";
import { BookmarkOutline } from "heroicons-react";
import dotenv from "dotenv";

require("dotenv").config();

const PropertyPage = (props) => {
  const [property, setProperty] = useState([]);
  const [image, setImage] = useState(property.image);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.crashpad.dev/pads/${props.match.params.id}`)
      // .get(process.env.REACT_APP_API_URL + "/pads/" + props.match.params.id)
      .then((res) => {
        res.data.ammenities = res.data.ammenities.split(",");
        setProperty(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (
      property.image === "" ||
      property.image === undefined ||
      !property.image.includes("/")
    ) {
      setImage(
        "https://www.realestateguide.com/wp-content/plugins/rets_duo/assets/noimage-large.png"
      );
    } else {
      setImage(property.image);
    }
  }, [property.image]);

  return isLoading ? (
    <div className="text-center">Loading pad...</div>
  ) : (
    <div class="container mx-auto px-4 md:px-12">
      <section class="py-8 px-4">
        <h1 class="font-bold text-3xl leading-tight text-left break-words">
          {property.description}
        </h1>
        <div class="flex justify-between pb-4">
          <span class="flex space-x-2">
            <span class="">5 Star Host!</span>
            <span class="">·</span>
            <span class="">Superhost</span>
            <span class="">·</span>
            <a
              href={`http://maps.google.com/?q=${property.city}, ${property.state}, ${property.country}`}
              target="_blank"
              class="underline"
            >{`${property.city}, ${property.state}, ${property.country}`}</a>
          </span>
          <a href="#" class="flex space font-semibold hover:text-yellow-500">
            {<BookmarkOutline />}Save
          </a>
        </div>

        {/* Images */}
        <LazyLoad>
          <div class="container grid grid-cols-3 gap-2 mx-auto">
            <div class="w-full rounded">
              <img src={image} alt="image" />
            </div>
            <div class="w-full rounded">
              <img src={image} alt="image" />
            </div>
            <div class="w-full rounded">
              <img src={image} alt="image" />
            </div>
            <div class="w-full rounded">
              <img src={image} alt="image" />
            </div>
            <div class="w-full rounded">
              <img src={image} alt="image" />
            </div>
            <div class="w-full rounded">
              <img src={image} alt="image" />
            </div>
          </div>
        </LazyLoad>

        <div class="flex flex-col p-4 divide-y divide-y-reverse">
          <h2 class="font-semibold text-2xl">{`${property.category} hosted by HOSTNAME`}</h2>
          <span class="flex space-x-1">
            {/* change to guests */}
            <span>{`${property.bedrooms} guests`}</span>
            <span>·</span>
            <span>{`${property.bedrooms} bedrooms`}</span>
            <span>·</span>
            <span>{`${property.bathrooms} baths`}</span>
          </span>
        </div>

        {/* <div class="flex justify-between px-4"> */}
        <div class="grid grid-cols-2 gap-4">
          <div class="flex justify-between px-4 divide-y divide-y-reverse">
            <div class="truncate text-xs text-gray-600">
              {property.ammenities.map((ammenity, index) => {
                return (
                  <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-1"
                    key={index}
                  >
                    {ammenity}
                  </span>
                );
              })}
            </div>
            {/* <span class="border-2 border-gray-200 rounded shadow-lg p-4">
            <h3 class="text-xl pb-4">{`$${property.price} / night`}</h3>
            <button class="inline-block bg-yellow-500 rounded px-24 py-4 text-lg font-semibold text-white mr-1 focus:ring-4 focus:ring-yellow-300 focus:ring-inset">
              Reserve
            </button>
          </span> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyPage;
