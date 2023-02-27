const mongoose = require("mongoose");
const { Schema } = mongoose;

const addNewSchema = new Schema(
    {
        package_name: {
            type: String,
            require: true,
        },
        package_category: {
            type: String,
            require: true,
        }, 
        package_discription: {
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
        }
    },
    { timestamps: true } // save date info
);

const AddNew = mongoose.model("AddNew", addNewSchema);

module.exports = {
    AddNew,
};
