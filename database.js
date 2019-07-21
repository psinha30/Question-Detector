const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

async function connect(){
	await mongoose.connect('mongodb://abc:abc123@ds147842.mlab.com:47842/stackoverflow')
				  .then(console.log("connected to db."))
}


module.exports = { connect };

