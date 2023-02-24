const mongoose = require("mongoose");
const { Schema } = mongoose;

const createMemberShipProductSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },

        sessions: {
            type: Number,
            require: true,
        },
        amount: {
            type: Number,
            require: true,
        },

        terms: {
            type: String,
            require: true,
        },

    },
    { timestamps: true } // save date info
);

const CreateMemberShipProduct = mongoose.model("CreateMemberShipProduct", createMemberShipProductSchema);

module.exports = {
    CreateMemberShipProduct,
};
