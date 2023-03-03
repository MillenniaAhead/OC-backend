const mongoose = require("mongoose");
const { Schema } = mongoose;

const singleServiceSchema = new Schema(
    {
        service_name: {
            type: String,
            require: true,
        },
        treatment_type: {
            type: String,
            require: true,
        }, 
        service_category: {
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
        select_all: {
            type: String,
            require:true,
        },
        pricing_name: {
            type: String,
            require: true,
        },
        tax: {
            type: String,
            require: true,
        }
    },
    { timestamps: true } // save date info
);

const SingleService = mongoose.model("SingleService", singleServiceSchema);

module.exports = {
    SingleService,
};
