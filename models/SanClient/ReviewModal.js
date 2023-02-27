const mongoose = require("mongoose");
const { Schema } = mongoose;


const ReviewSchema = new Schema(
  {
    review: {
      type: String,
      require: true,
    },
    
  },
  
);

const Review = mongoose.model("Reviews", ReviewSchema);

module.exports = {
    Review,
};
