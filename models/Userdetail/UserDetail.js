const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserDetailSchema = new Schema({
  main_business: {
    type: String,
    require: true,
  },
  related_business: {
    type: Array,
    require: true,
  },
  team_size: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  software_name: {
    type: String,
    require: true,
  },
  hear_about: {
    type: String,
    require: true,
  },
});

const UserDetail = mongoose.model("UserDetail", UserDetailSchema);

module.exports = {
  UserDetail,
};
