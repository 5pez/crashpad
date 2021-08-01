import React from "react";

const PropertyRow = (props) => {
  const property = props.property;
  return (
    <tr>
      <td>${property.price}</td>
      <td>{property.description}</td>
      <td>{property.address}</td>
      <td>{property.city}</td>
      <td>{property.state}</td>
    </tr>
  );
};
export default PropertyRow;
