const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
		max: [128, "Too long , max is 128 character"]
	},
	description: { type: String, required: true },
	slug:String,
	body:{ type:String , required:true },
	image: { type: String },
	tags:[String],
	createdAt: { type: Date, default: Date.now },
	author: { type: String, required: false }

});

module.exports = mongoose.model("Blog" , blogSchema);