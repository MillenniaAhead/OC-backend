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
});

const CreateMembership = mongoose.model("CreateMembership", CreateMembershipSchema);

module.exports = {
    CreateMembership,
};
