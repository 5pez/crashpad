import React from "react";
import PropertyRow from "./PropertyRow";
import PropertyCategoryRow from "./PropertyCategoryRow";
import "../css/PropertyTable.css";

const PropertyTable = () => {
  // wanted to have separate file for properties, but I couldn't do .map
  const properties = [
    {
      category: "Cabin",
      price: 750,
      address: "123 Brush Creek",
      city: "Bend",
      state: "OR",
      bedrooms: 10,
      bathrooms: 8,
      description: "It's out in nature. Rent now!",
      image:
        "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      category: "House",
      price: 400,
      address: "2015 Hamburger Ln",
      city: "Houston",
      state: "TX",
      bedrooms: 4,
      bathrooms: 3,
      description: "It's a house.",
      image:
        "https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      category: "Condo",
      price: 120,
      address: "55 Wilson Rd",
      city: "Tampa",
      state: "FL",
      bedrooms: 2,
      bathrooms: 1,
      description: "Rent please",
      image:
        "https://images.unsplash.com/photo-1560185009-5bf9f2849488?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      category: "Condo",
      price: 80,
      address: "321 Average Condo",
      city: "Dallas",
      state: "TX",
      bedrooms: 2,
      bathrooms: 2,
      description: "5 minutes from downtown!",
      image:
        "https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
    {
      category: "Cabin",
      price: 440,
      address: "215 Lancelot Dr",
      city: "Hillsboro",
      state: "TX",
      bedrooms: 6,
      bathrooms: 5,
      description: "Next to a lake or something",
      image:
        "https://images.unsplash.com/photo-1525113990976-399835c43838?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    },
  ];
  // const properties = [props].map((property) => [
  //   property.status,
  //   property.email,
  //   property.category,
  //   property.price,
  //   property.address,
  //   property.city,
  //   property.state,
  //   property.bedrooms,
  //   property.bathrooms,
  //   property.description,
  //   property.image
  // ]);

  // convert properties to an array of objects
  // const rows = [];
  // for (let i = 0; i < 5; i++) {
  //   rows.push(properties[i]);
  // }
  // console.log(rows);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Pad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {properties.map((property) => (
                  <tr key={property.address}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={property.image}
                            alt={
                              "Photograph of " +
                              property.address +
                              " property in " +
                              property.city +
                              ", " +
                              property.state
                            }
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {property.address}
                          </div>
                          <div className="text-sm text-gray-500">
                            {property.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {property.city}
                      </div>
                      <div className="text-sm text-gray-500">
                        {property.state}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${property.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {property.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Tags go here
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // const rows = [];
  // let lastCategory = null;

  // props.properties.forEach((property) => {
  //   if (property.category !== lastCategory) {
  //     rows.push(
  //       <PropertyCategoryRow
  //         category={property.category}
  //         key={property.category}
  //       />
  //     );
  //   }
  //   rows.push(<PropertyRow property={property} key={property.name} />);
  //   lastCategory = property.category;
  // });
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Price</th>
  //         <th>Description</th>
  //         <th>Address</th>
  //         <th>City</th>
  //         <th>State</th>
  //       </tr>
  //     </thead>
  //     <tbody>{rows}</tbody>
  //   </table>
  // );
};

export default PropertyTable;
