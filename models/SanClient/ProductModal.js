const mongoose = require("mongoose");
const { Schema } = mongoose;


const ProductSchema = new Schema(
  {
    product: {
      type: String,
      require: true,
    },
    
  },
  
);

const Product = mongoose.model("Products", ProductSchema);

module.exports = {
    Product,
};
