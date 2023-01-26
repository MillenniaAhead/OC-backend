const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect('mongodb://localhost:27017/millenia');
    console.log("Connected on database");
  } catch (err) {
    console.log(err);
  }
}

module.exports = main;
