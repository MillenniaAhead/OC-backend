const mongoose = require("mongoose");
const { Schema } = mongoose;


const ClientFeedSchema = new Schema(
  {
    note: {
      type: String,
      require: true,
    },
    
  },
  
);

const ClientFeed = mongoose.model("ClientFeeds", ClientFeedSchema);

module.exports = {
    ClientFeed,
};
