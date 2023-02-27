const mongoose = require("mongoose");
const { Schema } = mongoose;

const newProductSchema = new Schema(
    {
        product_name: {
            type: String,
            require: true,
        },
        product_barcode: {
            type: Number,
            require: true,
        },
        short_description:{
            type: Number,
            require: true,
        },
        product_description: {
            type: String,
            require: true,
        },
        supply_price: {
            type: String,
            require: true,
        },
        tax: {
            type: String,
            require: true,
        },
        sku: {
            type: String,
            require: true,
        },
        current_stock: {
            type: Number,
            require: true,
        }
    },
    { timestamps: true } // save date info
);

const NewProduct = mongoose.model("NewProduct", newProductSchema);

module.exports = {
    NewProduct,
};
