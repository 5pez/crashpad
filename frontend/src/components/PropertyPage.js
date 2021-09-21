import properties from "../properties.json";
import LazyLoad from "react-lazyload";
import { BookmarkOutline } from "heroicons-react";

export default function PropertyPage({ match }) {
  const property = () => {
    const { id } = match.params;
    const property = properties.find(({ id: propId }) => propId === id);
    return property;
  };

  const {
    category,
    price,
    address,
    city,
    state,
    country,
    bedrooms,
    bathrooms,
    description,
    image,
    ammenities,
    id,
  } = property();

  return (
    <div class="container mx-auto px-4 md:px-12">
      <section class="py-8 px-4">
        <h1 class="font-bold text-3xl leading-tight text-left break-words">
          {description}
        </h1>
        <div class="flex justify-between pb-4">
          <span class="flex space-x-2">
            <span class="">5 Star Host!</span>
            <span class="">·</span>
            <span class="">Superhost</span>
            <span class="">·</span>
            <a
              href={`http://maps.google.com/?q=${city}, ${state}, ${country}`}
              target="_blank"
              class="underline"
            >{`${city}, ${state}, ${country}`}</a>
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
          <h2 class="font-semibold text-2xl">{`${category} hosted by HOSTNAME`}</h2>
          <span class="flex space-x-1">
            {/* change to guests */}
            <span>{`${bedrooms} guests`}</span>
            <span>·</span>
            <span>{`${bedrooms} bedrooms`}</span>
            <span>·</span>
            <span>{`${bathrooms} baths`}</span>
          </span>
        </div>

        <div class="flex justify-between px-4">
          <div class="truncate text-xs text-gray-600">
            {ammenities.map((ammenity, index) => {
              return (
                <span
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1"
                  key={index}
                >
                  {ammenity}
                </span>
              );
            })}
          </div>
          <span class="border-2 border-gray-200 rounded shadow-lg p-4">
            <h3 class="text-xl pb-4">{`$${price} / night`}</h3>
            <button class="inline-block bg-yellow-500 rounded px-24 py-4 text-lg font-semibold text-white mr-1 focus:ring-4 focus:ring-yellow-300 focus:ring-inset">
              Reserve
            </button>
          </span>
        </div>
      </section>
    </div>
  );
}
