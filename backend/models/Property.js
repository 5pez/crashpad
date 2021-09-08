const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let propertySchema = new Schema(
  {
    category: String,
    price: Number,
    address: String,
    city: String,
    state: String,
    country: String,
    bedrooms: Number,
    bathrooms: Number,
    description: String,
    image: String,
    ammenities: Array,
    id: String,
  },
  {
    collection: "properties",
  }
);

module.exports = mongoose.model("Property", propertySchema);
