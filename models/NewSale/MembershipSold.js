const mongoose = require("mongoose");
const { Schema } = mongoose;

const MembershipSoldSchema = new Schema({
  status: {
    type: String,
    require: true,
  },
  types: {
    type: String,
    require: true,
  },        
});

const MembershipSold = mongoose.model("MembershipSold", MembershipSoldSchema);

module.exports = {
  MembershipSold,
};
