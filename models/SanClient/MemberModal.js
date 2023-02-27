const mongoose = require("mongoose");
const { Schema } = mongoose;


const MemberSchema = new Schema(
  {
    member: {
      type: String,
      require: true,
    },
    
  },
  
);

const Member = mongoose.model("Members", MemberSchema);

module.exports = {
    Member,
};
