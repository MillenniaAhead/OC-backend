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
        type:Date,
        require:true
    },
    end_date:{
        type:Date,
        require:true
    },
    promotion_value:{
        type:String,
        require:true
    },
    promotion_value_type:{
        type:String,
        require:true
    },
    max_use_limit:{
        type:Number,
        require:true
    },
    min_purchase_amount:{
        type:Number,
        require:true
    },
    promotion1:{
        type:Boolean
    },
    promotion2:{
        type:Boolean
    },
    discount_code:{
        type:String
    }
});

const Deal = mongoose.model('Deal', dealSchema);

module.exports = {
    Deal
};