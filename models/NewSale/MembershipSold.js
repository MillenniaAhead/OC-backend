const mongoose = require("mongoose");
const { Schema } = mongoose;

const MembershipSoldSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const MembershipSold = mongoose.model("MembershipSold", MembershipSoldSchema);

module.exports = {
  MembershipSold,
};
