const mongoose = require('mongoose');
const { Schema } = mongoose;
const { commissionSchema} = require('./team-member/Commission')

const TeamMemberSchema = new Schema({
    profile_image:{
        type:String
    },
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String
    },
    team_member_title:{
        type:String
    },
    notes:{
        type:String
    },
    email:{
        type:String,
        require:true
    },
    number:{
        type:Number
    },
    start_date:{
        type:Date,
        require:true
    },
    end_date:{
        type:Date
    },
    location:{
        type:String,
        require:true
    },
    allow_calendar_bookings:{
        type:Boolean,
        require:true
    },
    services:{
        type:Array,
        require:true
    },
    color:{
        type:String,
        require:true
    },
    commission:{
        type:[commissionSchema],
    },
    team_member_permission:{
        type:String,
        require:true
    }
});

const TeamMember = mongoose.model("TeamMember", TeamMemberSchema)

module.exports = {
    TeamMember
}