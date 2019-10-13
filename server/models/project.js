const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
		max: [128, "Too long , max is 128 character"]
	},
	description: { type: String, required: true },
	slug:String,
	level:String,
	concept:String,
	tasks: [
		{
			day: { type: Number },
			taskTitle: { type: String, required: true },
			taskDes: { type: String, required: true },
			requirements: [{ type: String, required: true }],
			slug: { type: String, required: true },
			image: [{ type: String, required: true }],
			isDone: { type: Boolean, required: true }
		}
	],
	image: { type: String },
	createdAt: { type: Date, default: Date.now },
	author: { type: String, required: false }
});

module.exports = mongoose.model("Project", projectSchema);
