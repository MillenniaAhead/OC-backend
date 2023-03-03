const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect('mongodb://127.0.0.1:27017/millenia');
    console.log("Connected on database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = main;
