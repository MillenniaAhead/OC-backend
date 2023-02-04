const mongoose = require("mongoose");
const { Schema } = mongoose;

const openingHourSchema = new Schema(
  {
   monday:{
    type:Object
   },
   tuesday:{
    type:Object
   },
   wednesday:{
    type:Object
   },
   thursday:{
    type:Object
   },
   friday:{
    type:Object
   },
   saturday:{
    type:Object
   },
   sunday:{
    type:Object
  }
}
);

const OpeningHour = mongoose.model("OpeningHours", openingHourSchema);

module.exports = {
    OpeningHour
};
