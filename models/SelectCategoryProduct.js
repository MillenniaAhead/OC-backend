const mongoose = require("mongoose");
const { Schema } = mongoose;

const selectCategoryProductSchema = new Schema(
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

const SelectCategoryProduct = mongoose.model("SelectCategoryProduct", selectCategoryProductSchema);

module.exports = {
    SelectCategoryProduct,
};
