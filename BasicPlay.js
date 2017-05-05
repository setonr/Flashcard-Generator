var json = require("./BasicCard.json");

var inquirer = require("inquirer");

var count = 0;

var playGame = function() {
		if (count < 5) {
			inquirer.prompt([
			{
				type: "input",
				name: "flash1",
				message: json[0].front
			},{
				type: "input",
				name: "flash2",
				message: json[1].front
			},{
				type: "input",
				name: "flash3",
				message: json[2].front
			},{
				type: "input",
				name: "flash4",
				message: json[3].front
			},{
				type: "input",
				name: "flash5",
				message: json[4].front
			}
		]).then(function(answer) {
				if (answer.flash1 === json[0].back) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.flash2 === json[1].back) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.flash3 === json[2].back) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.flash4 === json[3].back) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
				if (answer.flash5 === json[4].back) {
				console.log("Correct!");
				} else {
					console.log("Nope!");
				}
			
				count++;

				playGame();
			});
		
		} else {
			console.log("All questions asked!");
		}		
}

playGame();

