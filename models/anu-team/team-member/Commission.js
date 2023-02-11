const mongoose = require("mongoose");
const { Schema } = mongoose;

const commissionSchema = new Schema(
  {
    effective_date:{
        type:Date
    },
    commission_cycle:{
        type:String
    },
    service_commission:{
        type:String
    },
    product_commission:{
        type:String
    },
    voucher_commission:{
        type:String
    },
    membership_commission:{
        type:String
    }
  }
)

const Commission = mongoose.model("TeamMemberCommissions", commissionSchema);

module.exports = {
    Commission,
    commissionSchema
};
