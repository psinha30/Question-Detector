const fs = require('fs');


(async ()=>{

	await fs.readFile('./scrapped_questions/json.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/json.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/android.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/android.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/angularjs.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/angularjs.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/asp_net.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/asp_net.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/c#.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/c#.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/c++.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/c++.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/c.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/c.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/css.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/css.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});



	await fs.readFile('./scrapped_questions/dot_net.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/dot_net.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});



	await fs.readFile('./scrapped_questions/html.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/html.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});



	await fs.readFile('./scrapped_questions/ios.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/ios.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/iphone.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/iphone.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});



	await fs.readFile('./scrapped_questions/java.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/java.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});



	await fs.readFile('./scrapped_questions/javascript.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/javascript.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});



	await fs.readFile('./scrapped_questions/jquery.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/jquery.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/mysql.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/mysql.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/objective_c.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/objective_c.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/php.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/php.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});



	await fs.readFile('./scrapped_questions/python.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/python.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/ruby_on_rails.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/ruby_on_rails.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});


	await fs.readFile('./scrapped_questions/sql.json',
	    function(err, data) { 
	        // json data
	        var jsonData = data;
	 
	        // parse json
	        var jsonParsed = JSON.parse(jsonData);

	        const question = [];

	        for(let i=0; i < jsonParsed.items.length; i++){

	        	question.push(jsonParsed.items[i].title);
	        }


	        var file = fs.createWriteStream('./final_question/sql.txt');
			file.on('error', function(err) { console.log(err)});
			question.map((v) => { file.write(v + '\n'); })


			file.end();
	});

})();