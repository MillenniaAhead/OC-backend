const mongoose = require("mongoose");
const { Schema } = mongoose

const editSingleSchema = new Schema(
    {
        package_name: {
            type: String,
            require: true,
        },
        treatment_type: {
            type: String,
            require: true,
        }, 
        select_category: {
            type: String,
            require: true,
        },
        service_discription: {
            type: String,
            require: true,
        },
        aftercare_discription: {
            type: String,
            require: true,
        },
        duraiton:{
            type: String,
            require : true
        },
        price_type:{
            type: String,
            require : true
        },
        price:{
            type: String,
            require : true
        },
        special:{
            type: String,
            require : true
        },
        pricing_name: {
            type: String,
            require: true,
        },
        tax: {
            type: String,
            require: true,
        },
        voucher_expiry: {
            type: String,
            require: true
        }
    },
    { timestamps: true } // save date info
);

const EditSingle = mongoose.model("EditSingle", editSingleSchema);

module.exports = {
    EditSingle,
};
