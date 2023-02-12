const mongoose = require("mongoose");
const { Schema } = mongoose;

const SalesHistorySchema = new Schema({
  search: {
    type: String,
    require: true,
  },
});

const SalesHistory = mongoose.model("SalesHistory", SalesHistorySchema);

module.exports = {
  SalesHistory,
};
