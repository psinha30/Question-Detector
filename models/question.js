const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questionModel = new schema({

	name:{
		type: String, 
		required: true
	},
	email:{
		type: String, 
		required: true
	},
	question:{
		type: String, 
		required: true 
	},
	date:{
		type: Date, 
		default: Date.now
	}
});

module.exports = Question = mongoose.model('question', questionModel);
