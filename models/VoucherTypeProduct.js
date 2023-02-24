const mongoose = require("mongoose");
const { Schema } = mongoose;


const voucherTypeProductSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        value: {
            type: Number,
            require: true,
        },
        amount: {
            type: Number,
            require: true,
        },

    },
    // { timestamps: true } // save date info
);

const VoucherTypeProduct = mongoose.model("VoucherTypeProduct", voucherTypeProductSchema);

module.exports = {
    VoucherTypeProduct,
};
