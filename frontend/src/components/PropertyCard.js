import React from "react";
import { useState, useEffect } from "react";
import { BookmarkOutline } from "heroicons-react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

export default function PropertyCard(props) {
  const property = props.properties;
  const currency = "$";
  const [image, setImage] = useState(property.image);

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
  }, [image]);

  return (
    <article className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl">
      <div>
        <Link to={`/pad/${property.id}`}>
          <LazyLoad height={250}>
            <img
              alt={
                "Photograph of " +
                property.address +
                " property in " +
                property.city +
                ", " +
                property.state
              }
              className="object-cover h-48 w-full md:h-72 hover:opacity-50"
              src={image}
            />
          </LazyLoad>
        </Link>
      </div>

      <header className="flex items-center justify-between leading-tight md:pt-4 md:pl-4 md:pr-4">
        <h1 className="text-lg truncate">
          <Link to={`/pad/${property.id}`}>
            <a className="no-underline font-bold hover:text-yellow-500">
              {property.description}
            </a>
          </Link>
        </h1>
        <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {currency + property.price}/night
        </p>
      </header>

      <div className="flex items-center justify-between leading-none md:pl-4 md:pr-4">
        <h2 className="text-base">{property.address}</h2>
        <p className="text-sm">
          {property.bedrooms} br · {property.bathrooms} bath
        </p>
      </div>

      <footer className="flex items-center justify-between leading-none md:pl-4 md:pb-4 md:pr-4">
        <div className="text-sm text-gray-500">
          {property.city + ", " + property.state}
        </div>
        <div className="flex items-center leading-none">
          <a href="#">
            <BookmarkOutline className="text-gray-800 hover:text-yellow-500" />
          </a>
        </div>
      </footer>
    </article>
  );
}
