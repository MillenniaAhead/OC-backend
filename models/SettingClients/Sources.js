const mongoose = require("mongoose");
const { Schema } = mongoose;

const SourcesSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
});

const Sources = mongoose.model("Sources", SourcesSchema);

module.exports = {
  Sources,
};
