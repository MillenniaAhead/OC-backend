const mongoose = require('mongoose');
const { Schema } = mongoose;

const dealSchema = new Schema({
    deal_name:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    services:{
        type:Array,
        require:true
    },
    products:{
        type:Array,
        require:true
    },
    memberships:{
        type:Array
    },
    vouchers:{
        type:Array
    },
    start_date:{
        type:String,
        require:true
    },
    end_date:{
        type:String,
        require:true
    },
    promotion_value:{
        type:String,
        require:true
    },
    max_use_limit:{
        type:String,
        require:true
    },
    min_purchase_amount:{
        type:String,
        require:true
    },
    promotion1:{
        type:String
    },
    promotion2:{
        type:String
    },
    discount_code:{
        type:String
    }
});

const Deal = mongoose.model('Deal', dealSchema);

module.exports = {
    Deal
};