var json = require("./ClozeCard.json");

var inquirer = require("inquirer");

var count = 0;

var playCloze = function() {
		if (count < 5) {
			inquirer.prompt([
			{
				type: "input",
				name: "cloze1",
				message: json[0].partial
			},{
				type: "input",
				name: "cloze2",
				message: json[1].partial
			},{
				type: "input",
				name: "cloze3",
				message: json[2].partial
			},{
				type: "input",
				name: "cloze4",
				message: json[3].partial
			},{
				type: "input",
				name: "cloze5",
				message: json[4].partial
			}
		]).then(function(answer) {
				if (answer.cloze1 === json[0].cloze) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.cloze2 === json[1].cloze) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.cloze3 === json[2].cloze) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.cloze4 === json[3].cloze) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.cloze5 === json[4].cloze) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
			
				count++;

				playCloze();
			});
		
		} else {
			console.log("All questions asked!");
		}		
}

playCloze();

