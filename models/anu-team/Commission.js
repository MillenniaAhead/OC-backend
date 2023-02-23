const mongoose = require("mongoose");
const { Schema } = mongoose;

const commissionSchema = new Schema(
  {
    commission:{
        type:Array
    }
  }
);

const Commission = mongoose.model("Commissions", commissionSchema);

module.exports = {
    Commission
};
