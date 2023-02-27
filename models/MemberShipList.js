const mongoose = require("mongoose");
const { Schema } = mongoose;

const memberShipListSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },

    },


    { timestamps: true } // save date info
);

const MemberShipList = mongoose.model("MemberShipList", memberShipListSchema);

module.exports = {
    MemberShipList,
};
