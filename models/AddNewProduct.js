const mongoose = require("mongoose");
const { Schema } = mongoose;

const addNewProductSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        barcode: {
            type: String,
            require: true,
        },

        amount: {
            type: Number,
            require: true,
        },

        description: {
            type: String,
            require: true,
        },
        Pdescription: {
            type: String,
            require: true,
        },

    },
    { timestamps: true } // save date info
);

const AddNewProduct = mongoose.model("AddNewProduct", addNewProductSchema);

module.exports = {
    AddNewProduct,
};
