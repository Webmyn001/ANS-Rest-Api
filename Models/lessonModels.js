const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Lesson = new Schema({
    Title: {
        type: String,
        required: true
    },
    Subtitle: {
        type: String,
        required: true
    },
    Body1: {
        type: String,
        required: true
    },
    Body2: {
        type: String,
        required: true
    },
    Body3: {
        type: String,
        required: true
    },
    images: [
        {
            public_id:{
             type: String,
             required: true,
             
            },
            url: {
              type:String,
              required:true,
             
            },
             
         },
         ],
    
    
    Body4: {
        type: String,
        required: true
    },
    
    
},{ timestamps: true });
module.exports = mongoose.model('Lesson', Lesson);