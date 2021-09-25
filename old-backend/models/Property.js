const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let propertySchema = new Schema(
  {
    // _id: mongoose.Types.ObjectId,
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
    ammenities: String,
    zip: Number,
  },
  {
    collection: "properties",
  }
);

module.exports = mongoose.model("Property", propertySchema);
