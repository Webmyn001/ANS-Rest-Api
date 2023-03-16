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
       
    },
    Body3: {
        type: String,
       
    },
    Body4: {
        type: String,
       
    },
    Body5: {
        type: String,
        
    },
    Body6: {
        type: String,
       
    },
    Body7: {
        type: String,
       
    },
    Body8: {
        type: String,
       
    },
    Body9: {
        type: String,
       
    },
    Body10: {
        type: String,
       
    },
    Body11: {
        type: String,
       
    },
    Body12: {
        type: String,
       
    },
    Body13: {
        type: String,
       
    },
    Body14: {
        type: String,
       
    },
    Body15: {
        type: String,
       
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
    
    
    Body16: {
        type: String,
       
    },
    
    
},{ timestamps: true });
module.exports = mongoose.model('Lesson', Lesson);