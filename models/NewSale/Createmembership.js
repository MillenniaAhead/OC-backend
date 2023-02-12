const mongoose = require("mongoose");
const { Schema } = mongoose;

const CreateMembershipSchema = new Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    services: {
        type: String,
        require: true,
    },
    sessions: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    termsConditions: {
         type: String,
         require: true
    }
});

const CreateMembership = mongoose.model("CreateMembership", CreateMembershipSchema);

module.exports = {
    CreateMembership,
};
