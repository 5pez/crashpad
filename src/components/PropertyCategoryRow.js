import React from "react";

const PropertyCategoryRow = (props) => {
  const category = props.category;
  return (
    <tr>
      <th colSpan="10">{category}</th>
    </tr>
  );
};

export default PropertyCategoryRow;
