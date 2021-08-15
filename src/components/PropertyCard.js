export default function PropertyCard(props) {
  const property = props.properties;
  const currency = "$";
  return (
    <article class="overflow-hidden rounded-lg shadow-lg">
      <a href="#">
        <img
          alt={
            "Photograph of " +
            property.address +
            " property in " +
            property.city +
            ", " +
            property.state
          }
          class="object-cover h-48 w-full"
          src={property.image}
        />
      </a>

      <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
          <a class="no-underline hover:text-gray-400 text-gray-800" href="#">
            {property.address}
          </a>
        </h1>
        <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          {currency + property.price}/night
        </p>
      </header>

      <footer class="flex items-center leading-none p-2 md:p-4">
        <div className="text-sm text-gray-500">
          {property.city + ", " + property.state}
        </div>
      </footer>
    </article>
  );
}
