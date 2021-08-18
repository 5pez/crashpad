import { BookmarkOutline } from "heroicons-react";
import { Link } from "react-router-dom";

export default function PropertyCard(props) {
  const property = props.properties;
  const currency = "$";
  return (
    <article class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl">
      <div>
        <Link to={`/pad/${property.id}`}>
          <img
            alt={
              "Photograph of " +
              property.address +
              " property in " +
              property.city +
              ", " +
              property.state
            }
            class="object-cover h-48 w-full hover:opacity-50"
            src={property.image}
          />
        </Link>
      </div>

      <header class="flex items-center justify-between leading-tight md:pt-4 md:pl-4 md:pr-4">
        <h1 class="text-lg truncate">
          <a class="no-underline font-bold hover:text-yellow-500" href="#">
            {property.description}
          </a>
        </h1>
        <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {currency + property.price}/night
        </p>
      </header>

      <div class="flex items-center justify-between leading-none md:pl-4 md:pr-4">
        <h2 class="text-base">{property.address}</h2>
        <p class="text-sm">
          {property.bedrooms} br · {property.bathrooms} bath
        </p>
      </div>

      <footer class="flex items-center justify-between leading-none md:pl-4 md:pb-4 md:pr-4">
        <div className="text-sm text-gray-500">
          {property.city + ", " + property.state}
        </div>
        <div class="flex items-center leading-none">
          <a href="#">
            <BookmarkOutline class="text-gray-800 hover:text-yellow-500" />
          </a>
        </div>
        {/* <div class="truncate text-xs text-gray-600">
          {property.ammenities.map((ammenity, index) => {
            return (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1"
                key={index}
              >
                {ammenity}
              </span>
            );
          })}
        </div> */}
      </footer>
    </article>
  );
}
