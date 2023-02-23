const mongoose = require("mongoose");
const { Schema } = mongoose;
const { bookingAndClientSchema } = require("./permission/BookingAndClient")

const permissionSchema = new Schema({
     bookings_and_clients:{
        type:[bookingAndClientSchema]
     }
})

const Permission = mongoose.model("Permission", permissionSchema);

module.exports = {
    Permission
};