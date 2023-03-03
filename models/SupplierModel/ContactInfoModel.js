const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactInfoSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phone: {
    countryCode: String,
    number: String
  },
  telephone: {
    countryCode: String,
    number: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
      },
      message: "Invalid email format"
    }
  },
  website: {
    type: String,
    required: true
  }
});

const ContactInfo= mongoose.model('Form', ContactInfoSchema );

module.exports = ContactInfo;
