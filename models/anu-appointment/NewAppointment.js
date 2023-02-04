const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewAppointmentSchema = new Schema({
    date:{
        type:Date,
        require:true
    },
    start_time:{
        type:String,
        require:true
    },
    services:{
        type:Array,
        require:true
    },
    duration:{
        type:String,
        require:true
    },
    team_member:{
        type:String,
        require:true
    },
    tip:{
        type:String
    },
    payment:{
        type:String
    }
})

const NewAppointment = mongoose.model("NewAppointments", NewAppointmentSchema);

module.exports = {
    NewAppointment
};