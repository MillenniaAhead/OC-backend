const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoginSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Login = mongoose.model("Login", LoginSchema);

module.exports = {
  Login,
};
