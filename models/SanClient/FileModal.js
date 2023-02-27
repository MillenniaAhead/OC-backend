const mongoose = require("mongoose");
const { Schema } = mongoose;


const FileSchema = new Schema(
  {
    file: {
      type: String,
      require: true,
    },
    
  },
  
);

const File = mongoose.model("Files", FileSchema);

module.exports = {
    File,
};
