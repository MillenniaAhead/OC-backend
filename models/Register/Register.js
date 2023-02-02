const mongoose = require("mongoose");
const { Schema } = mongoose;

const RegisterSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  mobilenumber: {
    type: Number,
    require: true,
  },
  country: {
    type: String,
    require: true,
  }
});

const Register = mongoose.model("Register", RegisterSchema);

module.exports = {
  Register,
};
