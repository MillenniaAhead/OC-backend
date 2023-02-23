const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductsSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Products = mongoose.model("Products", ProductsSchema);

module.exports = {
  Products,
};
