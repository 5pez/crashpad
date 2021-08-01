import React from "react";
import PropertyRow from "./PropertyRow";
import PropertyCategoryRow from "./PropertyCategoryRow";
import "../css/PropertyTable.css";

const PropertyTable = (props) => {
  const rows = [];
  let lastCategory = null;

  props.properties.forEach((property) => {
    if (property.category !== lastCategory) {
      rows.push(
        <PropertyCategoryRow
          category={property.category}
          key={property.category}
        />
      );
    }
    rows.push(<PropertyRow property={property} key={property.name} />);
    lastCategory = property.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Price</th>
          <th>Description</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default PropertyTable;
