const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const problemSchema = new Schema({
    title: {type : String, required: true, max: [128 , 'Too long , max is 128 character']},
    description:{type: String, required: true} ,
    grade:{type:String, required:true },
    image : {type: String} ,
    createdAt: { type: Date, default: Date.now },
    author: {type: String , required: false}

})

module.exports = mongoose.model('Problem' , problemSchema);
