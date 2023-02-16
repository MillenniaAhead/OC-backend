const mongoose = require("mongoose");
const { Schema } = mongoose;


const SCUClientFeedSchema = new Schema(
  {
    note: {
      type: String,
      require: true,
    },
    
  },
  
);

const SCUClientFeed = mongoose.model("SCUClientFeeds", SCUClientFeedSchema);

module.exports = {
    SCUClientFeed,
};
