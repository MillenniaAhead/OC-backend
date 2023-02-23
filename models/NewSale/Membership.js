const mongoose = require("mongoose");
const { Schema } = mongoose;

const MembershipSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Membership = mongoose.model("Membership", MembershipSchema);

module.exports = {
  Membership,
};
