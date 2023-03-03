const mongoose = require("mongoose");
const { Schema } = mongoose;


const AppoinmentSchema = new Schema(
  {
    appoinmet: {
      type: String,
      require: true,
    },
    
  },
  
);

const Appoinment = mongoose.model("Appoinments", AppoinmentSchema);

module.exports = {
    Appoinment,
};
