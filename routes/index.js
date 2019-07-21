var express = require('express');
const fs = require('fs');
var router = express.Router();
const mongoose = require('mongoose');



const Question = require('../models/question');
const asked_question = require('../question');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



router.post("/question", (req, res)=>{
	let{ name, email, question } = req.body;
		
		console.log(name)

	let newQuestion = new Question({
		name, email, question
	});

	newQuestion.save();
	
	// exporting the question to another file for use 
	asked_question(question);

	res.redirect('/generated');
});

// ================================================================================





router.get('/generated', (req, res)=>{

	 // const results = [1,2,3,4,5];
	 const results = fs.readFileSync('./asked_question/generated_question.txt').toString().split("\n");
	 results.pop();

	 const tags = fs.readFileSync('./asked_question/generated_question_tags.txt').toString().split("\n");
	 // tags.pop();

	 const question = fs.readFileSync('./asked_question/question.txt').toString().split("\n");
	 
	 res.render('question', {question: question, results: results, tags: tags });
})


module.exports = router;
