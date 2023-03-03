const mongoose = require("mongoose");
const { Schema } = mongoose;

const advancePricingSchema = new Schema(
    {
        pricing_name: {
            type: String,
            require: true,
        },
        duration: {
            type: String,
            require: true,
        },
        price_type: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            require: true,
        },
        special_price: {
            type: String,
            require: true,
        }
    },
    { timestamps: true } // save date info
);

const AdvancePricing = mongoose.model("AdvancePricing", advancePricingSchema);

module.exports = {
    AdvancePricing,
};
