const mongoose = require("mongoose");
const { Schema } = mongoose;

const voucherListSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },

    },


    { timestamps: true } // save date info
);

const VoucherList = mongoose.model("VoucherList", voucherListSchema);

module.exports = {
    VoucherList,
};
