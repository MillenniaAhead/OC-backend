const mongoose = require("mongoose");
const { Schema } = mongoose;


const FormSchema = new Schema(
  {
    form: {
      type: String,
      require: true,
    },
    
  },
  
);

const Form = mongoose.model("Forms", FormSchema);

module.exports = {
    Form,
};
