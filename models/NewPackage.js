const mongoose = require("mongoose");
const { Schema } = mongoose;

const newPackageSchema = new Schema(
    {
        package_name: {
            type: String,
            require: true,
        },
        package_category: {
            type: String,
            require: true,
        },
        package_description: {
            type: String,
            require: true,
        },
        package_available: {
            type: String,
            require: true,
        },
        schedule_type: {
            type: String,
            require: true,
        },
        pricing_type: {
            type: String,
            require: true,
        },
        retail_price: {
            type: Number,
            require: true,
        }
    },
    { timestamps: true } // save date info
);

const NewPackage = mongoose.model("NewPackage", newPackageSchema);

module.exports = {
    NewPackage,
};
