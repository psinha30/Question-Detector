const fs = require('fs');


module.exports = (question) => {

  (async ()=>{

 		const questions = [];

 		questions.push(question);

	        var file = fs.createWriteStream('./asked_question/question.txt');
	        var file_copy = fs.createWriteStream('./asked_question/question_copy.txt');

			file.on('error', function(err) { console.log(err)});
			file_copy.on('error', function(err) { console.log(err)});

			questions.map((v) => { file.write(v); })
			questions.map((v) => { file_copy.write(v); })


			file.end();
			file_copy.end();

})();

}

