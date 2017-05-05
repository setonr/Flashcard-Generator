var inquirer = require("inquirer");

var fs = require("fs");

var BasicCard = function(front, back) {
	this.front = front;
	this.back = back;
};

BasicCard.prototype.printQuestions = function() {
	console.log("Question: " + this.front);
	console.log("Answer: " + this.back);
};

var count = 0;

var questionArray = [];

var addFlash = function() {
	if (count < 5) {
		inquirer.prompt([
		{
			name: "front",
			message: "Add a question to the front of the flashcard!",
			type: "input"
		}, {
			name: "back",
			message: "Add an answer to the back of the flashcard!",
			type: "input"
		}
		]).then(function(questions) {
			var newQuestion = new BasicCard(
				questions.front,
				questions.back);

			questionArray.push(newQuestion);

			fs.writeFile("BasicCard.json", JSON.stringify(questionArray, null, 2));

			count++;

			addFlash();
		});
	}
};


addFlash();

module.exports = BasicCard;