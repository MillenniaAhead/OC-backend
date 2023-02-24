const mongoose = require("mongoose");
const { Schema } = mongoose;

const voucherSettingListSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },

    },


    { timestamps: true } // save date info
);

const VoucherSettingList = mongoose.model("VoucherSettingList", voucherSettingListSchema);

module.exports = {
    VoucherSettingList,
};
