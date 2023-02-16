const mongoose = require("mongoose");
const { Schema } = mongoose;


const SCUClientSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    birthdate: {
      type: Date,
      require: true,
      
    },
    clientInfo: {
      type: String,
      require: true,
    },
    additionalPhone: {
      type: Number,
      
    },
    clientSource: {
      type: String,
      require: true,
    },
    address:{
      type: String,
    },
    language:{
      type: String,
      require:true,
    },
  },
  
);

const SCUClient = mongoose.model("SCUClient", SCUClientSchema);

module.exports = {
    SCUClient,
};
