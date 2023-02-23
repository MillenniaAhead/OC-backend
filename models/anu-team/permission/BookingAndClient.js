const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookingAndClientSchema = new Schema(
  {
    access_own_calendar:{
        type:Array
    },
    access_other_staff_calendars:{
        type:Array
    },
    can_book_appointments:{
        type:Array
    },
    home:{
        type:Array
    },
    clients:{
        type:Array
    },
    can_see_client_contact_info:{
        type:Array
    },
    can_download_clients:{
        type:Array
    },
    messages:{
        type:Array
    } 
  }
)

const BookingAndClient = mongoose.model("BookingAndClients", bookingAndClientSchema);

module.exports = {
    BookingAndClient,
    bookingAndClientSchema
};
