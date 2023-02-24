const mongoose = require("mongoose");
const { Schema } = mongoose;

const attractNewClientSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },

    },


    { timestamps: true } // save date info
);

const AttractNewClient = mongoose.model("AttractNewClient", attractNewClientSchema);

module.exports = {
    AttractNewClient,
};
